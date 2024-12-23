import { Link } from 'react-router-dom'
import './Service.css'
function Service() {
    return (
        <div>
            <div className="aboutus-source">
                <img src="/img/ABOUT-service.png" alt="Coffee" className="background-image" />
                <div className="overlay"></div>
            </div>

            <div className="source-content">
                <div className="content">
                    <h1>DỊCH VỤ</h1>
                    <p style={{ textAlign: "justify" }}>
                        DỊCH VỤ NÀY LÀ CỦA CHÚNG MÌNH <br /> <br />
                        <b>Chúng mình có thể làm gì để hoàn thiện Highlands Coffee®?</b> <br /> <br />
                        Highlands Coffee® là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình. <br /> <br />
                        Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Highlands Coffee® của chúng mình trở nên tuyệt vời hơn. <br /> <br />
                        <b>Đừng ngại chia sẻ ý kiến của bạn tại:</b>
                        Facebook:{" "}
                        <Link to="https://www.facebook.com/highlandscoffeevietnam/">
                            https://www.facebook.com/highlandscoffeevietnam/
                        </Link>
                        <br /> <br />
                        Hoặc bạn có thể gửi email cho chúng mình đến địa chỉ:{" "}
                        <span className="content-email">customerservice@highlandscoffee.com.vn</span>, chúng mình sẽ phản hồi
                        trong thời gian sớm nhất có thể.
                    </p>
                </div>

                <div className="source-lk">
                    <div className="source-lkimg">
                        <Link to='/aboutus/source'><h1>NGUỒN GỐC</h1></Link>
                        <img src="/img/ABOUT-service1.jpg" alt="NGUỒN GỐC" />
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

export default Service;
