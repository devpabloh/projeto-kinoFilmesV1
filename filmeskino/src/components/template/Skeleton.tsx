import mergeClasses from "@/utils/mergeClasses";

interface SkeletonProps{
    className?: string;
}

export default function Skeleton({className}: SkeletonProps){
    return (
        <div className={mergeClasses(className, "bg-red-kino/60 animate-pulse" )}>

        </div>

    )
}