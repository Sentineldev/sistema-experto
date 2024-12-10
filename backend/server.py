from flask import Flask
from flask_cors import CORS

from api import api
from internal import internal
def create_app():
    
    app = Flask(__name__)
    CORS(app)
    
    app.register_blueprint(internal)
    app.register_blueprint(api)

    

    return app