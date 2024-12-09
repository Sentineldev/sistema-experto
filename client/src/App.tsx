  import Questions from "./Components/Questions";
  import Avatar from "./Components/Avatar";
  import useQuestion from "./hooks/useQuestion";

  
  function App() {
      const {indexQuestion, question, answersValues, addAnswerQuestion} = useQuestion()
      console.log(answersValues)
    return (
      <div className="flex justify-center items-center w-full h-screen bg-white ">
        <div className="flex flex-col items-center justify-center bg-red-700 rounded-xl h-[50vh] w-1/2 gap-4 pb-2">
          <Avatar />
          <Questions message={question} />
          <div className="flex gap-10">
            <button className="btn bg-red-700 w-16 hover:bg-red-900 h-16"
              onClick={() => addAnswerQuestion(0, indexQuestion, answersValues)}> 
              No
            </button>
            <button className="btn bg-success w-16 hover:bg-green-800 h-16" 
              onClick={() => addAnswerQuestion(1, indexQuestion, answersValues)}>
              Sí
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default App;
