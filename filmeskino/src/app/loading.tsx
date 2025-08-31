'use client'

import Wrap from "@/components/template/Wrap";
import { CircleNotchIcon } from "@phosphor-icons/react";


export default function Carregando(){
    return (
        <Wrap className="absolute w-full top-1/2">
            <CircleNotchIcon size={80} weight="bold" className="text-white animate-spin m-auto"/>
        </Wrap>
    )
}