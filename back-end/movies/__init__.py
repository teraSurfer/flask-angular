import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

db = SQLAlchemy()
ma = Marshmallow()

def get_env_var(name):
    try:
        return os.environ[name]
    except KeyError:
        message = "Expected environment variable '{}' not set.".format(name)
        raise Exception(message)

def create_app():
    """Construct the core application."""
    app = Flask(__name__, instance_relative_config=False)
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SQLALCHEMY_ECHO"] = True
    POSTGRES_URL = get_env_var("POSTGRES_URL")
    POSTGRES_USER = get_env_var("POSTGRES_USER")
    POSTGRES_PW = get_env_var("POSTGRES_PW")
    POSTGRES_DB = get_env_var("POSTGRES_DB")
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://{user}:{pw}@{url}/{db}'.format(user=POSTGRES_USER,pw=POSTGRES_PW,url=POSTGRES_URL,db=POSTGRES_DB)
    app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
    db.init_app(app)
    ma.init_app(app)
    # app.config.from_object('config.Config')
    CORS(app)
    with app.app_context():
        # Imports
        from . import routes

        # Create tables for our models
        db.create_all()
        return app
