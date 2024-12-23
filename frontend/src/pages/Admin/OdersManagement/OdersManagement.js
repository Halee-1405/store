import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, removeOrder, createOrder, updateOrder } from '../../../redux/orderSlice';
import styles from './OdersManagement.module.css';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";

const OrderManagement = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders); 
  const [selectedOrders, setSelectedOrders] = useState([]); // Trạng thái lưu trữ các đơn hàng đã chọn
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [orderToEdit, setOrderToEdit] = useState(null);
  const keyword = useSelector(state => state.search.keyword);
  
  // Lọc sản phẩm theo từ khóa
  const filteredOrders = orders.filter(order =>
    (order.customerName.toLowerCase().includes(keyword.toLowerCase())) || 
    (order.id.toLowerCase().includes(keyword.toLowerCase()))// Tìm kiếm theo tên sản phẩm
  );


// Phân trang
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 7;
// Hàm để tính số trang
const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
// Phân trang sản phẩm
const paginatedOders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
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


  const handleEditOrder = (order) => {
    setOrderToEdit(order);  // Lưu thông tin sản phẩm cần chỉnh sửa vào trạng thái
    setIsEditModalOpen(true);   // Mở modal chỉnh sửa
  };
  
  // Hàm lưu sản phẩm sau khi chỉnh sửa
  const handleUpdateOrder = async () => {
    if (orderToEdit) {
      await dispatch(updateOrder(orderToEdit));  // Giả sử bạn có một action updateProduct
      setIsEditModalOpen(false);
      setOrderToEdit(null);
    }
  };
  
  const [newOrder, setNewOrder] = useState({
    id: '',
    orderTime: '',
    customerName: '',
    phone: '',
    status: '',
  });

  const handleAddOrder = async () => {
    await dispatch(createOrder(newOrder));
    setIsAddModalOpen(false); // Đóng modal sau khi thêm sản phẩm
    setNewOrder({ id: '', orderTime: '', customerName: '', phone: '', status: '', }); // Reset form
  };


  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeOrder(id));
  };

  const handleCheckboxChange = (id) => {
    setSelectedOrders(prevSelectedOrders => 
      prevSelectedOrders.includes(id) 
        ? prevSelectedOrders.filter(orderId => orderId !== id) 
        : [...prevSelectedOrders, id]
    );
  };

  return (
    <div className={styles.container} style={{ marginTop: '70px', marginLeft: '270px', padding: '20px' }}>
      <div className={styles.title}>
        <h1>Quản Lý Đơn Hàng</h1>
        <button className={styles.addBtn} onClick={() => setIsAddModalOpen(true)}>Thêm đơn hàng</button>
      </div>

              {/* Form thêm đơn hàng */}
              {isAddModalOpen && (
              <div className={styles.modal}>
                <div className={styles.modalOverlay} />
                <div className={styles.modalContent}>
                <button className={styles.closeBtn} onClick={() => setIsAddModalOpen(false)}>&times;</button>
                  <h2>Thêm đơn hàng</h2>
                  <label>
                    Mã đơn hàng:
                    <input 
                      type="text" 
                      value={newOrder.id} 
                      onChange={(e) => setNewOrder({ ...newOrder, id: e.target.value })} 
                    />
                  </label>
                  <label>
                    Thời gian đặt hàng:
                    <input 
                      type="text" 
                      value={newOrder.orderTime} 
                      onChange={(e) => setNewOrder({ ...newOrder, orderTime: e.target.value })} 
                    />
                  </label>
                    <label>
                      Khách hàng:
                      <input 
                        type="text" 
                        value={newOrder.customerName} 
                        onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })} 
                      />
                    </label>
                  <div className={styles.inputRow}>
                    <label>
                      Số điện thoại:
                      <input 
                        type="text" 
                        value={newOrder.phone} 
                        onChange={(e) => setNewOrder({ ...newOrder, phone: (e.target.value) })} 
                      />
                    </label>
                    <label> 
                      Trạng thái:
                      <input 
                        type="text" 
                        value={newOrder.status} 
                        onChange={(e) => setNewOrder({ ...newOrder, status: (e.target.value) })} 
                      />
                    </label>
                  </div>
                  <div className={styles.modalActions}>
                    <button onClick={handleAddOrder}>Thêm</button>
                    <button onClick={() => setIsAddModalOpen(false)}>Hủy</button>
                  </div>
                </div>
              </div>
            )}
      
            {isEditModalOpen && orderToEdit && (
              <div className={styles.modal}>
                <div className={styles.modalOverlay} />
                <div className={styles.modalContent}>
                  <button className={styles.closeBtn} onClick={() => setIsEditModalOpen(false)}>&times;</button>
                  <h2>Chỉnh sửa sản phẩm</h2>
                  
                  <label>
                    Mã đơn hàng:
                    <input 
                      type="text" 
                      value={orderToEdit.id} 
                      onChange={(e) => setOrderToEdit({ ...orderToEdit, id: e.target.value })}
                    />
                  </label>                              
                  <label>
                    Thời gian đặt hàng:
                    <input 
                      type="text" 
                      value={newOrder.orderTime} 
                      onChange={(e) => setOrderToEdit({ ...orderToEdit, orderTime: e.target.value })} 
                    />
                  </label>
                    <label>
                      Khách hàng:
                      <input 
                        type="text" 
                        value={orderToEdit.customerName} 
                        onChange={(e) => setOrderToEdit({ ...orderToEdit, customerName: e.target.value })} 
                      />
                    </label>
                  <div className={styles.inputRow}>
                    <label>
                      Số điện thoại:
                      <input 
                        type="text" 
                        value={orderToEdit.phone} 
                        onChange={(e) => setOrderToEdit({ ...orderToEdit, phone: (e.target.value) })} 
                      />
                    </label>
                    <label> 
                      Trạng thái:
                      <input 
                        type="text" 
                        value={orderToEdit.status} 
                        onChange={(e) => setOrderToEdit({ ...orderToEdit, status: (e.target.value) })} 
                      />
                    </label>
                  </div>
                  <div className={styles.modalActions}>
                    <button onClick={handleUpdateOrder}>Lưu thay đổi</button>
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
                  onChange={() => {
                    if (selectedOrders.length === orders.length) {
                      setSelectedOrders([]); // Bỏ chọn tất cả nếu đã chọn hết
                    } else {
                      setSelectedOrders(orders.map(order => order.id)); // Chọn tất cả
                    }
                  }} 
                  checked={selectedOrders.length === orders.length} 
                />
              </th>
              <th>MÃ ĐƠN HÀNG</th>
              <th>THỜI GIAN ĐẶT HÀNG</th>
              <th>KHÁCH HÀNG</th>
              <th>SỐ ĐIỆN THOẠI</th>
              <th>TRẠNG THÁI</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOders.map(order => (
              <tr key={order.id}>
                <td>
                  <input 
                    type="checkbox" 
                    checked={selectedOrders.includes(order.id)} 
                    onChange={() => handleCheckboxChange(order.id)} 
                  />
                </td>
                <td>{order.id}</td>
                <td>{order.orderTime}</td>
                <td>{order.customerName}</td>
                <td>{order.phone}</td>
                <td>{order.status}</td>
                <td>
                  <button className={styles.editBtn} onClick={() => handleEditOrder(order)}><CiEdit style={{ fontSize: '18px' }} /></button>
                  <button className={styles.deleteBtn} onClick={() => handleDelete(order.id)}><AiOutlineDelete style={{ fontSize: '18px' }} /></button>
                  <button className={styles.hiddenBtn}><IoEyeOutline style={{ fontSize: '18px' }} /></button>
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

export default OrderManagement; 