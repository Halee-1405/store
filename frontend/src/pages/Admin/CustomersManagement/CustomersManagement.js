import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, removeCustomer, createCustomer, updateCustomer } from '../../../redux/customerSlice';
import styles from './CustomersManagement.module.css';

const CustomerManagement = () => {
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customers.customers);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [customerToEdit, setCustomerToEdit] = useState(null);
  const keyword = useSelector(state => state.search.keyword); 


    // Lọc sản phẩm theo từ khóa
    const filteredCustomers = customers.filter(customer =>
      (customer.nameCustomer.toLowerCase().includes(keyword.toLowerCase())) || 
      (customer.id.toLowerCase().includes(keyword.toLowerCase())) // Tìm kiếm theo tên sản phẩm
    );

// Phân trang
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 7;
// Hàm để tính số trang
const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
// Phân trang sản phẩm
const paginatedCustomers = filteredCustomers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
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

  // Hàm lưu sản phẩm sau khi chỉnh sửa
  const handleUpdateCustomer = async () => {
    if (customerToEdit) {
      await dispatch(updateCustomer(customerToEdit));  // Giả sử bạn có một action updateProduct
      setIsEditModalOpen(false);
      setCustomerToEdit(null);
    }
  };
  
  const [newCustomer, setNewCustomer] = useState({
    id: '',
    nameCustomer: '',
    birth: '',
    email: '',
    address: '',
  });

  const handleAddCustomer = async () => {
    await dispatch(createCustomer(newCustomer));
    setIsAddModalOpen(false); // Đóng modal sau khi thêm sản phẩm
    setNewCustomer({ id: '', nameCustomer: '', birth: '', email: '', address: '', }); // Reset form
  };

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);


  const handleCheckboxChange = (id) => {
    setSelectedCustomers(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(customerId => customerId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  return (
    <div className={styles.container} style={{ marginTop: '70px', marginLeft: '270px', padding: '20px' }}>
      <div className={styles.title}>
        <h1>Quản Lý Khách Hàng</h1>
        <button className={styles.addBtn} onClick={() => setIsAddModalOpen(true)} >Thêm khách hàng</button>
      </div>

              {/* Form thêm khách hàng */}
              {isAddModalOpen && (
              <div className={styles.modal}>
                <div className={styles.modalOverlay} />
                <div className={styles.modalContent}>
                <button className={styles.closeBtn} onClick={() => setIsAddModalOpen(false)}>&times;</button>
                  <h2>Thêm khách hàng</h2>
                  <label>
                    Mã khách hàng:
                    <input 
                      type="text" 
                      value={newCustomer.id} 
                      onChange={(e) => setNewCustomer({ ...newCustomer, id: e.target.value })} 
                    />
                  </label>
                  <label>
                    Khách hàng:
                    <input 
                      type="text" 
                      value={newCustomer.nameCustomer} 
                      onChange={(e) => setNewCustomer({ ...newCustomer, nameCustomer: e.target.value })} 
                    />
                  </label>
                    <label>
                      Năm sinh:
                      <input 
                        type="text" 
                        value={newCustomer.birth} 
                        onChange={(e) => setNewCustomer({ ...newCustomer, birth: e.target.value })} 
                      />
                    </label>
                  <div className={styles.inputRow}>
                    <label>
                      Email:
                      <input 
                        type="text" 
                        value={newCustomer.email} 
                        onChange={(e) => setNewCustomer({ ...newCustomer, email: (e.target.value) })} 
                      />
                    </label>
                    <label> 
                      Địa chỉ:
                      <input 
                        type="text" 
                        value={newCustomer.address} 
                        onChange={(e) => setNewCustomer({ ...newCustomer, address: (e.target.value) })} 
                      />
                    </label>
                  </div>
                  <div className={styles.modalActions}>
                    <button onClick={handleAddCustomer}>Thêm</button>
                    <button onClick={() => setIsAddModalOpen(false)}>Hủy</button>
                  </div>
                </div>
              </div>
            )}
      
            {isEditModalOpen && customerToEdit && (
              <div className={styles.modal}>
                <div className={styles.modalOverlay} />
                <div className={styles.modalContent}>
                  <button className={styles.closeBtn} onClick={() => setIsEditModalOpen(false)}>&times;</button>
                  <h2>Chỉnh sửa sản phẩm</h2>
                  
                  <label>
                    Mã đơn hàng:
                    <input 
                      type="text" 
                      value={customerToEdit.id} 
                      onChange={(e) => setCustomerToEdit({ ...customerToEdit, id: e.target.value })}
                    />
                  </label>                              
                  <label>
                    Khách hàng:
                    <input 
                      type="text" 
                      value={newCustomer.nameCustomer} 
                      onChange={(e) => setCustomerToEdit({ ...customerToEdit, nameCustomer: e.target.value })} 
                    />
                  </label>
                    <label>
                      Năm sinh:
                      <input 
                        type="text" 
                        value={customerToEdit.birth} 
                        onChange={(e) => setCustomerToEdit({ ...customerToEdit, birth: e.target.value })} 
                      />
                    </label>
                  <div className={styles.inputRow}>
                    <label>
                      Email:
                      <input 
                        type="text" 
                        value={customerToEdit.email} 
                        onChange={(e) => setCustomerToEdit({ ...customerToEdit, email: (e.target.value) })} 
                      />
                    </label>
                    <label> 
                      Địa chỉ:
                      <input 
                        type="text" 
                        value={customerToEdit.address} 
                        onChange={(e) => setCustomerToEdit({ ...customerToEdit, address: (e.target.value) })} 
                      />
                    </label>
                  </div>
                  <div className={styles.modalActions}>
                    <button onClick={handleUpdateCustomer}>Lưu thay đổi</button>
                    <button onClick={() => setIsEditModalOpen(false)}>Hủy</button>
                  </div>
                </div>
              </div>
            )}

      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>
                <input 
                  type="checkbox" 
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCustomers(customers.map(customer => customer.id));
                    } else {
                      setSelectedCustomers([]);
                    }
                  }}
                  checked={selectedCustomers.length === customers.length && customers.length > 0}
                />
              </th>
              <th>MÃ KHÁCH HÀNG</th>
              <th>KHÁCH HÀNG</th>
              <th>NĂM SINH</th>
              <th>EMAIL</th>
              <th>ĐỊA CHỈ</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map(customer => (
              <tr key={customer.id}>
                <td>
                  <input 
                    type="checkbox" 
                    onChange={() => handleCheckboxChange(customer.id)}
                    checked={selectedCustomers.includes(customer.id)}
                  />
                </td>
                <td>{customer.id}</td>
                <td>{customer.nameCustomer}</td>
                <td>{customer.birth}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
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

export default CustomerManagement;
