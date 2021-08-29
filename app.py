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

@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/firstaid")
def firstaid():
    return render_template("firstaid.html")


@app.route("/mildmeniscal")
def mildmeniscal():
    return render_template("mildmeniscal.html")

@app.route("/moderate")
def moderate():
    return render_template("moderate.html")

