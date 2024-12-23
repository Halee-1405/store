# inventory_router.py
from fastapi import APIRouter
from models.inventory import InventoryEntry
from pymongo import MongoClient
from bson import ObjectId

client = MongoClient('mongodb://admin:password@localhost:27017/')
db = client['webstore']
inventory_collection = db['inventory']

router = APIRouter()

@router.get('/api/inventory')
async def get_inventory():
    inventory = list(inventory_collection.find())
    for entry in inventory:
        entry['_id'] = str(entry['_id'])
    return inventory

@router.post('/api/inventory')
async def add_inventory(entry: InventoryEntry):
    entry_data = entry.dict()
    result = inventory_collection.insert_one(entry_data)
    entry_data['_id'] = str(result.inserted_id)
    return entry_data

@router.delete('/api/inventory/{entry_id}')
async def delete_inventory(entry_id: str):
    inventory_collection.delete_one({'_id': ObjectId(entry_id)})
    return {'message': 'Inventory entry deleted'}
