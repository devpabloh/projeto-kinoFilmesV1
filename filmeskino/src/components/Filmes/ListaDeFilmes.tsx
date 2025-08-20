import Container from "../template/Container"
import Grid from "../template/Grid"
import Titulo from "../template/Titulo"
import CardFilme from "./CardFilme"

interface ListaDeFilmesProps{
    filmes: Filme[],
    className?: string,
    titulo: string,
    tituloPequeno?: boolean
}

export default function ListaDeFilmes({filmes,titulo,className,tituloPequeno}:ListaDeFilmesProps){
    return(
        <Container className={className}>
            <Titulo className="pl-2" texto={titulo} pequeno alinhar="center"/>
            <Grid className="md:grid-cols-2 lg:grid-cols-3 py-5">
                {filmes.map((filme)=>{
                    return(
                        <CardFilme filme={filme}/>
                    )
                })}
            </Grid>
        </Container>
    )
}