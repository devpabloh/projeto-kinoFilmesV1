'use client'
import { useEffect, useState } from "react"
import Flex from "./Flex"
import Image from "next/image"
import mergeClasses from "@/utils/mergeClasses"


interface ImagemComFallBackProps{
    url: string
    imgAlt: string
    className?: string
    children: React.ReactNode
}

export default function ImagemComFallBack({children, imgAlt, url, className}:ImagemComFallBackProps){
    const [imagemPadrao, setImagemPadrao] = useState(false)

    useEffect(()=>{
        fetch(url).then(resposta => setImagemPadrao(!resposta.ok))
    },[])

    if(imagemPadrao || !url){
        return <Flex className="h-full w-full absolute -z-30">{children}</Flex>
    }

    return <Image fill alt={imgAlt} src={url} className={mergeClasses("object-cover", className)} sizes="80vw"/>
}