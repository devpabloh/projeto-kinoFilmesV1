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
        try {
            const {json, status} = await get('/movie/now_playing')
            
            if (status !== 200 || !json.results) {
                console.error('Erro na API:', json)
                return []
            }
            
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
        } catch (error) {
            console.error('Erro ao buscar filmes:', error)
            return []
        }
    }

    async function getFilmeDetalhado(idFilme: string):Promise<FilmeDetalhado>{
        try {
            const {json, status} = await get(`/movie/${idFilme}`, "append_to_response=credits")
            
            if (status !== 200) {
                throw new Error('Erro ao buscar filme detalhado')
            }
        
            return {
                    id: json.id,
                    titulo: json.title,
                    descricao: json.overview,
                    dataDeLancamento: new Date(json.release_date),
                    nota: json.vote_average,
                    linkImagemFundo: formatarImagemUrl(json.backdrop_path),
                    linkImagemPoster: formatarImagemUrl(json.poster_path),
                    tituloOriginal: json.original_title,
                    generos: json.genres?.map((g:any )=> {
                        return {
                            id: g.id, nome: g.name
                        }
                    }) || [],
                    atores: json.credits?.cast?.slice(0,10).map((ator:any)=>{
                        return {
                            id: ator.id,
                            nome: ator.name,
                            imagemPerfil: formatarImagemUrl(ator.profile_path),
                            personagem: ator.character
                        }
                    }) || [],
                    duracao: json.runtime,
                }
        } catch (error) {
            console.error('Erro ao buscar filme detalhado:', error)
            throw error
        }
    }

    async function getFilmesSimilares(idFilme: string): Promise<Filme[]>{
        try {
            const {json, status} = await get(`/movie/${idFilme}/similar`)
            
            if (status !== 200 || !json.results) {
                console.error('Erro na API:', json)
                return []
            }
            
            const selecionados = json.results.slice(0,9)
            return selecionados.map((item: any)=>{
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
        } catch (error) {
            console.error('Erro ao buscar filmes similares:', error)
            return []
        }
    }

    async function getGenerosDoFilme(filmesID:string){
        try {
            const {json, status} = await get(`/movie/${filmesID}`)
            
            if (status !== 200 || !json.genres) {
                console.error('Erro na API:', json)
                return []
            }

            return json.genres.map((genero: any)=>{
                return {
                    id: genero.id,
                    nome: genero.name,
                }
            })
        } catch (error) {
            console.error('Erro ao buscar gêneros do filme:', error)
            return []
        }
    }

    async function getAtorDetalhado(idAtor: string){
        try {
            const {json, status} = await get(`/person/${idAtor}`)
            
            if (status !== 200) {
                throw new Error('Erro ao buscar ator detalhado')
            }
            
            return {
                id: json.id,
                nome: json.name,
                biografia: json.biography,
                imagemPerfil: formatarImagemUrl(json.profile_path),
                dataNascimento: new Date(json.birthday),
                localNascimento: json.place_of_birth,
                genero: json.gender === 1 ? "Feminino" : "Masculino",
            }
        } catch (error) {
            console.error('Erro ao buscar ator detalhado:', error)
            throw error
        }
    }

    async function getImagensAtor(idAtor: string){
        try {
            const {json, status} = await get(`/person/${idAtor}/images`);

            if(status !== 200){
                console.error(`Erro na API:`, json);
                return [];
            }

            if(!json.profiles || !Array.isArray(json.profiles)){
                console.warn(`Profiles não encontrado ou não é um array:`, json)
            }

            return json.profiles.map((img: any)=>formatarImagemUrl(img.file_path))
        } catch (error) {
            console.error(`Erro ao buscar imagens do ator:`, error)
            return [];
        }
    }

    async function getFilmesDoAtor(idAtor: string): Promise<Filme[]>{
        try {
            const {json, status} = await get(`/person/${idAtor}/movie_credits`)
            
            if (status !== 200 || !json.cast) {
                console.error('Erro na API:', json)
                return []
            }
            
            const selecionados = json.cast.slice(0,9)
            return selecionados.map((item: any)=>{
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
        } catch (error) {
            console.error('Erro ao buscar filmes do ator:', error)
            return []
        }
    }

    return{ 
        getUltimosFilmes,
        getGenerosDoFilme,
        getFilmeDetalhado,
        getFilmesSimilares,
        getAtorDetalhado,
        getImagensAtor,
        getFilmesDoAtor    
    }
}
