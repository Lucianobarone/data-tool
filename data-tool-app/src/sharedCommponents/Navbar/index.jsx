import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Menu } from 'antd';
import { ToolFilled } from '@ant-design/icons';
import { logoutUser } from '../../redux/actions-creators/services/auth-services';

import styles from './index.module.css';
import logo from '../../assets/icons/logoMeli.png';

const Nav = ({ tools }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.user.user.nickname);

  const [current, setCurrent] = useState('mail');

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push('/home');
  };

  const handleClick = (e) => {
    setCurrent({ current: e.key });
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className={styles.container}
    >
      <Link to="/home">
        <img src={logo} alt="Meli" width={'120vw'}></img>
      </Link>

      {tools
        ? tools.map((tool) => (
            <Menu.Item key={tool.id} icon={<ToolFilled />}>
              <Link to={`/tool/${tool.id}`}>{tool.name}</Link>
            </Menu.Item>
          ))
        : null}

      {user ? (
        <button className={styles.logout} onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link to="/user/login">
          <button className={styles.logout}>Login</button>
        </Link>
      )}
    </Menu>
  );
};

export default Nav;
