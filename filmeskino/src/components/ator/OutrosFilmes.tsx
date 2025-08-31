import Container from "../template/Container"
import ListaDeFilmes from "../Filmes/ListaDeFilmes"
import useMovieAPI from "@/hooks/useMovieAPI"

interface OutrosFilmesProps{
    idAtor: string
}

export default async function OutrosFilmes({idAtor}:OutrosFilmesProps){
    const {getFilmesDoAtor} = useMovieAPI()
    const filmes = await getFilmesDoAtor(idAtor)

    return (
        <Container>
            <ListaDeFilmes filmes={filmes} titulo="Participou de:"/>
        </Container>
    )
}