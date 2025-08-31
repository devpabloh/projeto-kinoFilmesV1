"use client"
import { UserIcon } from "@phosphor-icons/react";
import Flex from "../template/Flex";
import ImagemComFallBack from "../template/ImagemComFallBack";
import Wrap from "../template/Wrap";

interface ImagemPerfilProps{
    url: string;
    imgAlt: string;
}

export default function ImagemPerfil({imgAlt, url}: ImagemPerfilProps){
    return (
        <div className={`absolute rounded-full p-3 bg-zinc-900
            w-60 h-60 md:w-75 md:h-72 lg:w-80 lg:h-80
            left-1/2 transform -translate-x-1/2 -translate-y-3/4
        `}>
            <Wrap className="relative h-full w-full rounded-full">
                <ImagemComFallBack url={url} imgAlt={imgAlt} >
                    <Flex className="w-full h-full">
                        <UserIcon className="w-3/4 h-4/5 text-zinc-500"/>
                    </Flex>
                </ImagemComFallBack>
            </Wrap>
            
        </div>
    )
}