import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { IoLockClosed, IoPerson } from "react-icons/io5";
import './Login.css';

function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const handleSwitchToRegister = () => {
        setIsLogin(false);
    };

    const handleSwitchToLogin = () => {
        setIsLogin(true);
    };

    return ( 

        <div className="body">
            <header>
                <h2 className="logo"><Link to='/'>Highlands Coffee®</Link></h2>
                <nav className="navigation">
                    <Link to='/'>HOME</Link>
                    <Link to='/menu'>THỰC ĐƠN</Link>
                    <Link to='/discover'>KHÁM PHÁ</Link>
                    <Link to='/aboutus'>VỀ CHÚNG TÔI</Link>
                </nav>
            </header>

            <div className={`wrapper ${!isLogin ? "active" : ""}`}>
                {/* Login Form */}
                {isLogin ? (
                    <div className="form-box login">
                        <h2>Đăng Nhập</h2>
                        <form action="#">
                            <div className="input-box">
                                <span className="icon"><IoMdMail /></span>
                                <input type="email" required />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><IoLockClosed /></span>
                                <input type="password" required />
                                <label>Mật khẩu</label>
                            </div>
                            <div className="remember-forgot">
                                <label><input type="checkbox" />Ghi nhớ tôi</label>
                                <Link>Quên mật khẩu?</Link>
                            </div>
                            <button type="submit" className="btn-login">Đăng Nhập</button>
                            <div className="login-register">
                                <p>Bạn không có tài khoản? 
                                    <Link onClick={handleSwitchToRegister} className="register-link">Đăng Ký</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                ) : (
                    // Register Form
                    <div className="form-box logout">
                        <h2>Đăng Ký</h2>
                        <form action="#">
                            <div className="input-box">
                                <span className="icon"><IoPerson /></span>
                                <input type="text" required />
                                <label>Tên người dùng</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><IoMdMail /></span>
                                <input type="email" required />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <span className="icon"><IoLockClosed /></span>
                                <input type="password" required />
                                <label>Mật khẩu</label>
                            </div>
                            <div className="remember-forgot">
                                <label><input type="checkbox" />Tôi đồng ý với các điều khoản & điều kiện</label>
                            </div>
                            <button type="submit" className="btn-login">Đăng Ký</button>
                            <div className="login-register">
                                <p>Bạn đã sẵn sàng tạo 1 tài khoản? 
                                    <Link onClick={handleSwitchToLogin} className="login-link">Đăng Nhập</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
     );
}

export default Login;



