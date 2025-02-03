from flask import Flask, send_from_directory
from flask_cors import CORS

from api import api
from internal import internal
def create_app():
    """
    Registro de los endpoints
    y desactivacion de los cors para evitar problemas al hacer requests.
    """
    app = Flask(__name__, static_folder="build")
    CORS(app)


    @app.route("/")
    def serve_index():
        return send_from_directory(app.static_folder, "index.html")
    
    @app.route("/<path:path>")
    def serve_static(path):
        return send_from_directory(app.static_folder, path)

    app.register_blueprint(internal)
    app.register_blueprint(api)

    

    return app