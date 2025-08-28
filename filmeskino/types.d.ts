interface Filme{
    id: string;
    titulo: string;
    descricao: string;
    linkImagemFundo: string;
    linkImagemPoster: string;
    nota: number;
    dataDeLancamento: Date;
}

interface FilmeDetalhado extends Filme{
    tituloOriginal: string;
    generos: Genero[];
    atores: Ator[];
    duracao:  number;
}

type Ator = {
    id: string;
    nome: string;
    imagemPerfil: string;
    personagem: string;
}

type Genero = {
    id: string;
    nome: string;
}