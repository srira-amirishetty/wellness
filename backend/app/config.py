import os

class Config:
    SECRET_KEY = os.environ.get('secret-key')
    SQLALCHEMY_DATABASE_URI = os.environ.get('postgresql://postgres:1234@localhost:5432/wellness')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
