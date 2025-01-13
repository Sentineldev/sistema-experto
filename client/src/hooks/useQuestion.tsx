import { useState } from "react";
import { QUESTIONS, QUESTION_KEY, ANSWERS_TYPE, SUCCESS_COMBINATIONS, QUESTIONS_FLOW, ANSWERS_VALUES, URL_API, HISTORY } from "../Consts/const";

function useQuestion() {
    const [indexQuestion, setIndexQuestion] = useState<QUESTION_KEY>(1);
    const [question, setQuestion] = useState(QUESTIONS[indexQuestion]);
    const [answerState, setAnswerState] = useState<ANSWERS_TYPE>(null);
    const [answersValues, setAnswersValues] = useState<ANSWERS_VALUES>(Array(12).fill(null));
    const [history, setHistory] = useState<HISTORY>([]);
    const [filum, setFilum] = useState("");

    function addAnswerQuestion(answerState: ANSWERS_TYPE, indexQuestion: QUESTION_KEY, answersValues: ANSWERS_VALUES) {
        if (questionsDone(indexQuestion, answerState)) {
            addAnswerToArray(answersValues, answerState, indexQuestion)
            const updatedAnswersValues = [...answersValues]
            const finalAnswersValues = fillArrayWithZeros(updatedAnswersValues);
            postFinalAnswersValues(finalAnswersValues);
            return;
        }
        
        setHistory((prev) => [...prev, { indexQuestion, answerState, answersValues: [...answersValues] }]);
        setAnswerState(answerState);
        nextQuestion(answerState, indexQuestion, answersValues);
    }

    function addAnswerToArray(updateAnswersValues: ANSWERS_VALUES, answerState: ANSWERS_TYPE, indexQuestion: QUESTION_KEY) {
        updateAnswersValues[indexQuestion - 1] = answerState;
    }

    function questionsDone(indexQuestion: QUESTION_KEY, answerState: ANSWERS_TYPE) {
        const newAnswerQuestion = [indexQuestion, answerState];
        return SUCCESS_COMBINATIONS.some((combination) =>
            combination[0] === newAnswerQuestion[0] && combination[1] === newAnswerQuestion[1]
        );
    }

    function fillArrayWithZeros(updatedAnswersValues: ANSWERS_VALUES) {
        return updatedAnswersValues.map((value) => (value === null ? 0 : value));
    }

    function postFinalAnswersValues(finalAnswersValues: number[]) {
        const data = { answers: finalAnswersValues };
        fetch(URL_API, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.text())
            .catch((error) => console.error("Error:", error))
            .then((response) => {console.log("Success:", response)
                setFilum(response as string)
            }
               
        );
            
    }

    function serchQuestionInArray(indexQuestion: QUESTION_KEY, answerState: ANSWERS_TYPE, updatedAnswersValues: ANSWERS_VALUES) {
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
        addAnswerToArray(updatedAnswersValues, answerState, indexQuestion);

        if (questionsDone(indexQuestion, answerState)) {
            const finalAnswersValues = fillArrayWithZeros(updatedAnswersValues);
            postFinalAnswersValues(finalAnswersValues);
            return;
        } else {
            serchQuestionInArray(indexQuestion, answerState, updatedAnswersValues);
        }
    }

    function goBack() {
        if (history.length > 0) {
            const previousState = history[history.length - 1];
            setHistory((prev) => prev.slice(0, -1));
            setIndexQuestion(previousState.indexQuestion);
            setQuestion(QUESTIONS[previousState.indexQuestion]);
            setAnswerState(previousState.answerState);
            setAnswersValues(previousState.answersValues);
        }
        if(filum){
            setFilum("")
        }
    }

    function cleanFilum(){
        setFilum("")
    }

    function clean(){
        setIndexQuestion(1)
        setQuestion(QUESTIONS[1])
        setAnswerState(null)
        setAnswersValues(Array(12).fill(null))
        setHistory([])
        setFilum("")
    }

    return { indexQuestion, question, answerState, answersValues, addAnswerQuestion, goBack, clean, cleanFilum,  filum};
}

export default useQuestion;
