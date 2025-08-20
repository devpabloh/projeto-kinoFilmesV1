import {StarIcon} from "@phosphor-icons/react"
import Flex from "../template/Flex"
import mergeClasses from "@/utils/mergeClasses"

interface NotaProps{
    nota: number,
    grande?: boolean
}

export default function Nota({nota,grande}:NotaProps){
    return(
        <Flex className="mt-2">
            <StarIcon weight="fill" className={mergeClasses(``)}/>
            <span className={mergeClasses("font-semibold",{"text-xl":grande})}>{nota.toFixed(1)}/10</span>
        </Flex>
    )
}