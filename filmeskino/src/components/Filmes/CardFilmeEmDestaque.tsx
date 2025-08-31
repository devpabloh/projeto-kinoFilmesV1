import Link from "next/link"
import Container from "../template/Container"
import Descricao from "../template/Descricao"
import Flex from "../template/Flex"
import Titulo from "../template/Titulo"
import PosterDoFilme from "./PosterDoFilme"

interface CardFilmeEmDestaqueProps{
    filme: Filme,
    className?: string,
    priority?: boolean
}

export default function CardFilmeEmDestaque({filme,className, priority = false}:CardFilmeEmDestaqueProps){
    return(
        <Container className={className}>
            <Flex className="gap-8 flex-col-reverse lg:flex-row">
                <Flex col className="flex-1 items-start">
                    <Titulo alinhar="left" texto={filme.titulo}/>
                    <Descricao texto={filme.descricao} className="text-xl text-justify"/>
                    <Link href={`/filmes/${filme.id}`} 
                    className={`px-3 py-3 bg-red-kino font-semibold rounded-lg hover:brightness-75`}
                    >Mais Detalhes</Link>
                </Flex>
                <PosterDoFilme titulo={filme.titulo} url={filme.linkImagemPoster} priority={priority}/>
            </Flex>
        </Container>
    )
}