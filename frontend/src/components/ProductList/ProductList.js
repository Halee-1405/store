import './ProductList.css';
import ProductSection from './ProductSection/ProductSection';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import productsData from '../../pages/productsData';


function ProductList() {
  const location = useLocation();

  let products;
  let title;
  let pageClass;
  const [visibleProducts, setVisibleProducts] = useState(6); // Hiển thị 6 sản phẩm ban đầu (2 dãy)

  switch (location.pathname) {
    case '/':
      products = productsData.home;
      title = <h1 className="title">SẢN PHẨM HOT</h1>;
      pageClass = 'home-page';
      break;
    case '/menu/cafe':
      products = productsData.cafe;
      pageClass = 'menu-cafe';
      break;
    case '/menu/freeze':
      products = productsData.freeze;
      pageClass = 'menu-freeze';
      break;
    case '/menu/tea':
      products = productsData.tea;
      pageClass = 'menu-tea';
      break;
    case '/menu/other':
      products = productsData.other;
      pageClass = 'menu-other';
      break;
    case '/menu/cake':
      products = productsData.cake;
      pageClass = 'menu-cake';
      break;
    case '/discover/food':
      products = productsData.food;
      pageClass = 'menu-food';
      break;
    case '/discover/original':
      products = productsData.original;
      pageClass = 'menu-original';
      break;
    case '/discover/special':
      products = productsData.special;
      pageClass = 'menu-special';
      break;
  
    default:
      products = [];
      title = null;
      pageClass = '';
  }
  console.log('products:', products);
  const categories = [...new Set(products.map(product => product.category))];

  // Hàm để hiển thị thêm sản phẩm
  const loadMoreProducts = () => {
    setVisibleProducts(prevState => prevState + 3); // Hiển thị thêm 3 sản phẩm
  };

  const allItemsVisible = visibleProducts >= products.length;

  return (
    <div className={`menu ${pageClass}`} id="products">
      {title}
      <div className="menu-hott">
        {categories.map(category => (
          <ProductSection
            key={category}
            category={category}
            products={products
              .filter(product => product.category === category)
              .slice(0, visibleProducts)} // Chỉ hiển thị các sản phẩm đã được chọn
          />
        ))}
      </div>
      {location.pathname !== '/' && !allItemsVisible && ( // Render button only if not on home page
        <div className="btn-add">
          <button id="loadMore" onClick={loadMoreProducts}>
            XEM THÊM
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;


