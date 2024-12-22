import styles from './projects.module.css';
import ProjectNavbar from '../components/projectsComponents/addProjects';
import Sidebar from '../components/sidebar';
import Filters from '../components/projectsComponents/filters';
import Card from '../components/projectsComponents/card'

const Projects = () => {
    return (
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar /> 
        </div>
        
        <div className={styles.inner_container}>
          <ProjectNavbar />
        
          <Filters />
          <Card />
        </div>
      </div>
     
      );
};


export default Projects;