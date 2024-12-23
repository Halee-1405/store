import { Link } from 'react-router-dom';
import './ProductSection.css';

function ProductSection({ category, products }) {
  return (
    <div>
      <h2 className="title-son">{category}</h2>
      <div className="menu-hott">
        {products.map(product => (
          <div className="list-img" key={product.id}>
            <Link to={`/productdetails/${product.id}`}>
              <div className='list-imgboder'>      
                <img src={product.image} alt={product.name} />
              </div>
              <h2>{product.name}</h2>
              <p><strong>Giá: {product.price}</strong></p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;


