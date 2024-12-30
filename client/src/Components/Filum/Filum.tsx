import { ReactNode } from "react"

interface PropsFilum{
    nameFilum: string,
    id: string,
    children: ReactNode
}

export function Filum({nameFilum, id, children}:PropsFilum){
    return(
      <dialog id={id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="flex justify-center mb-2">
            {children}
          </div>
          <h3 className="font-bold text-xl">¡El filum del organismo es:"{nameFilum}!</h3>
        </div>
      </dialog>
    
    )
}