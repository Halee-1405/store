import './Description.css'
import React from 'react';

const Description = () => {
  const descriptions = [
    {
      id: 1,
      imgSrc: 'img/poster-qc.jpg',
      imgAlt: 'Đất Việt',
      title: 'Highlands Coffee',
      text: `Được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. 
             Khởi đầu với sản phẩm cà phê đóng gói tại Hà Nội, chúng tôi đã nhanh chóng phát triển trở thành chuỗi cà phê nổi tiếng với 
             độ phủ hơn 500 cửa hàng trên khắp Việt Nam.`
    },
    {
      id: 2,
      imgSrc: 'img/poster22.jpg',
      imgAlt: 'poster',
      title: 'Dịch Vụ',
      text: `DỊCH VỤ NÀY LÀ CỦA CHÚNG MÌNH
             Highlands Coffee là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình.
             Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Highlands Coffee 
             của chúng mình trở nên tuyệt vời hơn.`
    },
    {
      id: 3,
      imgSrc: 'img/poster-qc33.jpg',
      imgAlt: 'poster',
      title: 'Đồ Ăn Và Thức Uống',
      text: `Đồ uống của Highland Coffee phù hợp với khẩu vị người Việt, đặc biệt là cà phê.
             Khác với các hãng cà phê khác trên thế giới, cà phê của Highland có hương vị đậm đà.
             Các hạt cà phê cũng được chọn lựa kỹ lưỡng bằng cách thủ công nên chất lượng luôn được đảm bảo.
             Ngoài ra, các loại thức ăn nhanh hiện nay tại Highland cũng đã được “Việt hóa” nên cải thiện được 
             định vị thương hiệu và độ thân thiện đối với khách hàng. Highland thực hiện bỏ đi burger, khoai tây chiên 
             và giữ lại món ăn gần gũi với người Việt là bánh mì.`
    }
  ];

  return (
    <div>
      {descriptions.map(({ id, imgSrc, imgAlt, title, text }) => (
        <div key={id} className={`poster poster${id}`}>
          {id !== 2 && <img src={imgSrc} alt={imgAlt} />}
          <p align="justify">
            <b>{title}</b> <br /> <br />
            {text}
          </p>
          {id === 2 && <img src={imgSrc} alt={imgAlt} />}
        </div>
      ))}
    </div>
  );
};

export default Description;
