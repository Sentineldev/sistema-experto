import { ReactNode } from "react"

interface PropsPreviosButton {
  text: string,
  onClick: () => void,
  icon: ReactNode,
}

export function PreviousButton({ text, onClick, icon }: PropsPreviosButton) {
  return (
    <button className={`w-auto p-4 mt-1text-left rounded-lg transition-colors duration-200  bg-gray-300 hover:bg-gray-400 text-gray-700`} onClick={onClick}>
      <span className="flex items-center">
        {icon} {text}
      </span>
    </button>
  )
}

