import { Link } from 'react-router-dom';
import styles from './DesDiscover.module.css';

function DesMenu() {
    return (
        <div className={styles.desmenu}>
            <div className={`${styles.drink} ${styles.drink4}`}>
                <div className={styles.des}>
                    <h1 style={{ width: "500px"}}>MENU ĐẶC BIỆT (SPECIAL MENU)</h1>
                    <p style={{ width: "500px"}}>
                        Với sự hội tụ giữa các hạt cà phê ngon nhất của Việt Nam và Thế Giới, 
                        cùng kết các phương pháp pha cà phê truyền thống và hiện đại. 
                        Highlands Bưu Điện Thành Phố đem lại các trải nghiệm độc đáo và mới lạ "CHỈ RIÊNG TẠI ĐÂY".
                    </p>
                    <Link to="/discover/special"><button>KHÁM PHÁ THÊM</button></Link>
                </div>
                <div className={styles.image}>
                    <img 
                        src="https://www.highlandscoffee.com.vn/vnt_upload/cake/BACKGROUND/PNG/Cold_Brew_Lemon_copy.png" 
                        alt="MENU ĐẶC BIỆT (SPECIAL MENU)" 
                    />
                </div>
            </div>
            
            <div className={`${styles.drink} ${styles.drink5}`} style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ marginLeft: "50px" }}>
                    <img 
                        src="https://www.highlandscoffee.com.vn/vnt_upload/cake/BACKGROUND/PNG/Tra_Oi_Hong.png" 
                        alt="MENU NGUYÊN BẢN (STANDARD MENU)"
                        style={{ width: "500px" }}
                    />
                </div>
                <div className={styles.des} style={{ marginTop: "2%", marginRight: "100px" }}>
                    <h1 style={{ fontSize: "4rem", marginBottom: 0,  }}>
                        MENU NGUYÊN BẢN (STANDARD MENU)
                    </h1>
                    <p style={{ width: "500px", fontSize: "1.2rem", fontWeight: "bold", fontFamily: "Arial, Helvetica, sans-serif", textAlign: "justify" }}>
                        Các sản phẩm đại diện của Chúng Mình mang đến hương vị tinh tế của văn hóa Việt Nam,
                        gồm Phin Cà Phê Truyền Thống Coffee đậm đà, Trà Sen Vàng độc đáo, Freeze Trà Xanh tuyệt vời và 
                        Phindi Hạnh Nhân ngon khó cưỡng. Mỗi sản phẩm tại Highlands Coffee là một câu chuyện,
                        mời gọi bạn khám phá hương vị Việt qua từng ngụm, nơi giao thoa giữa Hiện Đại và Truyền Thống.
                    </p>
                    <Link to="/discover/original"><button>KHÁM PHÁ THÊM</button></Link>
                </div>
            </div>


            <div className={`${styles.drink} ${styles.drink6}`}>
                <div className={styles.des}>
                    <h1>THỰC ĐƠN MÓN ĂN (FOOD MENU)</h1>
                    <p style={{ width: "500px"}}>
                        Khám phá Thực Đơn phong phú, các loại Bánh Mặn/Ngọt (mới) 
                        tại Highlands Bưu Điện Thành Phố được làm riêng tại nơi đây.
                    </p>
                    <Link to="/discover/food"><button>KHÁM PHÁ THÊM</button></Link>
                </div>
                <div className={styles.image}>
                    <img 
                    src="https://www.highlandscoffee.com.vn/vnt_upload/cake/BACKGROUND/PNG/pizza1_copy.png" 
                    alt="THỰC ĐƠN MÓN ĂN (FOOD MENU)"

                    />
                </div>
            </div>
        </div>
    );
}

export default DesMenu;
