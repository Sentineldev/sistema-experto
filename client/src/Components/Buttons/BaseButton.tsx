import { ReactNode } from "react"

interface PropsBaseButton {
  text: string,
  onClick: () => void,
  icon: ReactNode
}

export function BaseButton({ text, onClick, icon }: PropsBaseButton) {
  return (
    <button
      className="w-full p-4 text-left rounded-lg transition-colors duration-200 bg-gray-300 hover:bg-gray-400 text-gray-700"
      onClick={onClick}
    >
      <span className="flex items-center">
        <span className="w-6 h-6 mr-3 flex items-center justify-center rounded-full border-2 border-gray-500">
          {icon}
        </span>
        {text}
      </span>
    </button>

  )
}