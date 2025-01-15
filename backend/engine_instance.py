


from engine.model import FilumEdge


"""

Inicializa el modelo con el archivo modelo.keras donde ya fue previamente entrenado.

"""

model = FilumEdge()

model.load("engine\modelo.keras")
    