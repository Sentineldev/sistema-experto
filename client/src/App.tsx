import { useState } from "react";
import Questions from "./Components/Questions";
import Avatar from "./Components/Avatar";
import useQuestion from "./hooks/useQuestion";
import { BaseButton } from "./Components/Buttons/BaseButton";
import { PreviousButton } from "./Components/Buttons/PreviousButton";
import { ButtonSpeaker } from "./Components/Buttons/ButtonSpeaker";
import { Filum } from "./Components/Filum/Filum";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { GrPrevious } from "react-icons/gr";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { MdCleaningServices } from "react-icons/md";



function App() {
    const { indexQuestion, question, answersValues, filum, addAnswerQuestion, goBack, clean, cleanFilum } = useQuestion();
    const [isSpeaking, setIsSpeaking] = useState(false)

    function handleSpeak(message: string) {
        const utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.cancel();
        utterance.lang = "es-ES";
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
    }

    function showModal() {
        const modal = document.getElementById("modal-filum") as HTMLDialogElement | null;
        modal ? modal.showModal() : console.log("No se encuentra el modal");
    }

    return (
        <div className="h-screen w-screen flex justify-center">
            <div className="h-screen w-1/2 flex flex-col items-center justify-center">
                <div className="w-full text-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg">
                    <Avatar isSpeaking={isSpeaking} />
                    <h2 className="mt-4 text-xl font-bold text-white  ml-4">  Pregunta: {indexQuestion}</h2>
                </div>
                <div className="w-full h-1/2 bg-white flex flex-col rounded-b-lg ">
                    <div className="flex items-center justify-around mb-6">
                        {(indexQuestion > 1 && !filum) && <PreviousButton text="Anterior" icon={<GrPrevious className="mr-2" />} onClick={goBack} />}
                        {(filum) && <PreviousButton text="Anterior" icon={<GrPrevious className="mr-2" />} onClick={cleanFilum} />}
                        <ButtonSpeaker onClick={() => handleSpeak(question)} icon={<PiSpeakerSimpleHighFill className="size-7 text-gray-600" />} />
                    </div>

                    <div className="w-full flex justify-center h-1/5">
                        <Questions message={question} />
                    </div>

                    <div>
                        {!filum ?
                            <div className="space-y-4 w-auto ml-4">
                                <BaseButton onClick={() => addAnswerQuestion(0, indexQuestion, answersValues)}
                                    text={indexQuestion === 4 ? "Urticantes" : "No"} icon={<GiCancel className="w-4 h-4 text-gray-400" />} />
                                <BaseButton onClick={() => addAnswerQuestion(1, indexQuestion, answersValues)}
                                    text={indexQuestion === 4 ? "Adhesivas" : "Sí"} icon={<FaRegCircleCheck className="w-4 h-4 text-gray-400" />} />
                            </div>
                            :
                            <div className="mt-2 flex flex-col items-center gap-2">
                                <button className="btn" onClick={showModal} >RESULTADOS</button>
                                <Filum nameFilum={filum} id="modal-filum">
                                    <ButtonSpeaker onClick={() => handleSpeak(filum)}
                                        icon={<PiSpeakerSimpleHighFill className="size-auto text-slate-800" />}
                                    />
                                </Filum>

                                <div className="flex flex-col items-center gap-2">
                                    <BaseButton onClick={clean} text="VOLVER AL INICIO" icon={<MdCleaningServices />} />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
