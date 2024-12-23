import './Slider.css'

// function Slider() {
//     return ( 
//         <div className="slider">
//             <div className="slides">
//                 <img src="img/1519x528p1.jpg" alt='' className="slide" />
//                 <img src="img/1519x528p2.jpg" alt='' className="slide" />
//                 <img src="img/1519x528p3.jpg" alt='' className="slide" />
//                 <img src="img/1519x528p4.jpg" alt='' className="slide" />
//                 <img src="img/1519x528p5.jpg" alt='' className="slide" />
//             </div>
//             <div className="btn">
//                 <div className="btn-nav" onclick="currentSlide(1)"></div>
//                 <div className="btn-nav" onclick="currentSlide(2)"></div>
//                 <div className="btn-nav" onclick="currentSlide(4)"></div>
//                 <div className="btn-nav" onclick="currentSlide(5)"></div>
//         </div>
//     </div>
       
//      );
// }

// export default Slider;

import React, { useState, useEffect } from 'react';

function Slider() {
    // State để theo dõi chỉ số slide hiện tại
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mảng chứa các hình ảnh slide
    const slides = [
        "img/1519x528p1.jpg",
        "img/1519x528p2.jpg",
        "img/1519x528p3.jpg",
        "img/1519x528p4.jpg",
        "img/1519x528p5.jpg"
    ];

    const totalSlides = slides.length;

    // Hàm hiển thị slide theo chỉ số
    const showSlide = (index) => {
        setCurrentIndex(index);
    };

    // Hàm chuyển đến slide tiếp theo
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    // Tự động chuyển slide mỗi 5 giây
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalId); // Dọn dẹp interval khi component unmount
    }, []);

    return (
        <div className="slider">
            <div className="slides" style={{ transform: `translateX(${-100 * currentIndex}%)` }}>
                {slides.map((src, index) => (
                    <img key={index} src={src} alt="" className="slide" />
                ))}
            </div>
            <div className="btn">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`btn-nav ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => showSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;






