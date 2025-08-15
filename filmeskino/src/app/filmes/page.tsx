'use client'
import {useEffect, useState} from "react";
import useMovieAPI from "@/hooks/useMovieAPI";
import Wrap from "@/components/template/Wrap";

export default function Filmes(){
    const [filmes, setFilmes] = useState<Filme[]>([])
    const {getUltimosFilmes} = useMovieAPI();

    useEffect(()=>{
        getUltimosFilmes().then(setFilmes)
    },[])
    return(
        <Wrap>
            {JSON.stringify(filmes)}
        </Wrap>
    )
}