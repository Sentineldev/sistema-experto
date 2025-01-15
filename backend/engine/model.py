import tensorflow as tf
import numpy as np
from common.data import TRAINING_DATA, TARGET_DATA, TARGET_FILUM_DICT
from common.constants import EPOCHS, HIDDEN_NEURONS, INPUT_NUM, OUTPUT_NEURONS

# Clase que define las propiedades necesarias para entrenar y utilizar el modelo.
class FilumEdge:
    
    def __init__(self):
        
        self._INPUT_NUM = INPUT_NUM
        self._HIDDEN_NEURONS = HIDDEN_NEURONS
        self._OUTPUT_NEURONS = OUTPUT_NEURONS
        self._EPOCHS = EPOCHS
        self._model = None
    
        
    def load(self, filename: str):
        """
        Permite cargar un modelo pre-entrenado tomando como entrada
        un archivo de datos, normalmente son archivos que terminan en .keras
        generados por tensorflow.
        """
        if self._model is not None:
            raise Exception("Model is already loaded")
        self._model = tf.keras.models.load_model(filename)
        self._compile()
    
    def initialize(self):
        """
        Inicializa la estructura del modelo.
        Esta compuesto por dos capas de neuronas.
        Una capa compuesta por 16 neuronas que toma como valor la respuesta de cada pregunta que utiliza
        la funcion de activacion ReLu.
        Y una capa de salida compuesta por 12 neuronas donde cada neurona corresponde
        a cada tipo de Phylum utilizando la funcion de activacion sigmoidal.
        """
        if self._model is not None:
            raise Exception("Model is already loaded")
        self._model = tf.keras.models.Sequential([
            tf.keras.layers.Dense(HIDDEN_NEURONS, input_dim=INPUT_NUM, activation="relu"),
            tf.keras.layers.Dense(OUTPUT_NEURONS, activation="sigmoid"),
        ])
        self._compile()
    def train(self, callback=None):
        
        """
        Entrena el modelo previamente inicializado, se le pasa los datos de entrenamiento
        y la cantidad de epocas que se definan en las variables.
        Las epocas se refiere a la cantidad de iteraciones que se hara por todos los datos de entrada.
        imprime la certeza binario y la perdida en cada epoca.
        
        """
        callbacks = []
        if callbacks is not None:
            callbacks.append(callback)
        
        if self._model is None:
            raise Exception("Model is not initialize or loaded")
        self._model.fit(TRAINING_DATA, TARGET_DATA, epochs=self._EPOCHS)
        scores = self._model.evaluate(TRAINING_DATA, TARGET_DATA)
        print("\n%s: %.2f%%" % (self._model.metrics_names[1], scores[1]*100))

        
    def predict(self, value: list[int]) -> list[float]:
        """
        Permite hacer una prediccion tomando como entrada una lista de numeros enteros
        que se refiere a las respuestas de cada una de las preguntas,
        el arreglo debe estar constituido por 16 elementos de 0 o 1.

        Y retorna una lista de numeros flotantes que corresponde al porcentaje de certeza de un phylum especifico.
        es un arreglo de 12 elementos de numeros flotantes.
        """
        if self._model is None:
            raise Exception("Model is not initialize or loaded")
        return self._model.predict(np.expand_dims(value, axis=0)).tolist()[0]
    
    def predictStrFormat(self, value: list[int]) -> str: 
        """
        Realiza la misma funcion que el metodo predict, pero en vez de retorna una lista de numeros flotantes
        retorna un string con el phylum resultante.
        """
        result = self.predict(value)
        index = result.index(max(result))
        return TARGET_FILUM_DICT[index]

        
    def save(self,filename: str):
        """
        Guarda el modelo actual, si primero se realiza el entrenamiento luego se puede guardar el resultado
        de este entrenamiento.
        """
        if self._model is None:
            raise Exception("Model is not initialize or loaded")
        self._model.save(filename)
    
    def _compile(self):
        """
        Compila el modelo, necesita primero inicializarse antes de compilarse.
        
        """
        if self._model is None:
            raise Exception("Model is not initialize or loaded")
        self._model.compile(
            optimizer="adam",
            loss="mean_squared_error",
            metrics=['binary_accuracy'],
        )
        

