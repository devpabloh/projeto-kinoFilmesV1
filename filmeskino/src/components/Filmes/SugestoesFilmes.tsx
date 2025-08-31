import Container from "../template/Container"
import ListaDeFilmes from "./ListaDeFilmes"
import useMovieAPI from "@/hooks/useMovieAPI"

interface SugestoesFilmesProps{
    idFilme: string
}

export default async function SugestoesFilmes({idFilme}:SugestoesFilmesProps){
    const {getFilmesSimilares} = useMovieAPI()
    const filmes = await getFilmesSimilares(idFilme)

    return (
        <Container className="my-16 bg-neutral-950 rounded-lg lg:pt-10">
            
            <ListaDeFilmes filmes={filmes} titulo="Recomendações"/>
        </Container>
    )
}