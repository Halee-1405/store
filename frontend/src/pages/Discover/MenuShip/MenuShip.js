import './MenuShip.css'
function MenuShip() {
  return (
    <div className="menu" id="menu1">
      <h2 className="title-son">THỰC ĐƠN GIAO HÀNG</h2>
      <img src="/img/menuship1.jpg" alt="Thực Đơn" />
      <img src="/img/menuship2.png" alt="Thực đơn" />
      <p className="no-wrap">
        (*) Khung giá bán có thể thay đổi tuỳ thuộc khu vực quán. 
        Quý khách vui lòng liên hệ hotline{" "}
        <b style={{ fontSize: "25px" }}>1900 1755</b> để được hướng dẫn thêm. 
        Xin cảm ơn!
      </p>
    </div>
  );
}

export default MenuShip;

