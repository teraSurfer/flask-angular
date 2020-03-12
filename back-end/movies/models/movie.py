
from movies import db, ma
class Movie(db.Model):
    __tablename__ = "movies"
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), unique=False, nullable=False)
    director = db.Column(db.String(200), unique=False, nullable=False)
    thumbnail = db.Column(db.String(2048), unique=False, nullable=True)
    release_date = db.Column(db.Date, unique=False, nullable=True)

    def __init__(self, name, director, thumbnail, release_date):
        self.name = name
        self.director = director
        self.thumbnail = thumbnail
        self.release_date = release_date

class MovieSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'director', 'thumbnail', 'release_date')

