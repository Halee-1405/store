import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './PayMent.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { useCart } from '../../context/CartContext'; // Import useCart hook

function PayMent() {
  const { cartItems, cartCount, setCartItems, setCartCount  } = useCart();
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = subtotal < 99000 ? 10000 : 0; 
  const totalAmount = subtotal + shippingFee;

  const handlePlaceOrder = () => {
    const email = document.querySelector('input[name="email"]').value;
    const username = document.querySelector('input[name="username"]').value;
    const numberphone = document.querySelector('input[name="numberphone"]').value;
    const location = document.querySelector('input[name="location"]').value;

    if (!email || !username || !numberphone || !location) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

      // Reset giỏ hàng sau khi đặt hàng thành công
        setCartItems([]);
        setCartCount(0);
    // Hiển thị thông báo và điều hướng về trang chủ
    alert("Đặt hàng thành công!");
    navigate('/'); // Điều hướng về trang chủ
  };

  return (
    <div className="form-ODER">
      <div className="form-PayFILL">
        <h1 className="cart-Pay">
          <Link to='/'>Highlands Coffee®</Link>
        </h1>
        
        <div className="form-PAY">
          <div className="form-Pay1">
            <div className="form-Pay__header">
              <h3>Thông tin nhận hàng</h3>
              <Link to='/login'>
                <div style={{display: 'flex', gap: '3px'}}>
                  <div><FaRegCircleUser/></div>
                  <div>Đăng nhập</div>
                </div>
              </Link>
            </div>
            <div className="form-Pay__fill">
              <input type="text" name="email" placeholder="Email" required />
              <input type="text" name="username" placeholder="Họ và tên" required />
              <input type="text" name="numberphone" placeholder="Số điện thoại" required />
              <input type="text" name="location" placeholder="Địa chỉ" required />
              <textarea id="note" name="note" placeholder="Ghi chú"></textarea>
            </div>
          </div>
        
          <div className="form-Pay2">
            <div className="form-Pay__header">
              <h3>Vận chuyển</h3>
            </div>
            <div className="radio-wrapper">
              <div className="radio__input">
                <input id="shipTransport" name="shipTransport" type="radio" defaultChecked />
              </div>
              <label className="radio__label">
                <span className="radio__label11">
                  Giao hàng tận nơi (Đơn dưới 99,000đ <br />
                  khách hàng vui lòng trả thêm 10,000đ)
                </span>
                <span className="radio__label22">
                  <span className="radio__label__price">
                    10.000₫
                  </span>
                </span>                        
              </label>
            </div>

            <div className="form-Pay__header">
              <h3>Thanh toán khi giao hàng</h3>
            </div>
            <div className="radio-wrapper">
              <div className="radio__input">
                <input id="paymentMethod" name="paymentMethod" type="radio" />
              </div>
              <label className="radio__label">
                <span className="radio__label1">Thanh toán khi giao hàng (COD)</span>
                <span className="radio__label2">
                  <span className="radio__label__icon">
                    <i className="fa-solid fa-money-bill"></i>
                  </span>
                </span>                        
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="form-PayBILL">
        <div className="form-PayBILLs">
          <div className="form-PayBill__header">
            <h3>Đơn hàng ({cartCount} sản phẩm)</h3>
          </div>
          <div id="order-summary" className="order-summary-scroll">
            {cartItems.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.image} alt={item.title} />
                <div className="order-item-info">
                  <h4>{item.title}</h4>
                  <p>Kích thước: {item.size}</p>
                  <p>Số lượng: {item.quantity}</p>
                  <p>Giá: {item.price.toLocaleString()}đ</p>
                </div>
              </div>
            ))}
          </div>

          <div className="summary-section">
            <p className="summary-item"><span>Tạm tính:</span> <span>{subtotal.toLocaleString()}đ</span></p>
            <p className="summary-item"><span>Phí vận chuyển:</span> <span>{shippingFee === 0 ? 'Miễn phí' : shippingFee.toLocaleString() + 'đ'}</span></p>
            <p className="summary-item total"><span>Tổng cộng:</span> <span>{totalAmount.toLocaleString()}đ</span></p>
            <div className="buttons-container">
              <Link to='/cartview' className="return-cart">
                <i className="fa fa-arrow-left"></i> <span>Quay về giỏ hàng</span>
              </Link>
              <button className="checkout-button" onClick={handlePlaceOrder}>ĐẶT HÀNG</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayMent;
