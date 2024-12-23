import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import datas from "./datas";
import "./ProductDetails.css";
import SlideProducts from "../../components/SlideProducts/SlideProducts";
import { useCart } from '../../context/CartContext'; // Import hook useCart

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate(); // Hook dùng để điều hướng trang
  const product = datas.find((item) => item.id === productId);

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]?.label || "");
  const [price, setPrice] = useState(
    product ? product.basePrice + (product.sizes[0]?.extraPrice || 0) : 0
  );
  const [quantity, setQuantity] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [cartItem, setCartItem] = useState(null);

  const { updateCart, updateCartCount } = useCart(); // Sử dụng hook để cập nhật giỏ hàng

  if (!product) {
    return <h1>Sản phẩm không tồn tại!</h1>;
  }

  const handleSizeClick = (sizeLabel, extraPrice) => {
    setSelectedSize(sizeLabel);
    setPrice(product.basePrice + extraPrice);
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    setCartItem({
      title: product.title,
      size: selectedSize,
      quantity: quantity,
      price: price,
      image: product.image,
    });
    const newItem = {
        title: product.title,
        size: selectedSize,
        quantity: quantity,
        price: price,
        image: product.image,
      };
    updateCart(newItem); 
    setIsPopupVisible(true);
    updateCartCount(quantity); // Cập nhật số lượng sản phẩm trong giỏ hàng
  };

  const handleBuyNow = () => {
    handleAddToCart(); // Thêm sản phẩm vào giỏ hàng
    navigate("/payment"); // Sử dụng navigate thay cho useHistory để chuyển đến trang thanh toán
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <div className="cartshop">
        <div className="cartshop-img">
          <h1 className="cart-title">{product.title}</h1>
          <div className="cart-img">
            <img src={product.image} alt={product.title} />
          </div>
        </div>

        <div className="cartshop-buy">
          <p>{product.description}</p>
          <div className="cart-price">
            <h1 id="price">Giá: {price.toLocaleString()}đ</h1>
            <div className="cart-size">
              <h4>Kích thước:</h4>
              {product.sizes.map((size) => (
                <button
                  key={size.label}
                  className={`size-btn ${selectedSize === size.label ? "active" : ""}`}
                  onClick={() => handleSizeClick(size.label, size.extraPrice)}
                >
                  {size.label}
                </button>
              ))}
            </div>
            <div className="soluong">
              <h4>Số lượng:</h4>
              <button onClick={handleDecrease}>
                <FaMinus />
              </button>
              <p id="quantity">{quantity}</p>
              <button onClick={handleIncrease}>
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="cart-button">
            <button className="buy-now" onClick={handleBuyNow}>
              <Link to="/payment">MUA NGAY</Link>
            </button>
            <button className="add-to-cart" onClick={handleAddToCart}>
              THÊM VÀO GIỎ
            </button>
          </div>
        </div>
      </div>

      <SlideProducts />

      {/* Popup */}
      {isPopupVisible && (
        <div className="cart-popup">
          <div className="cart-popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <h2>Giỏ Hàng</h2>
            {cartItem ? (
              <div id="cart-items">
                <div className="cart-Item">
                  <img src={cartItem.image} alt={cartItem.title} />
                  <div className="cart-item-in4">
                    <h3>{cartItem.title}</h3>
                    <p>Kích thước: {cartItem.size}</p>
                    <p>Số lượng: {cartItem.quantity}</p>
                    <p>Giá: {cartItem.price.toLocaleString()}đ</p>
                  </div>
                </div>
                <div className="cart-popup-actions">
                  <button className="checkout-btnn" id="checkout-button">
                    <Link to="/PayMent">Thanh Toán</Link>
                  </button>
                  <button className="view-cart-btn">
                    <Link to="/cartview">Xem Giỏ Hàng</Link>
                  </button>
                </div>
              </div>
            ) : (
              <p>Giỏ hàng của bạn đang trống.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;



