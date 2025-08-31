import Titulo from "../template/Titulo";
import Wrap from "../template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";
import Carrossel from "../template/Carrossel";
import Image from "next/image";
import Flex from "../template/Flex";
import Container from "../template/Container";

interface AlbumProps{
    idAtor: string;
    priority?: boolean;
}

export default async function Album({idAtor, priority = false}:AlbumProps){
    const {getImagensAtor} = useMovieAPI()
    const imagensResposta = await getImagensAtor(idAtor)

    const imagensPorSlide = 3;
    let imagensRestantes = imagensResposta;
    const imagens = []

    while(imagensRestantes.length >= imagensPorSlide){
        imagens.push(imagensRestantes.splice(0, imagensPorSlide))
    }

    if(imagens.length <= 0){
        return;
    }

    return(
        <Wrap>
            <Titulo texto="Fotos do(a) artista" className="w-full" alinhar="center"/>
            <Carrossel slideAutomatico={false}>
                {imagens.map((grupo: string[], index: number) => {
                    return (
                        <Container key={index}>
                            <Flex className="justify-between w-full">
                                {grupo.map((linkImagem, imgIndex) => {
                                    return (
                                        <Wrap key={linkImagem} className={`h-52 md:h-96 lg:min-h-[600px] relative overflow-hidden rounded-lg`}>
                                            <Image 
                                                src={linkImagem}
                                                alt="Foto do ator"
                                                className="object-contain"
                                                sizes="40vw"
                                                fill
                                                priority={priority && index === 0 && imgIndex === 0} 
                                            />
                                        </Wrap>
                                    )
                                })}
                            </Flex>
                        </Container>
                    )
                })}
            </Carrossel>
        </Wrap>
    )
}