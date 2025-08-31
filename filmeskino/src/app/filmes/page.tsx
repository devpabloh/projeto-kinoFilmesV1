import useMovieAPI from "@/hooks/useMovieAPI";
import Wrap from "@/components/template/Wrap";
import Carrossel from "@/components/template/Carrossel";
import CardFilmeEmDestaque from "@/components/Filmes/CardFilmeEmDestaque";
import ListaDeFilmes from "@/components/Filmes/ListaDeFilmes";

export default async function Filmes(){
    const {getUltimosFilmes} = useMovieAPI();
    const filmes:Filme[] = await getUltimosFilmes()

    return(
        <Wrap>
            <Carrossel slideAutomatico>
                {filmes.map((filme, index )=>{
                    return <CardFilmeEmDestaque filme={filme} key={filme.id} priority={index === 0}/>
                })}
            </Carrossel>
            <ListaDeFilmes filmes={filmes} titulo="Últimos Filmes"/>
        </Wrap>
    )
}