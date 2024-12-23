import { Link } from 'react-router-dom';
import styles from './DesMenu.module.css';

function DesMenu() {
    return (
        <div className={styles.desmenu}>
            <div className={`${styles.drink} ${styles.drink1}`}>
                <div className={styles.des}>
                    <h1>CÀ PHÊ</h1>
                    <p>
                        Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.
                    </p>
                    <Link to="/menu/cafe"><button>KHÁM PHÁ THÊM</button></Link>
                </div>
                <div className={styles.image}>
                    <img 
                        src="https://www.highlandscoffee.com.vn/vnt_upload/product/04_2023/PHIN_SUA_DA_5.1.png" 
                        alt="CÀ PHÊ" 
                    />
                </div>
            </div>

            <div className={`${styles.drink} ${styles.drink2}`} style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div style={{ marginLeft: '80px' }}>
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/FREEZE-TRA-XANH-5.1.png" alt="FREEZE" 
                        style={{ width: '420px' }}
                    />
                </div>
                <div className={styles.des} style={{ marginTop: '3%', marginRight: '250px' }}>
                    <h1 style={{ fontSize: '4rem', marginBottom: '0' }}>FREEZE</h1>
                    <p style={{ width: '580px', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}>
                        Sảng khoái với thức uống đá xay phong cách Việt. 
                        Freeze là thức uống đá xay mát lạnh được pha chế từ 
                        những nguyên liệu thuần túy của Việt Nam.
                    </p>
                    <Link to="/menu/freeze"><button>KHÁM PHÁ THÊM</button></Link>
                </div>
            </div>


            <div className={`${styles.drink} ${styles.drink3}`}>
                <div className={styles.des}>
                    <h1>TRÀ</h1>
                    <p>
                        Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.
                    </p>
                    <Link to="/menu/tea"><button>KHÁM PHÁ THÊM</button></Link>
                </div>
                <div className={styles.image}>
                    <img 
                        src="https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/TRA-SEN-VANG-CN-5.1.png" 
                        alt="TRÀ" 
                    />
                </div>
            </div>
        </div>
    );
}

export default DesMenu;
