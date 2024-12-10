
from model import FilumEdge


def TrainModel(save = False):

    model = FilumEdge()
    model.initialize()
    model.train()
    if save:
        model.save("modelo.keras")

def main():
    TrainModel()
    
if __name__ == "__main__":
    main()
