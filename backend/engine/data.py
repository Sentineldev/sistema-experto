import numpy as np
TRAINING_DATA = np.array([
    
    [1,0,0,0,0,0,0,0,0,0,0,0], #PROTOZUARIOS
    [0,0,0,0,0,0,0,0,0,0,0,0], #PORÍFEROS

    [0,1,0,0,0,0,0,0,0,0,0,0], #CNIDARIOS

    [0,1,0,1,0,0,0,0,0,0,0,0], #CTENÓFOROS

    #ACELOMADOS
    [0,1,1,0,0,1,0,0,0,0,0,0], #NEMERTINO 

    [0,1,1,0,0,0,0,0,0,0,0,0], #PLANTELMINTO

    #PSEUDOCELOMADOS
    [0,1,1,0,1,0,0,1,0,0,0,0], #ACOTACEFALOS

    [0,1,1,0,1,0,0,0,0,0,0,0], #ASQUELMINTOS

    #CELOMADOS - ENTEROCELOMADOS
    [0,1,1,0,1,0,1,0,0,1,0,0], #CORDADO 
    [0,1,1,0,1,0,1,0,0,0,0,0], #EQUINODERMO

    #CELOMADOS - ESQUIZOCELOMADOS
    [0,1,1,0,1,0,1,0,1,0,1,0], #ARTROPODO 
    [0,1,1,0,1,0,1,0,1,0,0,1], #MOLUSCO
    [0,1,1,0,1,0,1,0,1,0,0,0], #ANELIDO
])


TARGET_DATA = np.array([
    [1,0,0,0,0,0,0,0,0,0,0,0,0], #PROTOzuario
    [0,1,0,0,0,0,0,0,0,0,0,0,0], # PORIFEROS
    [0,0,1,0,0,0,0,0,0,0,0,0,0], # CNIDARIOS
    [0,0,0,1,0,0,0,0,0,0,0,0,0], # CTENÓFOROS
    [0,0,0,0,1,0,0,0,0,0,0,0,0], # NEMERTINO
    [0,0,0,0,0,1,0,0,0,0,0,0,0], # PLANTELMINTO
    [0,0,0,0,0,0,1,0,0,0,0,0,0], # ACOTACEFALOS
    [0,0,0,0,0,0,0,1,0,0,0,0,0], # ASQUELMINTOS
    [0,0,0,0,0,0,0,0,1,0,0,0,0], # cordado
    [0,0,0,0,0,0,0,0,0,1,0,0,0], # EQUINODERMO
    [0,0,0,0,0,0,0,0,0,0,1,0,0], # ARTROPODO
    [0,0,0,0,0,0,0,0,0,0,0,1,0], # MOLUSCO
    [0,0,0,0,0,0,0,0,0,0,0,0,1], # ANELIDO
])

TARGET_FILUM_DICT = {
    0: "PROTOZOARIO", 
    1: "PORIFEROS", 
    2: "CNIDARIOS", 
    3: "CTENÓFOROS", 
    4: "NEMERTINO",
    5: "PLANTELMINTO", 
    6: "ACOTACEFALOS", 
    7: "ASQUELMINTOS", 
    8: "cordado", 
    9: "EQUINODERMO",
    10: "ARTROPODO", 
    11: "MOLUSCO", 
    12: "ANELIDO"
}


