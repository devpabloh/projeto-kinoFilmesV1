'use client'
import CardFilmeDetalhado from "@/components/Filmes/CardFilmeDetalhado"
import Elenco from "@/components/Filmes/Elenco"
import SugestoesFilmes from "@/components/Filmes/SugestoesFilmes"
import Wrap from "@/components/template/Wrap"
import useMovieAPI from "@/hooks/useMovieAPI"
import {useParams} from "next/navigation"
import { useEffect, useState } from "react"

export default function Filme(){
    const {id} = useParams()
    const [detalhesFilme, setDetalhesFilmers] = useState<FilmeDetalhado | null>(null)
    const {getFilmeDetalhado} = useMovieAPI()

    useEffect(()=>{
        getFilmeDetalhado(String(id)).then(setDetalhesFilmers)
    },[])

    return(
        <Wrap>
            {detalhesFilme && <CardFilmeDetalhado filme={detalhesFilme}/>}
            {detalhesFilme?.atores && <Elenco elenco={detalhesFilme.atores}/>}
            <SugestoesFilmes idFilme={String(id)}/>
        </Wrap>
    )
}