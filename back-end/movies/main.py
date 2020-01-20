import os
import json
from flask import Flask, jsonify
from flask_cors import CORS

from flask_sqlalchemy import SQLAlchemy

import datetime

def get_env_variable(name):
    try:
        return os.environ[name]
    except KeyError:
        message = "Environment variable with name - '{}' is not set.".format(name)
        raise Exception(message)

# get env vars OR fail
POSTGRES_URL = get_env_variable("POSTGRES_URL") # 5432
POSTGRES_USER = get_env_variable("POSTGRES_USER")
POSTGRES_PW = get_env_variable("POSTGRES_PW")
POSTGRES_DB = get_env_variable("POSTGRES_DB")

app = Flask(__name__)
CORS(app)

DB_URL = 'postgresql+psycopg2://{user}:{pw}@{url}/{db}'.format(user=POSTGRES_USER,pw=POSTGRES_PW,url=POSTGRES_URL,db=POSTGRES_DB)

app.config['SQLALCHEMY_DATABASE_URI'] = DB_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # silence the deprecation warning

db = SQLAlchemy(app)

@app.route("/")
def say_hello_world():
    message = dict({"message": "Hello World!"})
    return jsonify(message)


def noop_test():
    assert 1 == 1

if __name__ == "__main__":
    app.debug = True
    app.run()