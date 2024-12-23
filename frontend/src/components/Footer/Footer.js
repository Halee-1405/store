import './Footer.css'
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa";

function Footer() {
    return ( 
        <div class="inform">
            <div class="icons">
                <a href="https://www.facebook.com/highlandscoffeevietnam/"><FaFacebook className='icons-dynamic' /></a>
                <a href="https://www.youtube.com/channel/UCHEqa2uTf8uXrGWrnU3ThgA"><FaYoutube className='icons-dynamic' /></a>
                <a href="https://www.instagram.com/highlandscoffeevietnam/"><FaInstagram className='icons-dynamic' /></a>
            </div>
            <p class="reserve">© 2018 Highlands Coffee. All rights reserved</p>
            <p class="hotline">Đặt hàng: 19001755 </p>
            <div class="email">
                <FaEnvelope/>&emsp;customerservice@highlandscoffee.com.vn
            </div>
        </div>
     );
}

export default Footer;