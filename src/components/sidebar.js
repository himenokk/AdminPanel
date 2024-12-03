import React from 'react';
import styles from '../assets/css/sidebar.module.css';
import Dashboard from '../assets/images/Dashboard.svg';
import projects from '../assets/images/projects.svg';
import category from '../assets/images/categories.svg';
import user from '../assets/images/users.svg';
import roles from '../assets/images/roles.svg';
import genre from '../assets/images/genre.svg';
import age from '../assets/images/age.svg';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <a href="#projects">
            <img src={Dashboard} alt="Dashboard Icon" />
            Проекты
          </a>
        </li>
        <li>
          <a href="#featured-projects">
            <img src={projects} alt="Dashboard Icon" />
            Проекты на главной
            </a>

        </li>
        <li>
          <a href="#categories">
            <img src={category} alt="Dashboard Icon" />
            Категории
            </a>
        </li>
        <li>
          <a href="#users">
            <img src={user} alt="Dashboard Icon" />
            Пользователи
            </a>
        </li>
        <li>
          <a href="#roles">
            <img src={roles} alt="Dashboard Icon" />
            Роли
            </a>
        </li>
        <li>
          <a href="#genres">
            <img src={genre} alt="Dashboard Icon" />
            Жанры
            </a>
        </li>
        <li>
          <a href="#ages">
          <img src={age} alt="Dashboard Icon" />
            Возрасты
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
