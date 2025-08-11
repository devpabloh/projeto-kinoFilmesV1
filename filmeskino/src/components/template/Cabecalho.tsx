import { PopcornIcon } from "@phosphor-icons/react";
import Flex from "./Flex";
import Wrap from "./Wrap";
import Link from "next/link";

export default function Cabecalho(){
    return(
        <Wrap className="bg-neutral-950">
            <header className="p-4">
                <Flex className="justify-between">
                    <Link href="/">
                        <PopcornIcon/>
                    </Link>
                    <Link href=""></Link>
                </Flex>
            </header>
        </Wrap>
    )
}