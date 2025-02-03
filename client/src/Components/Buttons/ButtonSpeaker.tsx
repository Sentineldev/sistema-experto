import { ReactNode } from "react"

interface PropsButtonSpeaker {
  onClick: () => void,
  icon: ReactNode
}

export function ButtonSpeaker({ onClick, icon }: PropsButtonSpeaker) {
  return (
    <button onClick={onClick} className="w-auto p-4 mt-1 rounded-lg transition-colors duration-200  bg-gray-300 hover:bg-gray-400 text-gray-700">
      <span>
        {icon}
      </span>
    </button>
  )
}         