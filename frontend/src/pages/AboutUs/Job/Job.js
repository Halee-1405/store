import { Link } from 'react-router-dom'
import './Job.css'
function Job() {
    return (
        <div>
            <div className="aboutus-source">
                <img src="/img/ABOUT-job.png" alt="Coffee" className="background-image" />
                <div className="overlay"></div>
            </div>

            <div className="source-content">
                <div className="content">
                    <h1>NGHỀ NGHIỆP</h1>
                    <p style={{ textAlign: "justify" }}>
                    CƠ HỘI NÀY LÀ CỦA CHÚNG MÌNH <br /> <br />

                    Chúng mình biết rằng để thành công, bạn muốn làm việc với những đồng nghiệp tuyệt vời, 
                    tận hưởng những khoảng thời gian đẹp nhất, hiệu quả nhất, thể hiện được tài năng, đam mê của mình và được là chính mình nhất. 
                    Tại cộng đồng Highlands của chúng mình, bạn sẽ được truyền cảm hứng từ các cơ hội việc làm chúng mình có 
                    và trở thành phiên bản tốt nhất của chính bản thân trong cộng đồng của chúng mình. <br /> <br />

                    Chúng mình hoàn toàn tin tưởng rằng nhiệm vụ của Highlands là trao quyền cho bạn, 
                    hỗ trợ bạn trong quá trình bạn tỏa sáng, tạo kiện tốt nhất để bạn nâng cấp kỹ năng vốn có của bạn 
                    cũng như khai phá những tố chất tiềm ẩn để bạn chạm đến PHIÊN BẢN TỐT NHẤT của bản thân. Cho dù bạn mới bắt đầu sự nghiệp 
                    hay đang là một chuyên gia có thật nhiều kinh nghiệm, tương lai của bạn đều có thể bắt đầu từ đây để hoàn thiện chính mình 
                    trong hành trình chinh phục những thử thách đầy hoài bão. <br /> <br />

                    Bạn đã sẵn sàng để nắm lấy cơ hội kiến tạo sự nghiệp cùng chúng mình để góp sức dựng xây một <b>Highlands Coffee® Là Của Chúng Mình?</b> <br /> <br/>

                    HÃY CÙNG CHÚNG MÌNH KHÁM PHÁ NHÉ:
                    </p>

                    <button>
                        <Link to="https://careers.highlandscoffee.com.vn/vi/trang-chu/">
                        <b>Join Our Talent Network</b> 
                        </Link>
                    </button>
                </div>

                <div className="source-lk">
                    <div className="source-lkimg">
                        <Link to='/aboutus/source'><h1>NGUỒN GỐC</h1></Link>
                        <img src="/img/ABOUT-service1.jpg" alt="NGUỒN GỐC" />
                    </div>
                    <div className="source-lkimg">
                        <Link to='/aboutus/service'><h1>DỊCH VỤ</h1></Link>
                        <img src="/img/ABOUT-source1.jpg" alt="DỊCH VỤ" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Job;
