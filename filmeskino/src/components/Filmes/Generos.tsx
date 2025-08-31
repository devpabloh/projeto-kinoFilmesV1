'use client'
import { useEffect, useState } from "react"
import Flex from "../template/Flex"
import useMovieAPI from "@/hooks/useMovieAPI"
import mergeClasses from "@/utils/mergeClasses"
import Skeleton from "../template/Skeleton"

interface GenerosProps{
    idFilme: string,
    grande?: boolean,
    generosPadrao?: Genero[];
}

export default function Generos({grande, idFilme, generosPadrao}:GenerosProps){
    const [generos, setGeneros] = useState<Genero[] | null>(null)
    const {getGenerosDoFilme} = useMovieAPI()

    useEffect(()=>{
        if(generosPadrao && generosPadrao?.length > 0){
            setGeneros(generosPadrao)
            return
        }
        getGenerosDoFilme(idFilme).then(setGeneros)
    },[])

    if(!generos){
        return (
            <Flex className="flex-wrap justify-start">
                {Array(4).fill(0).map((_,i)=>{
                    return <Skeleton key={i} className="rounded-lg h-8 w-16"/>
                })}
            </Flex>
        )
    }

    return(
        <Flex className="flex-wrap justify-start">
            {generos.map((genero)=>{
                return <span key={genero.id} className={mergeClasses(`bg-red-kino/50 font-semibold backdrop-blur-md p-1 rounded-lg text-xs`, {"text-lg":grande})}>{genero.nome}</span>
            })}
        </Flex>
    )
}