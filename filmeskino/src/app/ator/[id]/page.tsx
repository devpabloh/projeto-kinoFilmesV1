import useMovieAPI from "@/hooks/useMovieAPI"
import Wrap from "@/components/template/Wrap"
import Container from "@/components/template/Container"
import ImagemPerfil from "@/components/ator/ImagemDePerfil"
import DetalhesAtor from "@/components/ator/DetalhesAtor"
import Album from "@/components/ator/Album"
import OutrosFilmes from "@/components/ator/OutrosFilmes"

export default async function Ator(props: any){
    const id = props.params.id
    const {getAtorDetalhado} = useMovieAPI();
    const ator = await getAtorDetalhado(String(id))

    return(
        <Wrap>
                <Container bidPadding className="mt-32 md:mt-44 min-h-96 w-full">
                    <ImagemPerfil url={ator?.imagemPerfil} imgAlt={`Imagem de ${ator?.nome}`}/>
                    <DetalhesAtor ator={ator}/>
                </Container>
            <Album idAtor={String(id)}/>
            <OutrosFilmes idAtor={String(id)}/>
        </Wrap>
    )
}