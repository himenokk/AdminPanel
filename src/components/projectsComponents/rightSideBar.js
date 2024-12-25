import watch from '../../assets/images/watch.svg'
import card from '../../assets/images/card.svg'
import tape from '../../assets/images/tape.svg'
import sidebar from '../../assets/images/sidebar.png'

import styles from './rightSideBar.module.css'

const RightSideBar = () => {
    return (
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar_info}>
                <div className={styles.sidebar_info_item}>
                    <img src={watch}/>
                </div>
                <div className={styles.sidebar_info_item}>
                    2020 год    
                </div>
            </div>
            <div className={styles.sidebar_info}>
                <div className={styles.sidebar_info_item}>
                    <img src={card}/>
                </div>
                <div className={styles.sidebar_info_item}>
                    Телехикая, Мультсериал
                </div>
            </div>
            <div className={styles.sidebar_info}>
                <div className={styles.sidebar_info_item}>
                    <img src={tape}/>
                </div>
                <div className={styles.sidebar_info_item}>
                    2 сезона, 10 серии, 7 мин    
                </div>
            </div>
            <img className={styles.img} src={sidebar}/>
            <div className={styles.sidebar_line}></div>

            <div className={styles.sidebar_bottom}>
                        <div className={styles.sidebar_bottom_item}>
                            <div className={styles.sidebar_bottom_left}>Добавил:</div> Админ 
                        </div>
                        <div className={styles.sidebar_bottom_item}>
                            <div className={styles.sidebar_bottom_left}>Дата добавления:</div> 4.04.2021, в 21:30 
                        </div>
                        <div className={styles.sidebar_bottom_item}>
                            <div className={styles.sidebar_bottom_left}>Дата обновления:</div> 4.04.2021, в 21:30
                        </div>
            </div>  
        </div>
    )
}

export default RightSideBar;

