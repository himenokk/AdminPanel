import  styles from './projectDetail.module.css';
import trash from '../../assets/images/Bell.svg';
import watched from '../../assets/images/watched.svg';
import favorite from '../../assets/images/favorite.svg';
import share from '../../assets/images/share.svg';


import { Breadcrumb } from "antd";


const ProjectDetail = () => {
    return (
        <div className={styles.projectDetail}>
            <Breadcrumb className={styles.Breadcrumb}
                separator=">"
                items={[
                {
                    title: 'Проекты',
                    href: '#',
                },
                {
                    title: 'Суперкөлік Самұрық',
                    
                },
                ]}
            />

            <div className={styles.projectDetail_container}>
                <div className={styles.projectDetail_header}>
                    <div className={styles.projectDetail_header_top}>
                        <div className={styles.projectDetail_header_top_left}>
                            Суперкөлік Самұрық  
                        </div>
                        <div className={styles.projectDetail_header_top_right}>
                            <button className={styles.edit_button}>Редактировать</button>
                            <button className={styles.delete_button}><img src={trash}></img></button>
                        </div>
                    </div>
                    <div className={styles.projectDetail_header_bottom}>
                        <div className={styles.projectDetail_header_bottom_item}>
                            <img src={watched}></img>
                            <div className={styles.watched_number}>10 329</div>
                        </div>
                        <div className={styles.projectDetail_header_bottom_item}>
                            <img src={favorite}></img>
                            <div className={styles.watched_number}>4</div>
                        </div>
                        <div className={styles.projectDetail_header_bottom_item}>
                            <img src={share}></img>
                            <div className={styles.watched_number}>43</div>
                        </div>
                    </div>
                </div>

                <div className={styles.video}>
                <iframe 
                    width="100%" 
                    height="100%"
                    src="https://www.youtube.com/embed/вставьте_код_видео" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
                </div>
                <div className={styles.season}>
                    <div className={styles.season_item}>
                        1 сезон
                    </div>
                    <div className={styles.season_item}>
                        2 сезон
                    </div>
                    <div className={styles.season_item}>
                        3 сезон
                    </div>
                </div>
                <div className={styles.series}>
                    <div className={styles.series_item}>
                        1 серия
                    </div>
                    <div className={styles.series_item}>
                        2 серия
                    </div>
                    <div className={styles.series_item}>
                        3 серия
                    </div>
                    <div className={styles.series_item}>
                        4 серия
                    </div>
                    <div className={styles.series_item}>
                        5 серия
                    </div>
                    <div className={styles.series_item}>
                        6 серия
                    </div>
                    <div className={styles.series_item}>
                        7 серия
                    </div>
                    <div className={styles.series_item}>
                        8 серия
                    </div>
                    <div className={styles.series_item}>
                        9 серия
                    </div>
                    <div className={styles.series_item}>
                        10 серия
                    </div>

                </div>

                <div className={styles.description}>
                    <div className={styles.description_title}>
                        Описание
                    </div>
                    <div className={styles.description_detail}>
                    Шытырман оқиғалы мультсериал Елбасының «Ұлы даланың жеті қыры» бағдарламасы аясында жүзеге асырылған. Мақалада қызғалдақтардың отаны Қазақстан екені айтылады. Ал, жоба қызғалдақтардың отаны – Алатау баурайы екенін анимация тілінде дәлелдей түседі. If you want to increase your knowledge of 3D design with Aarón, you can also take some of his other courses: Characters in Cinema 4D: from the Sketch to 3D Printing, Prototypes and Product Viewing in Cinema 4D, Compositions with Cinema 4D and OctaneRender, 3D Illustration with 4D Cinema 4D.
                    </div>

                    <div className={styles.director}>
                        <div className={styles.director_item}>
                            <div className={styles.director_left}>Режиссер:</div> Бақдәулет Әлімбеков 
                        </div>
                        <div className={styles.director_item}>
                            <div className={styles.director_left}>Продюсер:</div> Сандуғаш Кенжебаева 
                        </div>
                    </div>  
                </div>

                <div className={styles.line}></div>

                <div className={styles.screenshots}>
                    <div className={styles.screenshots_title}>
                        Скриншоты
                    </div>
                    <div className={styles.screenshots_container}>
                        <div className={styles.screenshots_item}>

                        </div>
                        <div className={styles.screenshots_item}>
                            
                        </div>
                        <div className={styles.screenshots_item}>
                            
                        </div>
                        <div className={styles.screenshots_item}>
                            
                        </div>
                        <div className={styles.screenshots_item}>
                            
                        </div>
                        <div className={styles.screenshots_item}>
                            
                        </div>
                        <div className={styles.screenshots_item}>
                            
                        </div>
                        <div className={styles.screenshots_item}>
                            
                        </div>
                    </div>
                </div>

            </div>
           
        </div>
    );
       
}


export default ProjectDetail;