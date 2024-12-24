import Questions from "./Components/Questions";
import Avatar from "./Components/Avatar";
import useQuestion from "./hooks/useQuestion";
import { BaseButton} from "./Components/Buttons/BaseButton";
import { PreviousButton } from "./Components/Buttons/PreviousButton";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { GrPrevious } from "react-icons/gr";

function App() {
    const { indexQuestion, question, answersValues, addAnswerQuestion, goBack } = useQuestion();
    return (
        <div className="h-screen w-screen flex justify-center">
            <div className="h-screen w-1/2 flex flex-col items-center justify-center">
                <div className="w-full text-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg">
                    <Avatar />
                    <h2 className="mt-4 text-xl font-bold text-white  ml-4">  Pregunta: {indexQuestion}</h2>
                </div>
                <div className="w-full h-1/2 bg-white flex flex-col rounded-b-lg">
                   <div className="flex items-center justify-between mb-6">
                        <PreviousButton text="Anterior" icon={<GrPrevious className="mr-2"/>} visibility={indexQuestion>1? "visible": "invisible"} onClick={goBack}/>
                    </div>
                  
                    <div className="w-full flex justify-center h-1/5">
                        <Questions message={question} />
                    </div>
                    <div className="space-y-4 w-auto ml-4">
                        <BaseButton onClick={() => addAnswerQuestion(0, indexQuestion, answersValues)} 
                            text={indexQuestion === 4 ? "Urticantes" : "No"} icon={<GiCancel className="w-4 h-4 text-gray-400"/>}/>
                        <BaseButton onClick={() => addAnswerQuestion(1, indexQuestion, answersValues)} 
                            text={indexQuestion === 4 ? "Adhesivas" : "Sí"} icon={<FaRegCircleCheck className="w-4 h-4 text-gray-400"/>}/> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
