
import styles from './addProjects.module.css';


const ProjectNavbar = () => {
    return (
   

          <div className= {styles.project_header_top}>
            <div className= {styles.header_left}>
              <h2>Проекты</h2>
              <p>113</p>
            </div>
            <div className= {styles.header_right}>
              <button className= {styles.add_button}>
                <div className = {styles.add_button_text}>
                  <div className={styles.add_button_text}>
                    <div className= {styles.add_button_text_left}>
                      <p id={styles.plus}>+</p>
                    </div>  
                    <div className= {styles.add_button_text_right}>
                      <p>Добавить</p>
                    </div>
                  </div>
                </div>
                </button>
            </div>
          </div>

    )
};
export default ProjectNavbar;