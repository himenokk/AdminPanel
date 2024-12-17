import React from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import  styles from '../assets/css/filters.module.css';


const Filters = () => {
    const sortMenu = (
        <Menu>
          <Menu.Item key="1">Популярные</Menu.Item>
          <Menu.Item key="2">Новинки</Menu.Item>
          <Menu.Item key="3">По рейтингу</Menu.Item>
        </Menu>
      );

    const categoryMenu = (
        <Menu>
        <Menu.Item key="1">Все категории</Menu.Item>
        <Menu.Item key="2">Фильмы</Menu.Item>
        <Menu.Item key="3">Сериалы</Menu.Item>
        </Menu>
    );
    
    const typeMenu = (
        <Menu>
          <Menu.Item key="1">Фильмы и сериалы</Menu.Item>
          <Menu.Item key="2">Только фильмы</Menu.Item>
          <Menu.Item key="3">Только сериалы</Menu.Item>
        </Menu>
      );


  return (
        <div className={styles.filters}>
          <div className={styles.filterItem}>
            <span className={styles.filterLabel}>Сортировать:</span>
            <Dropdown overlay={sortMenu} trigger={['click']}>
              <Button>
                Популярные <DownOutlined />
              </Button>
            </Dropdown>
          </div>
    
          <div className={styles.filterItem}>
            <span className={styles.filterLabel}>Категория:</span>
            <Dropdown overlay={categoryMenu} trigger={['click']}>
              <Button>
                Все категории <DownOutlined />
              </Button>
            </Dropdown>
          </div>
    
          <div className={styles.filterItem}>
            <span className={styles.filterLabel}>Тип:</span>
            <Dropdown overlay={typeMenu} trigger={['click']}>
              <Button>
                Фильмы и сериалы <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
    );
};
    
export default Filters;


// fsd структура 