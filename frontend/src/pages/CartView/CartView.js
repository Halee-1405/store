import React from 'react';
import { useCart } from '../../context/CartContext'; // Import hook useCart
import SlideProducts from '../../components/SlideProducts/SlideProducts';
import './CartView.css';
import { Link } from 'react-router-dom';

function CartView() {
  const { cartItems, cartCount, removeItemFromCart } = useCart(); // Lấy các sản phẩm trong giỏ hàng, tổng số lượng và hàm xóa sản phẩm

  // Hàm xử lý khi nhấn nút Thanh Toán
  const handleCheckout = (e) => {
    if (cartCount === 0) {
      e.preventDefault(); // Ngăn điều hướng
      alert('Giỏ hàng đang trống, vui lòng thêm sản phẩm trước khi thanh toán!');
    }
  };

  return (
    <div className='cartview-body'>
      <div className="cart-view">
        <h2>Giỏ Hàng</h2>
        <div id="cart-items">
          {cartCount > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>Kích thước: {item.size}</p>
                  <p>Số lượng: {item.quantity}</p>
                  <p>Giá: {item.price.toLocaleString()}đ</p>
                </div>
                <button className="remove-btn" onClick={() => removeItemFromCart(item)}>
                  &times;
                </button>
              </div>
            ))
          ) : (
            <p>Giỏ hàng đang trống</p>
          )}
        </div>
        <button className="checkout-btn" id="checkout-btn">
          <Link to='/payment' onClick={handleCheckout}>Thanh Toán</Link>
        </button>
      </div>

      <div className="product-hot">
        <h2>Sản Phẩm Bán Chạy</h2>
      </div>
      <SlideProducts />
    </div>
  );
}

export default CartView;
