
from fastapi import APIRouter
from models.order import Order
from pymongo import MongoClient
from bson import ObjectId

client = MongoClient('mongodb://admin:password@localhost:27017/')
db = client['webstore']
orders_collection = db['orders']

router = APIRouter()

@router.get('/api/orders')
def get_orders():
    orders = list(orders_collection.find())
    for order in orders:
        order['_id'] = str(order['_id'])
    return orders

@router.post('/api/orders')
async def create_order(order: Order):
    order_data = order.dict()
    result = orders_collection.insert_one(order_data)
    order_data['_id'] = str(result.inserted_id)
    return order_data

@router.put('/api/orders/{order_id}')
async def update_order(order_id: str, order: Order):
    updated_order = orders_collection.find_one_and_update(
        {'_id': ObjectId(order_id)},
        {'$set': order.dict()},
        return_document=True
    )
    updated_order['_id'] = str(updated_order['_id'])
    return updated_order

@router.delete('/api/orders/{order_id}')
async def delete_order(order_id: str):
    orders_collection.delete_one({'_id': ObjectId(order_id)})
    return {'message': 'Order deleted'}
