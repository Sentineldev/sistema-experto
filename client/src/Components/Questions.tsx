type PropsQuestion = {
  message: string
}


function Questions({ message }: PropsQuestion) {
  return (
    <div className="h-full">
      <h3 className=" text-gray-800 font-bold text-2xl ml-2">
        {message}
      </h3>
    </div>
  )
}

export default Questions;