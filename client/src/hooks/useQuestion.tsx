import { useState } from "react";
import { QUESTIONS, QUESTION_KEY, ANSWERS_TYPE, SUCCESS_COMBINATIONS, QUESTIONS_FLOW } from "../Consts/const";


function useQuestion(){
    const [indexQuestion, setIndexQuestion] = useState<QUESTION_KEY>(1);
    const [question, setQuestion] = useState(QUESTIONS[indexQuestion]);
    const [answerState, setAnswerState] = useState<ANSWERS_TYPE>(null);
    const [answersValues, setAnswersValues] = useState<Array<number | null>>(Array(12).fill(null)); 

    function questionsDone(indexQuestion: QUESTION_KEY, answerState: ANSWERS_TYPE) {
        const newAnswerQuestion = [indexQuestion, answerState];
        const isMatch = SUCCESS_COMBINATIONS.some((combination) =>
            combination[0] === newAnswerQuestion[0] && combination[1] === newAnswerQuestion[1]
        );
        return isMatch;
    }

    function nextQuestion(answerState: ANSWERS_TYPE, indexQuestion: QUESTION_KEY, answersValues: Array<number | null>) {
        const updatedAnswersValues = [...answersValues];

        if (answerState === 0) {
        updatedAnswersValues[indexQuestion - 1] = 0;
        } 
        else {
        updatedAnswersValues[indexQuestion - 1] = 1;
        }
        
        if (questionsDone(indexQuestion, answerState)) {
        const finalAnswersValues = updatedAnswersValues.map((value) => 
            value === null ? 0 : value
        );
            setAnswersValues(finalAnswersValues);
            return;
        } 
        else {
        
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
    }
    

    function addAnswerQuestion(flag: ANSWERS_TYPE,indexQuestion: QUESTION_KEY, answersValues: Array<number | null>) {
        setAnswerState(flag);
        nextQuestion(flag, indexQuestion, answersValues);
    }


    return {indexQuestion, question, answerState, answersValues, addAnswerQuestion}
}

export default useQuestion; 