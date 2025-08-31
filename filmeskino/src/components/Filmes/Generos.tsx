'use client'
import { useEffect, useState } from "react"
import Flex from "../template/Flex"
import useMovieAPI from "@/hooks/useMovieAPI"
import mergeClasses from "@/utils/mergeClasses"

interface GenerosProps{
    idFilme: string,
    grande?: boolean,
    generosPadrao?: Genero[];
}

export default function Generos({grande, idFilme, generosPadrao}:GenerosProps){
    const [generos, setGeneros] = useState<Genero[]>([])
    const {getGenerosDoFilme} = useMovieAPI()

    useEffect(()=>{
        if(generosPadrao && generosPadrao?.length > 0){
            setGeneros(generosPadrao)
            return
        }
        getGenerosDoFilme(idFilme).then(setGeneros)
    },[])
    return(
        <Flex className="flex-wrap justify-start">
            {generos.map((genero)=>{
                return <span key={genero.id} className={mergeClasses(`bg-red-kino/50 font-semibold backdrop-blur-md p-1 rounded-lg text-xs`, {"text-lg":grande})}>{genero.nome}</span>
            })}
        </Flex>
    )
}