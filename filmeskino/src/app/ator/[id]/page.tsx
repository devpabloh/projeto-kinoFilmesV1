'use client'
import {useParams} from "next/navigation"
import useMovieAPI from "@/hooks/useMovieAPI"
import { useState, useEffect } from "react"
import Wrap from "@/components/template/Wrap"
import Container from "@/components/template/Container"

export default function Ator(){
    const [ator, setAtor] = useState<AtorDetalhado | null>(null)
    const {id} = useParams()
    const {getAtorDetalhado} = useMovieAPI();

    useEffect(()=>{
        getAtorDetalhado(String(id)).then(setAtor)
    },[])

    return(
        <Wrap>
            <Container className="mt-32 md:mt-44 min-h-96 w-full">
                <div>{JSON.stringify(ator)}</div>
            </Container>
        </Wrap>
    )
}