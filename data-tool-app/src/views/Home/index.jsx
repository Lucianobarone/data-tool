import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import styles from './index.module.css';

const Home = () => {
  const user = useSelector((state) => state.user.user.nickname);

  return (
    <div>
      <div className={styles.container}>
        <h1>Bienvenido a Data Tool</h1>
        <h3>
          <strong>
            Por favor inicie sesion y luego seleccione una herramienta{' '}
          </strong>{' '}
        </h3>
        <h4>
          Podra agregar nuevos Features y Bugs para tener un control mas amplio
          de cada herramienta en uso.
        </h4>

        {user ? (
          <h2> Hola {user}!</h2>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/user/login">
              <Button type="primary" className={styles.login}>
                Iniciar sesion
              </Button>{' '}
            </Link>

            <Link to="/user/register">
              <button className={styles.register}>Registrarse</button>{' '}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
