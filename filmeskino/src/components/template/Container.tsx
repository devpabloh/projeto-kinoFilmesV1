import mergeClasses from "@/utils/mergeClasses";

interface ContainerProps{
    children: React.ReactNode,
    className?: string,
    bidPadding?: boolean
}

export default function Container({children,bidPadding,className}:ContainerProps){
    return(
        <div className={mergeClasses("w-full max-w-screen-xl mx-auto p-4", {"py-20":bidPadding}, className)}>
            {children}
        </div>
    )
}