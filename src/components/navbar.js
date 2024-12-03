
import styles from '../assets/css/navbar.module.css';
import logo from '../assets/images/logo.svg';
import { FaSearch } from 'react-icons/fa';


const Navbar = () => {
    return (
      <div className={styles.navbar}>
       
        <div className={styles.logo}>
        <a href="#"><img src={logo} className={styles.logo_img}></img></a>
        </div>
        <form  className={styles.searchForm}>
                <input className={styles.searchForm_input}
                    type="text"
                    placeholder="Поиск"
                />  
               <button className={styles.searchButton}>
                  <FaSearch className={styles.searchIcon} />
                </button>
            </form>
      </div>
    );
  };
  
  export default Navbar;
