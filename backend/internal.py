from flask import Blueprint
from engine.train_model import TrainModel
from engine.test_model import TestModel



internal = Blueprint("internal",__name__,url_prefix="/internal")

@internal.route("/train_model")
def train_model():
    TrainModel()
    return "finish"

@internal.route("/test_model")
def test_model():
    TestModel()
    return "finish"











