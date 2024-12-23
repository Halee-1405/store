# models/order.py
from pydantic import BaseModel


class Order(BaseModel):
    id: str
    orderTime: str
    customerName: str
    phone: int
    status: str  # Example status: "Pending", "Completed", "Shipped"

