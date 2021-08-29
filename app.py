import os

from flask import Flask, session, render_template, request
from flask_session import Session
import requests

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/exercises")
def exercises():
    return render_template("exercises.html")
