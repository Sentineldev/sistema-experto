type PropsQuestion = {
    message: string
}


function Questions({message}:PropsQuestion){
    return(
        <p className="bg-sky-800 text-white min-h-16 p-4 h-auto rounded-lg text-base w-96 ">
            {message}
        </p>
    )
}

export default Questions;