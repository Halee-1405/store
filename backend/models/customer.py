from pydantic import BaseModel

class Customer(BaseModel):
    id: str
    nameCustomer: str
    birth: int
    email: str
    address: str

