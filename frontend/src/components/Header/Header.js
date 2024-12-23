// //Header.js

// import styles from './Header.module.css'
// import { IoIosSearch } from "react-icons/io";
// function Header() {
//     return ( 
//         <div className={styles.header}>
//             <div className={styles.searchBox}>
//                 <IoIosSearch />
//                 <input type='text' placeholder='Tìm kiếm'/>
//             </div>
//             <div className={styles.myAcc}>
//                 <button>
//                     <span className={styles.userImg}>
//                         <img src='/img/avtadmin.jpg' alt='account' />
//                     </span>
//                 </button>
//             </div>
//         </div>
//      );
// }

// export default Header;

import { useDispatch } from 'react-redux';
import { setKeyword } from '../../redux/searchSlice'; // Đường dẫn đúng theo cấu trúc dự án của bạn
import styles from './Header.module.css';
import { IoIosSearch } from "react-icons/io";

function Header() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setKeyword(e.target.value)); // Cập nhật keyword vào Redux
  };

  return (
    <div className={styles.header}>
      <div className={styles.searchBox}>
        <IoIosSearch />
        <input 
          type='text' 
          placeholder='Tìm kiếm' 
          onChange={handleSearch} // Lắng nghe sự thay đổi trong ô input
        />
      </div>
      <div className={styles.myAcc}>
        <button>
          <span className={styles.userImg}>
            <img src='/img/avtadmin.jpg' alt='account' />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Header;


