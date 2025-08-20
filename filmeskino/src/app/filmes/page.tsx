'use client'
import {useEffect, useState} from "react";
import useMovieAPI from "@/hooks/useMovieAPI";
import Wrap from "@/components/template/Wrap";
import Carrossel from "@/components/template/Carrossel";
import CardFilmeEmDestaque from "@/components/Filmes/CardFilmeEmDestaque";
import ListaDeFilmes from "@/components/Filmes/ListaDeFilmes";

export default function Filmes(){
    const [filmes, setFilmes] = useState<Filme[]>([])
    const {getUltimosFilmes} = useMovieAPI();

    useEffect(()=>{
        getUltimosFilmes().then(setFilmes)
    },[])
    return(
        <Wrap>
            <Carrossel slideAutomatico>
                {filmes.map((filme )=>{
                    return <CardFilmeEmDestaque filme={filme} key={filme.id}/>
                })}
            </Carrossel>
            <ListaDeFilmes filmes={filmes} titulo="Últimos Filmes"/>
        </Wrap>
    )
}