import  styles from './card.module.css';
import image from '../../assets/images/Image.svg';
import watched from '../../assets/images/watched.svg';
import edit from '../../assets/images/edit.svg';
import deleteImg from '../../assets/images/delete.svg';






const Card = () =>{
    return (
        <div>
            
            <div className={styles.card}>
                <div className={styles.card_image_text}> 4 бөлім</div>
                <div className={styles.card_image} > <img src= {image}/></div>
                <div className={styles.card_title}>Айдар</div>
                <div className={styles.card_description}>Телехикая Мультфильм</div>

                <div className={styles.card_bottom}>
                    <div className={styles.card_bottom_left}>
                            <img src={watched} alt="Watched Icon" />
                            <span>15 201</span>
                    </div>
                    <div className={styles.card_bottom_right}>
                        <button>
                            <img src={edit} alt="Edit Icon" />
                        </button>
                        <button>
                            <img src={deleteImg} alt="Delete Icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;