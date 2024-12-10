import tensorflow as tf
import numpy as np
from data import TRAINING_DATA, TARGET_DATA, TARGET_FILUM_DICT
from constants import EPOCHS, HIDDEN_NEURONS, INPUT_NUM, OUTPUT_NEURONS

# training_finished = False
# class MyCallback(tf.keras.callbacks.Callback):
#   def on_train_end(self, logs=None):
#     global training_finished
#     training_finished = True
#     print("cuca")
    
class FilumEdge:
    
    def __init__(self):
        
        self._INPUT_NUM = INPUT_NUM
        self._HIDDEN_NEURONS = HIDDEN_NEURONS
        self._OUTPUT_NEURONS = OUTPUT_NEURONS
        self._EPOCHS = EPOCHS
        self._model = None
    
        
    def load(self, filename: str):
        if self._model is not None:
            raise Exception("Model is already loaded")
        self._model = tf.keras.models.load_model(filename)
        self._compile()
    
    def initialize(self):
        if self._model is not None:
            raise Exception("Model is already loaded")
        self._model = tf.keras.models.Sequential([
            tf.keras.layers.Dense(HIDDEN_NEURONS, input_dim=INPUT_NUM, activation="relu"),
            tf.keras.layers.Dense(OUTPUT_NEURONS, activation="sigmoid"),
        ])
        self._compile()
    def train(self, callback=None):
        
        callbacks = []
        if callbacks is not None:
            callbacks.append(callback)
        
        if self._model is None:
            raise Exception("Model is not initialize or loaded")
        self._model.fit(TRAINING_DATA, TARGET_DATA, epochs=self._EPOCHS, callbacks=callbacks)
        scores = self._model.evaluate(TRAINING_DATA, TARGET_DATA)
        print("\n%s: %.2f%%" % (self._model.metrics_names[1], scores[1]*100))

        
    def predict(self, value: list[int]) -> list[float]:
        if self._model is None:
            raise Exception("Model is not initialize or loaded")
        return self._model.predict(np.expand_dims(value, axis=0)).tolist()[0]
    
    def predictStrFormat(self, value: list[int]) -> str: 
        result = self.predict(value)
        index = result.index(max(result))
        return TARGET_FILUM_DICT[index]

        
    def save(self,filename: str):
        if self._model is None:
            raise Exception("Model is not initialize or loaded")
        self._model.save(filename)
    
    def _compile(self):
        if self._model is None:
            raise Exception("Model is not initialize or loaded")
        self._model.compile(
            optimizer="adam",
            loss="mean_squared_error",
            metrics=['binary_accuracy'],
        )
        

