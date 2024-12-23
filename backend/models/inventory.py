# inventory.py
from pydantic import BaseModel

class InventoryEntry(BaseModel):
    time: str
    unit: str
