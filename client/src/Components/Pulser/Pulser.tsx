export function Pulser() {
  return (
    <div>
      <div className="flex gap-3 justify-center">
        <div className="bg-blue-300 p-3 rounded-md shadow-yellow-400 shadow-2xl relative animate-move-right">
          <h2 className="text-center text-black">Se ha encontrado un Filum.</h2>
          <div className="bg-yellow-300 rounded-full w-5 h-5 absolute left-[194px] bottom-8">
            <div className="bg-yellow-300  rounded-full animate-ping-effect w-full h-full">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}