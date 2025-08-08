import mergeClasses from "@/utils/mergeClasses";

interface BotaoProps{
    texto: string,
    icon?: React.JSX.Element
    className?: string
}

export default function Botao({texto, className, icon}:BotaoProps){
    return(
        <button type="button" className={mergeClasses(`flex gap-1 items-center justify-center px-3 py-2 font-semibold rounded-lg hover:brightness-75 hover:transition-all bg-red-kino`)}>
            {texto}
            {icon}
        </button>
    )
}