// ProductManagement.js
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, removeProduct, createProduct, updateProduct } from '../../../redux/productSlice';
import styles from './ProductManagement.module.css';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { FaBox } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrFormViewHide } from "react-icons/gr";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentStock, setCurrentStock] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState('');
  const keyword = useSelector(state => state.search.keyword); // Lấy từ khóa tìm kiếm từ Redux

  // Lọc sản phẩm theo từ khóa
  const filteredProducts = products.filter(product =>
    (product.name.toLowerCase().includes(keyword.toLowerCase())) || 
    (product.id.toLowerCase().includes(keyword.toLowerCase())) // Tìm kiếm theo tên sản phẩm
  );


// Phân trang
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 7;
// Hàm để tính số trang
const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
// Phân trang sản phẩm
const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
// Thao tác phân trang
const nextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(prev => prev + 1);
  }
};


const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(prev => prev - 1);
  }
};


  const handleEditProduct = (product) => {
    setProductToEdit(product);  // Lưu thông tin sản phẩm cần chỉnh sửa vào trạng thái
    setIsEditModalOpen(true);   // Mở modal chỉnh sửa
  };
  
  // Hàm lưu sản phẩm sau khi chỉnh sửa
  const handleUpdateProduct = async () => {
    if (productToEdit) {
      await dispatch(updateProduct(productToEdit));  // Giả sử bạn có một action `updateProduct`
      setIsEditModalOpen(false);
      setProductToEdit(null);
    }
  };
  
  const [newProduct, setNewProduct] = useState({
    name: '',
    image: '',
    id: '',
    price: 0,
    stock: 0,
  });

  const handleAddProduct = async () => {
    await dispatch(createProduct(newProduct));
    setIsAddModalOpen(false); // Đóng modal sau khi thêm sản phẩm
    setNewProduct({ name: '', image: '', id: '', price: 0, stock: 0 }); // Reset form
  };
  

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentStock(products.reduce((total, product) => total + product.stock, 0));
  }, [products]);

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      dispatch(removeProduct(id)); // Gọi action xóa sản phẩm
    }
  };
  

  const handleCheckboxChange = (id) => {
    setSelectedProducts(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(productId => productId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    // Example logic for updating stock as of the selected date
    // This would require backend API support to fetch stock data by date.
    // For now, we'll keep it static.
  };

  // Close the menu if user clicks outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles.statsMenu}`)) {
        setIsMenuOpen(false); // Close stats menu if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  // Tạo tham chiếu cho input file


  return (
    <div className={styles.container} style={{ marginTop: '70px', marginLeft: '270px', padding: '20px' }}>
      <div className={styles.title}>
        <h1>Quản Lý Sản Phẩm</h1>
        <button className={styles.addBtn} onClick={() => setIsAddModalOpen(true)}>Thêm sản phẩm</button>
      </div>

        {/* Form thêm sản phẩm */}
        {isAddModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalOverlay} />
          <div className={styles.modalContent}>
          <button className={styles.closeBtn} onClick={() => setIsAddModalOpen(false)}>&times;</button>
            <h2>Thêm sản phẩm</h2>
            <label>
              Tên sản phẩm:
              <input 
                type="text" 
                value={newProduct.name} 
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
              />
            </label>
            <label>
              <div style={{marginBottom: '5px'}}>Ảnh sản phẩm:</div>
              <div className={styles.fileInputWrapper}>
                <input 
                  type="file" 
                  className={styles.fileInput}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setImageUrl(url); 
                      setNewProduct({ ...newProduct, image: url });
                    }
                  }} 
                  ref={fileInputRef} 
                />
              </div>
            </label>
            {imageUrl && (
              <div>
                <img src={imageUrl} alt="Product" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                <button 
                  onClick={() => {
                    setImageUrl(''); // Xóa ảnh hiển thị
                    setNewProduct({ ...newProduct, image: '' }); // Xóa URL ảnh trong form
                    fileInputRef.current.value = ''; // Reset giá trị file input
                  }}
                  style={{
                    position: 'absolute',
                    top: '296px', 
                    left: '118px', 
                    background: 'transparent',
                    border: 'none',
                    color: '#333',
                    fontSize: '20px',
                    cursor: 'pointer',
                  }}
                >
                  &times;
                </button>
              </div>
            )}
            <label>
              Mã sản phẩm:
              <input 
                type="text" 
                value={newProduct.id} 
                onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })} 
              />
            </label>
            <div className={styles.inputRow}>
              <label>
                Giá bán (VNĐ):
                <input 
                  type="number" 
                  value={newProduct.price} 
                  onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })} 
                />
              </label>
              <label>
                Tồn kho:
                <input 
                  type="number" 
                  value={newProduct.stock} 
                  onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value, 10) })} 
                />
              </label>
            </div>
            <div className={styles.modalActions}>
              <button onClick={handleAddProduct}>Thêm</button>
              <button onClick={() => setIsAddModalOpen(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && productToEdit && (
        <div className={styles.modal}>
          <div className={styles.modalOverlay} />
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={() => setIsEditModalOpen(false)}>&times;</button>
            <h2>Chỉnh sửa sản phẩm</h2>
            
            <label>
              Tên sản phẩm:
              <input 
                type="text" 
                value={productToEdit.name} 
                onChange={(e) => setProductToEdit({ ...productToEdit, name: e.target.value })}
              />
            </label>
            
            <label>
              <div style={{marginBottom: '5px'}}>Ảnh sản phẩm:</div>
              <div className={styles.fileInputWrapper}>
                <input 
                  type="file" 
                  className={styles.fileInput}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setImageUrl(url); 
                      setProductToEdit({ ...productToEdit, image: url });
                    }
                  }} 
                  ref={fileInputRef} 
                />
              </div>
            </label>
            
            {/* Hiển thị ảnh cũ nếu có, và ảnh mới nếu có */}
            {imageUrl || productToEdit.image ? (
              <div>
                <img 
                  src={imageUrl || productToEdit.image} 
                  alt="Product" 
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                />
                <button 
                  onClick={() => {
                    setImageUrl(''); // Xóa ảnh hiển thị
                    setProductToEdit({ ...productToEdit, image: '' }); // Xóa URL ảnh trong form
                    fileInputRef.current.value = ''; // Reset giá trị file input
                  }}
                  style={{
                    position: 'absolute',
                    top: '296px', 
                    left: '118px', 
                    background: 'transparent',
                    border: 'none',
                    color: '#333',
                    fontSize: '20px',
                    cursor: 'pointer',
                  }}
                >
                  &times;
                </button>
              </div>
            ) : null}

            <label>
              Mã sản phẩm:
              <input 
                type="text" 
                value={productToEdit.id} 
                onChange={(e) => setProductToEdit({ ...productToEdit, id: e.target.value })}
              />
            </label>
            
            <div className={styles.inputRow}>
              <label>
                Giá bán (VNĐ):
                <input 
                  type="number" 
                  value={productToEdit.price} 
                  onChange={(e) => setProductToEdit({ ...productToEdit, price: parseFloat(e.target.value) })}
                />
              </label>
              <label>
                Tồn kho:
                <input 
                  type="number" 
                  value={productToEdit.stock} 
                  onChange={(e) => setProductToEdit({ ...productToEdit, stock: parseInt(e.target.value, 10) })}
                />
              </label>
            </div>

            <div className={styles.modalActions}>
              <button onClick={handleUpdateProduct}>Lưu thay đổi</button>
              <button onClick={() => setIsEditModalOpen(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}

      {/* Thêm phần thống kê */}
      <div className={styles.stats}>
        <div>
          <p><strong style={{ fontSize: '18px' }}>Tình Trạng Tồn Kho</strong></p>
          <p><strong style={{ fontSize: '35px' }}>{currentStock}</strong></p>
          <p style={{ fontSize: '14px' }}>Hiện tại</p>
        </div>
        <div className={styles.statsIconWrapper}>
          <div className={styles.statsIcon}>
            <FaBox />
          </div>
          <div className={styles.statsMenu}>
            <BsThreeDotsVertical
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              style={{ cursor: 'pointer', fontSize: '24px' }} 
            />
            {isMenuOpen && (
              <div className={styles.menu}>
                <div>
                  <label htmlFor="datePicker">Chọn Ngày:</label>
                  <input
                    id="datePicker"
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
                <button onClick={() => setIsMenuOpen(false)}>Xem thống kê</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>
                <input 
                  type="checkbox" 
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedProducts(products.map(product => product.id));
                    } else {
                      setSelectedProducts([]);
                    }
                  }}
                  checked={selectedProducts.length === products.length && products.length > 0}
                />
              </th>
              <th>TÊN SẢN PHẨM</th>
              <th>MÃ SẢN PHẨM</th>
              <th>GIÁ BÁN (VNĐ)</th>
              <th>TỒN KHO</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map(product => (
              <tr key={product.id}>
                <td>
                  <input 
                    type="checkbox" 
                    onChange={() => handleCheckboxChange(product.id)}
                    checked={selectedProducts.includes(product.id)}
                  />
                </td>
                <td>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className={styles.productImage} 
                  />
                  {product.name}
                </td>
                <td>{product.id}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button className={styles.editBtn} onClick={() => handleEditProduct(product)}><CiEdit style={{ fontSize: '18px' }} /></button>
                  <button className={styles.deleteBtn} onClick={() => handleDelete(product.id)}><AiOutlineDelete style={{ fontSize: '18px' }} /></button>
                  <button className={styles.hiddenBtn} ><GrFormViewHide style={{ fontSize: '18px' }} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        {/* Phân Trang */}
      <div className={styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>Trang trước</button>
        <span>{`Trang ${currentPage} / ${totalPages}`}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Trang sau</button>
      </div>

    </div>
  );
};

export default ProductManagement;



