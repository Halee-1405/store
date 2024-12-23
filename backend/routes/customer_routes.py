from fastapi import APIRouter
from models.customer import Customer
from pymongo import MongoClient
from bson import ObjectId

client = MongoClient('mongodb://admin:password@localhost:27017/')
db = client['webstore']
customers_collection = db['customers']

router = APIRouter()

@router.get('/api/customers')
async def get_customers():
    customers = list(customers_collection.find())
    for customer in customers:
        customer['_id'] = str(customer['_id'])
    return customers

@router.post('/api/customers')
async def create_customer(customer: Customer):
    customer_data = customer.dict()
    result = customers_collection.insert_one(customer_data)
    customer_data['_id'] = str(result.inserted_id)
    return customer_data

@router.put('/api/customers/{customer_id}')
async def update_customer(customer_id: str, customer: Customer):
    updated_customer = customers_collection.find_one_and_update(
        {'_id': ObjectId(customer_id)},
        {'$set': customer.dict()},
        return_document=True
    )
    updated_customer['_id'] = str(updated_customer['_id'])
    return updated_customer

@router.delete('/api/customers/{customer_id}')
async def delete_customer(customer_id: str):
    customers_collection.delete_one({'_id': ObjectId(customer_id)})
    return {'message': 'Customer deleted'}
