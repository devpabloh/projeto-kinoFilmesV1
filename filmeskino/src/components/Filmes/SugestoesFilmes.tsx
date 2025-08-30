import { useEffect, useState } from "react"
import Container from "../template/Container"
import Titulo from "../template/Titulo"
import ListaDeFilmes from "./ListaDeFilmes"
import useMovieAPI from "@/hooks/useMovieAPI"

interface SugestoesFilmesProps{
    idFilme: string
}

export default function SugestoesFilmes({idFilme}:SugestoesFilmesProps){
    const [filmes, setFilmes] = useState<Filme[]>([])
    const {getFilmesSimilares} = useMovieAPI()

    useEffect(()=>{
        getFilmesSimilares(idFilme).then(setFilmes)
    },[])

    return (
        <Container className="my-16 bg-neutral-950 rounded-lg lg:pt-10">
            
            <ListaDeFilmes filmes={filmes} titulo="Recomendações"/>
        </Container>
    )
}