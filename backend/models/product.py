from pydantic import BaseModel

class Product(BaseModel):
    name: str
    id: str
    price: float
    stock: int
    image: str
    