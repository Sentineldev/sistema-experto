from flask import Flask
 

from api import api
from internal import internal
def create_app():
    
    app = Flask(__name__)
    
    
    app.register_blueprint(internal)
    app.register_blueprint(api)

    

    return app