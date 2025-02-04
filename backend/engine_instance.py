


from engine.model import FilumEdge


from os import path
"""

Inicializa el modelo con el archivo modelo.keras donde ya fue previamente entrenado.

"""

model = FilumEdge()

# model.load("engine\modelo.keras")
model.load(path.join("engine","modelo.keras"))