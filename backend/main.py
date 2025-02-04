from app import app
from dotenv import load_dotenv
from os import getenv
load_dotenv()

if __name__ == "__main__":

    port = getenv("PORT")
    app.run(host="localhost",port=port,debug=False)