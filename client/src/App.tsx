import Questions from "./Components/Questions"
import Avatar from "./Components/Avatar"
import { useState } from "react"
import { QUESTIONS, QUESTION_KEY, ANSWERS_TYPE, SUCCESS_COMBINATIONS, QUESTIONS_FLOW } from "./Consts/const"


function App() {
  const [indexQuestion, setIndexQuestion] = useState<QUESTION_KEY>(1)
  const [question, setQuestion] = useState(QUESTIONS[indexQuestion])
  const [answerState, setAnswerState] = useState <ANSWERS_TYPE>(null)
  let answers_values: Array<number | null> = Array(12).fill(null);

  
  function questionsDone(indexQuestion:QUESTION_KEY, answerState:ANSWERS_TYPE){
    const newAnswerQuestion = [indexQuestion, answerState]
    const isMatch = SUCCESS_COMBINATIONS.some(combination => 
      combination[0] === newAnswerQuestion[0] && combination[1] === newAnswerQuestion[1]
    );
    return isMatch
    
  }
  

  function nextQuestion(answerState: ANSWERS_TYPE, indexQuestion: QUESTION_KEY, answers_values: (number | null)[]){
    
    if(questionsDone(indexQuestion, answerState)){
      return 
    }else{
   
      const key = indexQuestion
      if(key in QUESTIONS_FLOW){
        const values = QUESTIONS_FLOW[key];
       if(answerState !== null && answerState in values){
         const newKeyQuestion = values[answerState] as QUESTION_KEY
         setQuestion(QUESTIONS[newKeyQuestion]);  
         setIndexQuestion(newKeyQuestion);
       }
      } 
     
    }
    
  }


  function addAnswerQuestion(flag: ANSWERS_TYPE,indexQuestion: QUESTION_KEY, answers_values: (number | null)[]){
    setAnswerState(flag);
    nextQuestion(flag, indexQuestion, answers_values)
  }

 
  return (
    <div className="flex flex-col items-center justify-center gap-4">
        <Avatar/>
        <Questions message={question}/> 
      <div className="flex gap-10">
        <button className="btn bg-red-700 w-14 hover:bg-red-900 h-12" onClick={() => addAnswerQuestion(0, indexQuestion, answers_values)} >No</button>
        <button className="btn bg-success w-14 hover:bg-green-800 h-12" onClick={() => addAnswerQuestion(1, indexQuestion, answers_values)}>Sí</button>
      </div>

    
    </div>
  )
}

export default App
