import React from 'react';
import './NavBar.css';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Import hook useCart

function NavBar() {
  const { cartCount } = useCart(); // Sử dụng hook để lấy số lượng giỏ hàng
  const [isSearchActive, setIsSearchActive] = React.useState(false);

  const toggleSearch = (event) => {
    event.stopPropagation(); 
    setIsSearchActive((prev) => !prev);
  };

  const closeSearch = () => {
    setIsSearchActive(false);
  };

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.search-form, #search')) {
        closeSearch();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="nav">
      <ul className="nav-logo">
        <img src="/img/logo1.png" alt="logo" />
      </ul>
      <ul className="nav-list">
        <li className="nav-item item1" id="menulist">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item item1" id="menulist">
          <Link to="/menu">THỰC ĐƠN</Link>
          <div className="sub-menu">
                <ul>
                    <li><Link to="/menu/cafe">CAFE</Link></li>
                    <li><Link to="/menu/freeze">FREEZE</Link></li>
                    <li><Link to="/menu/tea">TRÀ</Link></li>
                    <li><Link to="/menu/cake">BÁNH</Link></li>
                    <li><Link to="/menu/other">KHÁC</Link></li>
                </ul>
            </div>
        </li>
        <li className="nav-item item1" id="dislist">
            <Link to="/discover">KHÁM PHÁ</Link>
            <div className="sub-menu">
                <ul>
                    <li><Link to="/discover/special">MENU ĐẶC BIỆT</Link></li>
                    <li><Link to="/discover/original">MENU NGUYÊN BẢN</Link></li>
                    <li><Link to="/discover/food">FOOD MENU</Link></li>
                    <li><Link to="/discover/ship">THỰC ĐƠN GIAO HÀNG</Link></li>
                </ul>
            </div>
        </li>
        <li className="nav-item item1" id="aboutlist">
            <Link to="/aboutus">VỀ CHÚNG TÔI</Link>
            <div className="sub-menu">
                <ul>
                    <li><Link to="/aboutus/source">NGUỒN GỐC</Link></li>
                    <li><Link to="/aboutus/service">DỊCH VỤ</Link></li>
                    <li><Link to="/aboutus/job">NGHỀ NGHIỆP</Link></li>
                </ul>
            </div>
        </li>
        </ul>

        <ul className="nav-list">
            <li className="nav-item item2" id="search">
            <FaSearch onClick={toggleSearch} />
            </li>
            <li className="nav-item item2" id="cart">
            <Link to="/cartview">
                <FaShoppingCart />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* Hiển thị số lượng */}
            </Link>
            </li>
            <li className="nav-item item2" id="login">
            <Link to="/login">ĐĂNG NHẬP</Link>
            </li>
      </ul>

      <div className={`search-form ${isSearchActive ? 'active' : ''}`}>
        <input type="search" id="search-box" placeholder="Tìm kiếm..." />
      </div>
    </div>
  );
}

export default NavBar;


