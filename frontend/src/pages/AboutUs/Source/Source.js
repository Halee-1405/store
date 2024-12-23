import { Link } from 'react-router-dom'
import './Source.css'
function Source() {
    return (
        <div>
            <div className="aboutus-source">
                <img src="/img/ABOUT-source.png" alt="Coffee" className="background-image" />
                <div className="overlay"></div>
            </div>

            <div className="source-content">
                <div className="content">
                    <h1>NGUỒN GỐC</h1>
                    <p style={{ textAlign: "justify" }}>
                    CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH <br /> <br />
    
                    Highlands Coffee® được thành lập vào năm 1999, 
                    bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. 
                    Tinh thần cộng đồng luôn chảy trong ADN của mỗi người Việt mình. 
                    Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ 
                    và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối 
                    và sự gắn bó giữa người với người. 
                    Ngày hôm nay, với hàng trăm cửa hàng trên khắp Việt Nam và trên Thế Giới, 
                    thứ chúng mình đem lại không chỉ dừng lại ở cà phê. 
                    Chúng mình còn là nơi để thuộc về, là nơi để kết nối tất cả mọi người với nhau. 
                    Từ đó, Highlands Coffee® trở thành nơi dành riêng cho cộng đồng. <br /> <br />

                    Trong tương lai, chúng mình sẽ luôn thấy một Việt Nam đang phát triển 
                    và một Highlands Coffee® không ngừng cải tiến. 
                    Highlands Coffee® - điểm tụ họp của cộng đồng, 
                    nơi mọi người có thể kết nối và gắn kết với nhau bằng tình yêu dành cho cà phê, 
                    trà và các món ăn ngon. Tại Highlands Coffee®, chúng mình luôn sát cánh cùng bạn, 
                    chúng mình luôn ủng hộ bạn và chúng mình luôn đồng hành với nhau như một cộng đồng. <br /> <br />
                    <b>Highlands Coffee® Là Của Chúng Mình.</b>
                    </p>
                </div>

                <div className="source-lk">
                    <div className="source-lkimg">
                        <Link to='/aboutus/service'><h1>DỊCH VỤ</h1></Link>
                        <img src="/img/ABOUT-service1.jpg" alt="DỊCH VỤ" />
                    </div>
                    <div className="source-lkimg">
                        <Link to='/aboutus/job'><h1>NGHỀ NGHIỆP</h1></Link>
                        <img src="/img/ABOUT-source2.jpg" alt="NGHỀ NGHIỆP" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Source;
