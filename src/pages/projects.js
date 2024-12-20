import styles from '../assets/css/projects.module.css';
import Sidebar from '../components/sidebar';
import Filters from '../components/projectsComponents/filters';
import Card from '../components/projectsComponents/card'

const Projects = () => {
    return (
      <div className={styles.container}>
        <Sidebar />
        
        <div className = {styles.project}>
          <div className= {styles.project_header}>

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

            <div className= {styles.project_header_bot}>
              <Filters />
              <Card />
             
            </div>

          </div>
        </div>
      </div>
      );
};


export default Projects;