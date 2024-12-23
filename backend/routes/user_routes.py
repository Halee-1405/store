from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from models.user import User
from utils.userlogin import get_password_hash, verify_password, create_access_token
from pymongo import MongoClient

router = APIRouter()
client = MongoClient("mongodb://admin:password@localhost:27017/")
db = client["webstore"]
users_collection = db["users"]
# Đăng ký
@router.post("/register/")
async def register(user: User):
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email đã được sử dụng.")
    hashed_password = get_password_hash(user.password)
    new_user = {"username": user.username, "email": user.email, "password": hashed_password, "avatar": user.avatar}
    users_collection.insert_one(new_user)
    return {"message": "Đăng ký thành công"}

# Đăng nhập
@router.post("/login/")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = users_collection.find_one({"email": form_data.username})
    if not user or not verify_password(form_data.password, user["password"]):
        raise HTTPException(status_code=401, detail="Thông tin đăng nhập không chính xác")
    
    access_token = create_access_token(data={"sub": user["email"]})
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {"username": user["username"], "email": user["email"], "avatar": user.get("avatar", "")}
    }


