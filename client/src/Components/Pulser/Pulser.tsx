export function Pulser() {
  return (
    <div className="mr-10">
      <div className="flex gap-2 justify-center">
        <div className="bg-sky-600 p-4 rounded-md shadow-yellow-400 shadow-2xl relative pb-3 animate-move-down">
          <h2 className="text-center text-black font-normal">Se ha encontrado un Filum.</h2>
          <div className="bg-yellow-300 rounded-full w-5 h-5 absolute left-[194px] bottom-8">
            <div className="bg-yellow-300  rounded-full animate-ping-effect w-full h-full">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}