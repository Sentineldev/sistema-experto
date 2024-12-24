import { ReactNode } from "react"

interface PropsButtonSpeaker{
    onClick: () => void,
    icon: ReactNode
}

export function ButtonSpeaker({onClick, icon}:PropsButtonSpeaker){
    return(
        <button onClick={onClick} className=" w-auto p-4 rounded-lg transition-colors duration-200 bg-gray-50 hover:bg-gray-100">
            <span>
                {icon}
            </span>
        </button>
    )
}