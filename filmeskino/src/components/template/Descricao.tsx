import mergeClass from "@/utils/mergeClasses";

interface DescricaoProps{
    texto: string
    className?: string
}

export default function Descricao({texto, className}:DescricaoProps){
    return(
        <p className={mergeClass(`mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm lg:text-lg text-justify`, className)}
        >{texto}</p>
    )
}