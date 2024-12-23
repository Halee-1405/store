from pydantic import BaseModel

# Mô hình User
class User(BaseModel):
    username: str
    email: str
    password: str
