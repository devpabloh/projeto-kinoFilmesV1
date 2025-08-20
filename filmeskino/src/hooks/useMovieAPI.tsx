const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE
const BG_FILME_URL = process.env.NEXT_PUBLIC_BG_FILME_URL
const TOKEN_DE_LEITURA = process.env.NEXT_PUBLIC_TOKEN_DE_LEITURA


export default function useMovieAPI(){
    async function get(fragmentoURL: string, params?: string){
        const fragmento = fragmentoURL.startsWith('/')? fragmentoURL.substring(1) : fragmentoURL

        try{
            const resposta = await fetch(`${URL_BASE}/${fragmento}?language=pt-BR&page=1${params? `&${params}` : ''}`, {
                method: 'GET', 
                headers: { 
                    accept: 'application/json',
                    Authorization: `Bearer ${TOKEN_DE_LEITURA}`
                }
            })

            const json = await resposta.json()
            return {
                json, status: resposta.status
            }

        }catch(error){
            console.log(error)
            throw error
        }
    }

    function formatarImagemUrl(url: string){
        if(!url) return ''
        return `${BG_FILME_URL}${url}`
    }

    async function getUltimosFilmes():Promise<Filme[]>{
        const {json, status} = await get('/movie/now_playing')
        const fatia = json.results.slice(0,12)
        return fatia.map((item:any)=>{
            return {
                id: item.id,
                titulo: item.title,
                descricao: item.overview,
                dataDeLancamento: new Date(item.release_date),
                nota: item.vote_average,
                linkImagemFundo: formatarImagemUrl(item.backdrop_path),
                linkImagemPoster: formatarImagemUrl(item.poster_path)
            }
        })
    }

    async function getGenerosDoFilme(filmesID:string){
        const {json} = await get(`/movie/${filmesID}`)

        return json.genres.map((genero: any)=>{
            return {
                id: genero.id,
                nome: genero.name,
            }
        })
    }

    return{ 
        getUltimosFilmes,
        getGenerosDoFilme
    }
}
