from datetime import datetime as dt
from flask import current_app as app
from flask import request, make_response, jsonify
from movies.models.movie import Movie, MovieSchema

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