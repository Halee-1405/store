from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from bson import ObjectId
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)

# Kết nối MongoDB
client = MongoClient("mongodb://admin:password@localhost:27017/")
db = client["webstore"]
product_collection = db["quanly"]
# import pdb; pdb.set_trace();

# Schema sản phẩm
class Product(BaseModel):
    name: str
    price: float
    stock: int

# Hàm chuyển đổi ObjectId thành chuỗi
def product_serializer(product) -> dict:
    return {
        "id": str(product["_id"]),
        "name": product["name"],
        "price": product["price"],
        "stock": product["stock"]
    }

# Lấy danh sách sản phẩm
@app.get("/api/products")
def get_products():
    products = product_collection.find({})
    return [product_serializer(product) for product in products]

# Lấy sản phẩm theo ID
@app.get("/api/products/{product_id}")
def get_product(product_id: str):
    product = product_collection.find_one({"_id": ObjectId(product_id)})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product_serializer(product)

# Thêm sản phẩm
@app.post("/api/products")
def create_product(product: Product):
    new_product = product.dict()
    result = product_collection.insert_one(new_product)
    return {"id": str(result.inserted_id)}

# Cập nhật sản phẩm
@app.put("/api/products/{product_id}")
def update_product(product_id: str, product: Product):
    updated_product = product.dict()
    result = product_collection.update_one({"_id": ObjectId(product_id)}, {"$set": updated_product})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "Product updated"}

# Xóa sản phẩm
@app.delete("/api/products/{product_id}")
def delete_product(product_id: str):
    result = product_collection.delete_one({"_id": ObjectId(product_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "Product deleted"}
