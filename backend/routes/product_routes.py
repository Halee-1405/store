from fastapi import APIRouter
from models.product import Product
from pymongo import MongoClient
from bson import ObjectId

client = MongoClient('mongodb://admin:password@localhost:27017/')
db = client['webstore']
products_collection = db['products']

router = APIRouter()

@router.get('/api/products')
async def get_products():
    products = list(products_collection.find())
    for product in products:
        product['_id'] = str(product['_id'])
    return products

@router.post('/api/products')
async def create_product(product: Product):
    product_data = product.dict()
    result = products_collection.insert_one(product_data)
    product_data['_id'] = str(result.inserted_id)
    return product_data

@router.put('/api/products/{product_id}')
async def update_product(product_id: str, product: Product):
    updated_product = products_collection.find_one_and_update(
        {'id': ObjectId(product_id)},
        {'$set': product.dict()},
        return_document=True
    )
    updated_product['_id'] = str(updated_product['_id'])
    return updated_product


@router.delete('/api/products/{product_id}')
def delete_product(product_id: str):
    products_collection.delete_one({'id': product_id})
    return {'message': 'Product deleted'}

