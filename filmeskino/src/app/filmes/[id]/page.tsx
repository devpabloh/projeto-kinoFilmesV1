import CardFilmeDetalhado from "@/components/Filmes/CardFilmeDetalhado"
import Elenco from "@/components/Filmes/Elenco"
import SugestoesFilmes from "@/components/Filmes/SugestoesFilmes"
import Wrap from "@/components/template/Wrap"
import useMovieAPI from "@/hooks/useMovieAPI"

export default async function Filme(props:any){
    const id = props.params.id
    const {getFilmeDetalhado} = useMovieAPI()
    const detalhesFilme: FilmeDetalhado = await getFilmeDetalhado(String(id))

    

    return(
        <Wrap>
            <CardFilmeDetalhado filme={detalhesFilme}/>
            <Elenco elenco={detalhesFilme.atores}/>
            <SugestoesFilmes idFilme={String(id)}/>
        </Wrap>
    )
}