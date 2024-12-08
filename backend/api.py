from flask import Blueprint, request
from engine_instance import model
from engine.constants import INPUT_NUM

api = Blueprint("api",__name__,url_prefix="/api")


@api.route("/")
def query():
    
    body = request.json
    if "answers" not in body:   
        return "Wrong data structure answers must be provided", 422
    
    answers = body["answers"]
    
    if not isinstance(answers, list):
        return "Wrong data type must be a list", 422
    if len(answers) is not INPUT_NUM:
        return f"Wrong list array must be {INPUT_NUM}", 422
    for x in answers:
        if not isinstance(x, int):
            return "Wrong value must be and integer", 422
        if x != 0 and x != 1:
            return "Wrong valeu must be 1 or 0", 422
    
    return model.predictStrFormat(answers)
    