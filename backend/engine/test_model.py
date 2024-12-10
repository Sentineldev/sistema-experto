from model import FilumEdge
from common.data import TRAINING_DATA
def TestModel():
    model = FilumEdge()
    model.load("modelo.keras")    

    for x in TRAINING_DATA:
        testCase = x.tolist()
        result = model.predictStrFormat(testCase)
        print(f"Resultado: {result}")
        
def main():
    TestModel()

if __name__ == "__main__":
    main()
    