import { Link } from 'react-router-dom';
import styles from './SideBar.module.css'
import { AiOutlineProduct } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { LuWarehouse } from "react-icons/lu";
import { MdOutlineInventory2 } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineAccountBox } from "react-icons/md";
function SideBar() {
    return ( 
        <div className={styles.sidebar}>        
            <Link to='/admin'>
                <img src='/img/logoadmin.png' alt='logo' style={{width: '230px'}}/>
            </Link>

            <div className={styles.sideBarTab}>
                <Link to='/admin/products'>
                    <button>
                        <span style={{marginRight: '20px', fontSize: '20px'}}><AiOutlineProduct /></span>
                        Quản Lý Sản Phẩm
                    </button>
                </Link>
                <Link to='/admin/oders'>
                    <button>
                        <span style={{marginRight: '20px', fontSize: '20px'}}><BsCart2 /></span>
                        Quản Lý Đơn Hàng
                    </button>
                </Link>
                <Link to='/admin/inventories'>
                    <button>
                        <span style={{marginRight: '20px', fontSize: '20px'}}><LuWarehouse /></span>
                        Quản Lý Nhập Kho
                    </button>
                </Link>
                {/* <Link to='/admin'>
                    <button>
                        <span style={{marginRight: '20px', fontSize: '20px'}}><MdOutlineInventory2 /></span>
                        Quản Lý Tồn Kho
                    </button>
                </Link> */}
                <Link to='/admin/customers'>
                    <button>
                        <span style={{marginRight: '20px', fontSize: '20px'}}><HiOutlineUsers /></span>
                        Quản Lý Khách Hàng
                    </button>
                </Link>
                <Link to='/admin'>
                    <button>
                        <span style={{marginRight: '20px', fontSize: '20px'}}><MdOutlineAccountBox /></span>
                        Tài Khoản
                    </button>
                </Link>
            </div>
        </div>
        
     );
}

export default SideBar;