interface Filme{
    id: string;
    titulo: string;
    descricao: string;
    linkImagemFundo: string;
    linkImagemPoster: string;
    nota: number;
    dataLancamento: Date;
}

type Genero = {
    id: string,
    nome: string
}