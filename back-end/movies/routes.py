from datetime import date as dt
from flask import current_app as app
from flask import request, make_response, jsonify
from flask_cors import cross_origin
from movies.models.movie import Movie, MovieSchema
from movies import db

movies_schema = MovieSchema(many=True)
movie_schema = MovieSchema()

@app.route("/")
def say_hello_world():
    message = dict({"message": "Hello World!"})
    return make_response(jsonify(message), 200)

@app.route("/movies", methods=["GET"])
def get_movies():
    limit = request.args.get("limit") or 10
    movies = Movie.query.limit(limit).all()
    result = movies_schema.dump(movies);
    return jsonify(result)

@app.route("/movies/<id>", methods=["GET"])
def get_movie_by_id(id):
    movie = Movie.query.get(id)
    return movie_schema.jsonify(movie)

@app.route("/movies", methods=["POST"])
@cross_origin()
def create_new_movie():
    name = request.json['name']
    release_date = dt.fromtimestamp(request.json['release_date'])
    director = request.json['director']
    thumbnail = request.json['thumbnail']
    new_movie = Movie(name, director, thumbnail, release_date)
    db.session.add(new_movie)
    db.session.commit()
    return movie_schema.jsonify(new_movie)