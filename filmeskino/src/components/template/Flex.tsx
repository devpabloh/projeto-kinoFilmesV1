interface FlexProps{
    children: React.ReactNode,
    className?: string,
    col?:boolean,
    row?:boolean
}

export default function Flex({children, className, col, row}:FlexProps){
    return(
        <div className="flex bg-red-300">
            {children}
        </div>
    )
}