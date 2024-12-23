from fastapi import FastAPI
from routes.product_routes import router as product_router
from routes.order_routes import router as order_router 
from routes.customer_routes import router as customer_router 
from routes.inventory_routes import router as inventory_router 
from fastapi.middleware.cors import CORSMiddleware
from routes.user_routes import router as auth_router

app = FastAPI()

# Cấu hình CORS để frontend có thể giao tiếp với backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cho phép tất cả các domain
    allow_credentials=True,
    allow_methods=["*"],  # Cho phép tất cả các phương thức HTTP
    allow_headers=["*"],  # Cho phép tất cả các headers
)

# Đăng ký các router từ product và order
app.include_router(product_router)
app.include_router(order_router)  
app.include_router(customer_router)  
app.include_router(inventory_router)  

