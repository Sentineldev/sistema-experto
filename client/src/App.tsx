import { useEffect, useState } from "react";
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
import { Pulser } from "./Components/Pulser/Pulser";
import { FILUMS_RESPONSE, FILUMS_KEY } from "./Consts/const";
import { URL_IMAGE_BACKGROUND } from "./Consts/const";

function App() {
    const { indexQuestion, question, answersValues, filum, addAnswerQuestion, goBack, clean, cleanFilum } = useQuestion();
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [filumValue, setFilumValue] = useState({
        descripcion: "",
        imagen: ""
    })

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

    function filumMessage(filum: string | null) {
        if (!filum || !(filum in FILUMS_RESPONSE)) {
            setFilumValue({ descripcion: "", imagen: "" });
            return;
        }

        let auxFilum = filum as FILUMS_KEY;

        setFilumValue(prevState => ({
            ...prevState,
            descripcion: FILUMS_RESPONSE[auxFilum].descripcion,
            imagen: FILUMS_RESPONSE[auxFilum].imagen
        }));
    }

    useEffect(() => {
        if (filum) filumMessage(filum);
    }, [filum]);



    return (
        <div className="h-screen w-screen flex justify-center bg-cover bg-center" style={{ backgroundImage: `url(${URL_IMAGE_BACKGROUND})` }}>
            <div className="h-screen w-1/2 flex flex-col items-center justify-center">
                <div className="w-full text-center p-6 rounded-t-lg" style={{ background: "linear-gradient(45deg, rgba(40,37,42,1) 13%, rgba(55,23,48,1) 27%, rgba(46,28,42,1) 42%)" }}>
                    <Avatar isSpeaking={isSpeaking} />
                    <h2 className="mt-4 text-xl font-bold text-white  ml-4">  Pregunta: {indexQuestion}</h2>
                </div>
                <div className="w-full h-[58%] flex gap-6 flex-col rounded-b-lg" style={{ background: "linear-gradient(45deg, rgba(244,244,244,1) 0%, rgba(177,177,177,1) 17%, rgba(189,189,189,1) 39%, rgba(235,235,235,1) 68%)" }}>

                    <div className="flex items-center justify-around mt-3">
                        {(indexQuestion > 1 && !filum) && <PreviousButton text="Anterior" icon={<GrPrevious className="mr-2" />} onClick={goBack} />}
                        {(filum) && <PreviousButton text="Anterior" icon={<GrPrevious className="mr-2" />} onClick={cleanFilum} />}
                        {(filum) && <Pulser />}
                        <ButtonSpeaker onClick={() => handleSpeak(question)} icon={<PiSpeakerSimpleHighFill className="size-7 text-gray-600" />} />
                    </div>

                    {!filum && <div className="w-full flex justify-center h-1/5 text-center">
                        <Questions message={question} />
                    </div>
                    }

                    <div className="h-full">
                        {!filum ?
                            <div className="space-y-4 w-auto ml-4">
                                <BaseButton onClick={() => addAnswerQuestion(0, indexQuestion, answersValues)}
                                    text={indexQuestion === 4 ? "Urticantes" : "No"} icon={<GiCancel className="w-4 h-4 text-gray-500" />} />
                                <BaseButton onClick={() => addAnswerQuestion(1, indexQuestion, answersValues)}
                                    text={indexQuestion === 4 ? "Adhesivas" : "Sí"} icon={<FaRegCircleCheck className="w-4 h-4 text-gray-500" />} />
                            </div>
                            :
                            <div className="mt-2 flex flex-col items-center gap-2 h-full">
                                <Filum nameFilum={filum} description={filumValue.descripcion} image={filumValue.imagen} />

                                <div className="flex flex-col items-center gap-2 mt-2 mb-4">
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
