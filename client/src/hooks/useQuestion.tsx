import { useState } from "react";
import { QUESTIONS, QUESTION_KEY, ANSWERS_TYPE, SUCCESS_COMBINATIONS, QUESTIONS_FLOW, ANSWERS_VALUES } from "../Consts/const";


function useQuestion(){
    const [indexQuestion, setIndexQuestion] = useState<QUESTION_KEY>(1);
    const [question, setQuestion] = useState(QUESTIONS[indexQuestion]);
    const [answerState, setAnswerState] = useState<ANSWERS_TYPE>(null);
    const [answersValues, setAnswersValues] = useState<Array<number | null>>(Array(12).fill(null)); 

    function addAnswerQuestion(answerState: ANSWERS_TYPE,indexQuestion: QUESTION_KEY, answersValues: Array<number | null>) {
        setAnswerState(answerState);
        nextQuestion(answerState, indexQuestion, answersValues);
    }
    
    function addAnswerToArray(updateAnswersValues:ANSWERS_VALUES, answerState:ANSWERS_TYPE, indexQuestion: QUESTION_KEY){
        answerState === 0 ? updateAnswersValues[indexQuestion-1] = 0 : updateAnswersValues[indexQuestion-1] = 1;
    }

    function questionsDone(indexQuestion: QUESTION_KEY, answerState: ANSWERS_TYPE) {
        const newAnswerQuestion = [indexQuestion, answerState];
        const isMatch = SUCCESS_COMBINATIONS.some((combination) =>
            combination[0] === newAnswerQuestion[0] && combination[1] === newAnswerQuestion[1]
        );
        return isMatch;
    }

    function fillArrayWithZeros(updatedAnswersValues: ANSWERS_VALUES  ){
        const finalAnswersValues = updatedAnswersValues.map((value) => 
            value === null ? 0 : value
        );
        return finalAnswersValues
    }

    function postFinalAnswersValues(finalAnswersValues:number[] ){
        const url = `${import.meta.env.URL_API}/${import.meta.env.KEY_STRING_RESULT}`
        const data = {"answers": finalAnswersValues}      
        fetch(url, {
            method: "POST", 
            body: JSON.stringify(data), 
            headers: {
            "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => console.log("Success:", response));
        setAnswersValues(finalAnswersValues);
    }

    function serchQuestionInArray(indexQuestion: QUESTION_KEY, answerState: ANSWERS_TYPE, updatedAnswersValues: ANSWERS_VALUES){
        setAnswersValues(updatedAnswersValues);  
        const key = indexQuestion;
        if (key in QUESTIONS_FLOW) {
            const values = QUESTIONS_FLOW[key];
            if (answerState !== null && answerState in values) {
                const newKeyQuestion = values[answerState] as QUESTION_KEY;
                setQuestion(QUESTIONS[newKeyQuestion]);
                setIndexQuestion(newKeyQuestion);
            }
        }
    }

    function nextQuestion(answerState: ANSWERS_TYPE, indexQuestion: QUESTION_KEY, answersValues: ANSWERS_VALUES) {
        const updatedAnswersValues = [...answersValues];
        addAnswerToArray(updatedAnswersValues, answerState, indexQuestion)
        
        if (questionsDone(indexQuestion, answerState)) {
            const finalAnswersValues = fillArrayWithZeros(updatedAnswersValues)
            postFinalAnswersValues(finalAnswersValues)
            return;
        } 
        else {
           serchQuestionInArray(indexQuestion, answerState, updatedAnswersValues)
        }
    }
       
    return {indexQuestion, question, answerState, answersValues, addAnswerQuestion}
}

export default useQuestion; 