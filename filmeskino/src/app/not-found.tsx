import Descricao from "@/components/template/Descricao";
import Flex from "@/components/template/Flex";
import Titulo from "@/components/template/Titulo";
import Link from "next/link";

export default function NotFound(){
    return(
        <Flex col className="mt-32 w-full">
            <Titulo texto="404" alinhar="center" className="mb-0"/>
            <Descricao texto="Página não encontrada!" className="text-lg font-semibold"/>
            <Link href="/filmes" className="bg-red-kino font-bold p-2 rounded-lg hover:brightness-75">Voltar para a página inicial</Link>
        </Flex>
    )
}