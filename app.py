import os

from flask import Flask, session, render_template, request
from flask_session import Session
import requests



app = Flask(__name__)


# Check for environment variable
#if not os.getenv("DATABASE_URL"):
#    raise RuntimeError("DATABASE_URL is not set")

# Configure session to use filesystem
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)




@app.route("/")
def index():
    return render_template("/templates/index.html")

