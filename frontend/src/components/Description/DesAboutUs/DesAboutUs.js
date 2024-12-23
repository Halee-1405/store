import { Link } from 'react-router-dom';
import styles from './DesAboutUs.module.css';

function DesAboutus() {
    return (
        <div className={styles.desmenu}>

            <div className={`${styles.drink} ${styles.drink1}`}>
                <div className={styles.overlay}></div>
                <div className={styles.des}>
                    <h1>NGUỒN GỐC</h1>
                    <p>
                    Highlands Coffee® được thành lập vào năm 1999, 
                    bắt nguồn từ tình yêu dành cho đất Việt 
                    cùng với cà phê và cộng đồng nơi đây.&nbsp;
                    Ngay từ những ngày đầu tiên, mục tiêu của chúng mình 
                    là có thể phục vụ và góp phần phát triển cộng đồng bằng cách 
                    siết chặt thêm sự kết nối và sự gắn bó giữa người với người.
                    </p>
                    <Link to="#"><button>XEM CHI TIẾT</button></Link>
                </div>
                <div className={styles.image}>
                    <img
                        src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg"
                        alt="NGUỒN GỐC"
                    />
                </div>
            </div>

            <div className={`${styles.drink} ${styles.drink2}`}>
                <div className={styles.overlay}></div>
                <div className={styles.des} style={{marginLeft: '600px'}}>
                    <h1 style={{textAlign: 'right'}}>DỊCH VỤ</h1>
                    <p>
                    Highlands Coffee® là không gian của chúng mình nên mọi thứ 
                    ở đây đều vì sự thoải mái của chúng mình.&nbsp;
                    Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn
                    mong muốn để cùng nhau giúp Highlands Coffee® trở nên tuyệt vời hơn. 
                    </p>
                    <Link to="#"><button style={{marginLeft: '300px'}}>XEM CHI TIẾT</button></Link>
                </div>
                <div className={styles.image}>
                    <img
                        src="https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg"
                        alt="DỊCH VỤ"
                    />
                </div>
            </div>

            <div className={`${styles.drink} ${styles.drink3}`}>
                <div className={styles.overlay}></div>
                <div className={styles.des}>
                    <h1>NGHỀ NGHIỆP</h1>
                    <p>
                    Là điểm hội tụ của cộng đồng, Highlands Coffee® luôn tìm kiếm 
                    những thành viên mới với mong muốn không ngừng hoàn thiện một 
                    không gian dành cho tất cả mọi người.&nbsp;
                    Chúng mình luôn chào đón bạn trở thành một phần 
                    của Highlands Coffee® để cùng nhau siết chặt thêm những kết nối 
                    và sự gắn bó giữa người với người.
                    </p>
                    <Link to="#"><button>XEM CHI TIẾT</button></Link>
                </div>
                <div className={styles.image}>
                    <img
                        src="https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_5557_R3_-_Copy.jpg"
                        alt="NGHỀ NGHIỆP"
                    />
                </div>
            </div>
        </div>
    );
}

export default DesAboutus;
