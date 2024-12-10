
from .model import FilumEdge


def TrainModel(save = False):

    model = FilumEdge()
    model.initialize()
    model.train()
    if save:
        model.save("modelo.keras")
