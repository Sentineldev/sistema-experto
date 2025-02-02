export const URL_API = `${import.meta.env.VITE_URL_API}/${import.meta.env.VITE_KEY_STRING_RESULT}`;
export const URL_IMAGE_BACKGROUND = 'https://wallpapercat.com/w/full/2/3/b/1323725-3840x2160-desktop-4k-biology-background-photo.jpg'

export type QUESTION_KEY = keyof typeof QUESTIONS;
export type ANSWERS_TYPE = 0 | 1 | null;
export type ANSWERS_VALUES = Array<number | null>
export type HISTORY = {
    indexQuestion: QUESTION_KEY;
    answerState: ANSWERS_TYPE;
    answersValues: ANSWERS_VALUES;
}[];

export type FILUMS_KEY = keyof typeof FILUMS_RESPONSE;


export const FILUMS_RESPONSE = {
    PROTOZOARIO: {
        descripcion: "El filum protozoo es un grupo de organismos unicelulares, microscópicos y eucariotas que viven en ambientes húmedos o en agua. Pueden ser de vida libre o parásitos de otros seres vivos.",
        imagen: "https://as1.ftcdn.net/v2/jpg/01/71/13/58/1000_F_171135886_DRvnkil2ry1pf7NFLouqDZrFOHJlCcfF.jpg"
    },
    PORIFEROS: {
        descripcion: "El Filo Porifera, comúnmente conocidas como esponjas, son animales acuáticos invertebrados pertenecientes al Reino Animalia. Son considerados los metazoarios más primitivos y simples que existen en la actualidad.",
        imagen: "https://png.pngtree.com/background/20230613/original/pngtree-large-underwater-sponge-with-yellow-at-the-bottom-picture-image_3408715.jpg"
    },
    CNIDARIOS: {
        descripcion: "El Filo Cnidaria es un grupo diverso de animales acuáticos que incluye a las medusas, pólipos, corales, anémonas y hidras. Son conocidos por sus células urticantes especializadas llamadas cnidocitos, que utilizan para capturar presas y defenderse.",
        imagen: "https://inaturalist-open-data.s3.amazonaws.com/photos/219915197/original.jpeg"
    },
    CTENÓFOROS: {
        descripcion: "El Filo Ctenophora, conocidos comúnmente como ctenóforos o peines de mar, son animales marinos que se caracterizan por tener ocho filas de placas ciliadas o 'peines' que utilizan para nadar. Aunque superficialmente se parecen a las medusas, pertenecen a un filo distinto con características únicas.",
        imagen: "https://as1.ftcdn.net/v2/jpg/02/01/44/32/1000_F_201443209_mHbpUbNr0rhxetontyuUKVGRR94syc8a.jpg"
    },
    NEMERTINO: {
        descripcion: "El Filo Nemertea, conocidos comúnmente como nemertinos o gusanos cordón de bota, son un grupo de gusanos marinos no segmentados que se caracterizan por tener una probóscide o trompa extensible que utilizan para capturar presas.",
        imagen: "https://images.theconversation.com/files/554821/original/file-20231019-15-eoou94.jpg?ixlib=rb-1.1.0&rect=67%2C34%2C1210%2C817&q=45&auto=format&w=1000&fit=clip"
    },
    PLANTELMINTO: {
        descripcion: "Los platelmintos son un grupo diverso de animales invertebrados que se caracterizan por tener un cuerpo plano y blando, sin segmentar. A diferencia de otros gusanos, como los anélidos o los nematodos, los platelmintos no tienen celoma ni sistema circulatorio.",
        imagen: "https://inaturalist-open-data.s3.amazonaws.com/photos/4466/original.jpg"
    },
    ACOTACEFALOS: {
        descripcion: "El Filo Acanthocephala, conocidos comúnmente como acantocéfalos o gusanos de cabeza espinosa, son un grupo de gusanos parásitos que se caracterizan por tener una probóscide o trompa retráctil con espinas.",
        imagen: "https://previews.123rf.com/images/sinhyu/sinhyu1903/sinhyu190300090/119353794-el-estudio-de-acanthocephala-es-un-filo-de-gusanos-par%C3%A1sitos-conocidos-como-acantoc%C3%A9falos-gusanos.jpg"
    },
    ASQUELMINTOS: {
        descripcion: "El término asquelmintos es un concepto taxonómico que actualmente se considera obsoleto. Anteriormente, se utilizaba para agrupar a diversos filos de gusanos que compartían ciertas características.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Soybean_cyst_nematode_and_egg_SEM.jpg/1280px-Soybean_cyst_nematode_and_egg_SEM.jpg"
    },
    cordado: {
        descripcion: "Es un grupo muy diverso de animales que incluye a todos los vertebrados (peces, anfibios, reptiles, aves y mamíferos), así como a otros grupos de invertebrados marinos conocidos como urocordados (tunicados) y cefalocordados (anfioxos).",
        imagen: "https://c4.wallpaperflare.com/wallpaper/343/589/117/animal-red-panda-fall-wildlife-hd-wallpaper-preview.jpg"
    },
    EQUINODERMO: {
        descripcion: "El Filo Echinodermata, conocidos comúnmente como equinodermos, es un grupo de animales marinos exclusivamente que incluye estrellas de mar, erizos de mar, pepinos de mar, ofiuros y lirios de mar.",
        imagen: "https://c4.wallpaperflare.com/wallpaper/879/671/755/animales-de-estrella-mar-wallpaper-preview.jpg"
    },
    ARTROPODO: {
        descripcion: "El Filo Arthropoda es el grupo más diverso y abundante del reino animal, representando aproximadamente el 80% de todas las especies conocidas. Los artrópodos son animales invertebrados que se caracterizan por tener un cuerpo segmentado, apéndices articulados y un exoesqueleto duro.",
        imagen: "https://preview.redd.it/73pfa37f7vi11.jpg?width=1080&crop=smart&auto=webp&s=04b2cd5cb42362f37ac08bda6c0aade556de9f9d"
    },
    MOLUSCO: {
        descripcion: "El Filo Mollusca es un grupo extremadamente diverso de animales invertebrados que incluye una gran variedad de formas, tamaños y estilos de vida. Se caracterizan por tener un cuerpo blando, a menudo protegido por una concha calcárea, y un pie muscular que utilizan para desplazarse.",
        imagen: "https://c4.wallpaperflare.com/wallpaper/370/921/307/animales-mar-molusco-pulpo-wallpaper-preview.jpg"
    },
    ANELIDO: {
        descripcion: "El Filo Annelida, conocidos comúnmente como anélidos o gusanos segmentados, es un grupo diverso de animales invertebrados que se caracterizan por tener el cuerpo segmentado en anillos o metámeros.",
        imagen: "https://preview.free3d.com/img/2023/06/3191675229613065824/rux8luy9.jpg"
    }
};




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
    [6, 1],
    [8, 0],
    [8, 1],
    [10, 0],
    [10, 1],
    [11, 1],
    [12, 0],
    [12, 1]
]

type QuestionsFlowType = {
    [key: number]: {
        0: number | null;
        1: number | null;
    };
};

export const QUESTIONS_FLOW: QuestionsFlowType = {
    1: {
        0: 2,
        1: null
    },
    2: {
        0: null,
        1: 3
    },
    3: {
        0: 4,
        1: 5
    },
    4: {
        0: null,
        1: null
    },
    5: {
        0: 6,
        1: 7
    },
    6: {
        0: null,
        1: null
    },
    7: {
        0: 8,
        1: 9
    },
    8: {
        0: null,
        1: null

    },
    9: {
        0: 10,
        1: 11
    },
    10: {
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