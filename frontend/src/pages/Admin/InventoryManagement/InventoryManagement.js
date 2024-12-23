import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInventoryItems, removeInventoryItem, createInventoryItem, updateInventoryItem } from '../../../redux/inventorySlice';
import styles from './InventoryManagement.module.css';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";

const InventoryManagement = () => {
  const dispatch = useDispatch();
  const inventoryItems = useSelector(state => state.inventory.items);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [inventoryToEdit, setInventoryToEdit] = useState(null);

// Phân trang
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 7;
// Hàm để tính số trang
const totalPages = Math.ceil(inventoryItems.length / itemsPerPage);
// Phân trang sản phẩm
const paginatedInventoryItems = inventoryItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
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


  const handleEditInventoryItems = (inventory) => {
    setInventoryToEdit(inventory);  // Lưu thông tin sản phẩm cần chỉnh sửa vào trạng thái
    setIsEditModalOpen(true);   // Mở modal chỉnh sửa
  };
  
  // Hàm lưu sản phẩm sau khi chỉnh sửa
  const handleUpdateInventoryItem = async () => {
    if (inventoryToEdit) {
      await dispatch(updateInventoryItem(inventoryToEdit));  // Giả sử bạn có một action updateProduct
      setIsEditModalOpen(false);
      setInventoryToEdit(null);
    }
  };
  
  const [newInventoryItem, setNewInventoryItem] = useState({
    time: '',
    unit: '',
  });

  const handleAddInventoryItem = async () => {
    await dispatch(createInventoryItem(newInventoryItem));
    setIsAddModalOpen(false); // Đóng modal sau khi thêm sản phẩm
    setNewInventoryItem({     time: '', unit: '',}); // Reset form
  };


  useEffect(() => {
    dispatch(fetchInventoryItems());
  }, [dispatch]);

  const handleDelete = (index) => {
    dispatch(removeInventoryItem(index));
  };

  const handleCheckboxChange = (index) => {
    setSelectedItems(prevSelected => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter(itemIndex => itemIndex !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  return (
    <div className={styles.container} style={{ marginTop: '70px', marginLeft: '270px', padding: '20px' }}>
      <div className={styles.title}>
        <h1>Quản Lý Nhập Kho</h1>
        <button className={styles.addBtn} onClick={() => setIsAddModalOpen(true)}>Thêm mới</button>
      </div>

        {/* Form thêm nhập kho */}
        {isAddModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalOverlay} />
          <div className={styles.modalContent}>
          <button className={styles.closeBtn} onClick={() => setIsAddModalOpen(false)}>&times;</button>
            <h2>Thêm</h2>
            <label>
              Thời gian đặt hàng:
              <input 
                type="text" 
                value={newInventoryItem.time} 
                onChange={(e) => setNewInventoryItem({ ...newInventoryItem, time: e.target.value })} 
              />
            </label>
              <label>
                Đơn vị nhập:
                <input 
                  type="text" 
                  value={newInventoryItem.unit} 
                  onChange={(e) => setNewInventoryItem({ ...newInventoryItem, unit: e.target.value })} 
                />
              </label>

            <div className={styles.modalActions}>
              <button onClick={handleAddInventoryItem}>Thêm</button>
              <button onClick={() => setIsAddModalOpen(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && inventoryToEdit && (
        <div className={styles.modal}>
          <div className={styles.modalOverlay} />
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={() => setIsEditModalOpen(false)}>&times;</button>
            <h2>Chỉnh sửa sản phẩm</h2>
            
            <label>
              Thời gian đặt hàng:
              <input 
                type="text" 
                value={inventoryToEdit.id} 
                onChange={(e) => setInventoryToEdit({ ...inventoryToEdit, id: e.target.value })}
              />
            </label>                              
            <label>
                Đơn vị nhập:
                <input 
                  type="text" 
                  value={inventoryToEdit.unit} 
                  onChange={(e) => setInventoryToEdit({ ...inventoryToEdit, unit: e.target.value })} 
                />
              </label>
              
              <div className={styles.modalActions}>
                <button onClick={handleUpdateInventoryItem}>Lưu thay đổi</button>
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
                      setSelectedItems(inventoryItems.map((_, index) => index));
                    } else {
                      setSelectedItems([]);
                    }
                  }}
                  checked={selectedItems.length === inventoryItems.length && inventoryItems.length > 0}
                />
              </th>
              <th>THỜI GIAN NHẬP</th>
              <th>ĐƠN VỊ NHẬP</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            {paginatedInventoryItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <input 
                    type="checkbox" 
                    onChange={() => handleCheckboxChange(index)}
                    checked={selectedItems.includes(index)}
                  />
                </td>
                <td>{item.time}</td>
                <td>{item.unit}</td>
                <td>
                  <button className={styles.editBtn} onClick={handleEditInventoryItems}><CiEdit style={{ fontSize: '18px' }} /></button>
                  <button 
                    className={styles.deleteBtn} 
                    onClick={() => handleDelete(index)}
                  >
                    <AiOutlineDelete style={{ fontSize: '18px' }} />
                  </button>
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

export default InventoryManagement;
