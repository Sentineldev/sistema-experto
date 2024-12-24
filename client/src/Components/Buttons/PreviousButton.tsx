import { ReactNode } from "react"

interface PropsPreviosButton{
  text: string,
  onClick: () => void, 
  icon: ReactNode,
}

export function PreviousButton({text, onClick, icon}:PropsPreviosButton){
  return(
    <button  className={`w-auto p-4 text-left rounded-lg transition-colors duration-200 bg-gray-50 hover:bg-gray-100 text-gray-700`} onClick={onClick}>
        <span className="flex items-center">
          {icon} {text}
        </span>
    </button>
  )
}

