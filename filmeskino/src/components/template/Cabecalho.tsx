'use client'
import { PopcornIcon } from "@phosphor-icons/react";
import Flex from "./Flex";
import Wrap from "./Wrap";
import Link from "next/link";

export default function Cabecalho(){
    return(
        <Wrap className="bg-neutral-950">
            <header className="p-4 px-auto">
                <Flex className="justify-around">
                    <Link href="/"
                    className={`font-bold px-4 py-2 bg-red-kino flex gap-1 items-center justify-center rounded-lg`}>
                        <PopcornIcon/>
                        Kino
                    </Link>
                    <Link href="https://www.themoviedb.org/"
                    className={'font-bold px-4 hover:brightness-75'}
                    target="_blank" rel="noopener noferrer"
                    >
                        The Movie DB
                    </Link>
                </Flex>
            </header>
        </Wrap>
    )
}