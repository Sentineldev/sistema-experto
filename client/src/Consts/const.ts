export const QUESTIONS = {
    1: "¿El organismo está formado por una sola célula?",
    2: "¿Observa alguna organización en capas o láminas de células que sugiera una estructura más compleja que un simple conjunto de células individuales?",
    3: "Imagina que el organismo es una torta. ¿Podrías dividirla en dos partes iguales que se correspondan perfectamente, como un espejo?",
    4: "¿Posee el organismo células urticantes o células adhesivas especializadas para capturar presas?",
    5: "¿Tiene el organismo una cavidad interna llena de fluido que rodea sus órganos?",
    6: "¿Posee el organismo una probóscide retráctil que utiliza para capturar presas?",
    7: "¿Está esta cavidad revestida por una membrana de origen mesodérmico (peritoneo)?",
    8: "¿Posee el organismo una probóscide retráctil cubierta de espinas?",
    9: "¿La segmentación del huevo es por espiral?",
    10: "¿Presenta el organismo una notocorda en alguna etapa de su vida?",
    11: "¿Tiene el organismos apéndices articulados?",
    12: "¿Posee el animal una concha externa?"
}

export const SUCCESS_COMBINATIONS = [
    [1, 1],
    [2, 0],
    [4, 0],
    [4, 1],
    [6, 0],
    [6,1],
    [9,0],
    [9,1],
    [10,0],
    [10,1],
    [11,1],
    [12,0],
    [12,1]
]

export type QUESTION_KEY = keyof typeof QUESTIONS;
export type  ANSWERS_TYPE = 0|1|null; 


type QuestionsFlowType = {
    [key: number]: {
        0: number | null;
        1: number | null;
    };
};


export const QUESTIONS_FLOW : QuestionsFlowType = {
    1: {
        0: 2,
        1: null
    },
    2:{
        0: null,
        1: 3
    },
    3:{
        0: 4,
        1: 5
    },
    4:{
        0: null,
        1: null
    },
    5:{
        0: 6,
        1: 7
    },
    6:{
        0: null,
        1: null
    },
    7:{
        0: 8,
        1: 9
    },
    8:{
        0:null,
        1: null

    },
    9:{
        0: 10,
        1: 11
    },
    10:{
        0: null,
        1: null
    },
    11: {
        0: 12,
        1: null
    },
    12: {
        0: null, 
        1: null
    }
}