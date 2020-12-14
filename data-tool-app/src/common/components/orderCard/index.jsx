import React from 'react';
import { Card } from 'antd';
import styles from './index.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrder } from '../../../redux/actions-creators/services/order-service';

const OrderCard = ({ data, action, type }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const toggle = useSelector((state) => state.orders.toggle);
  const handleAddOne = (id, valoration) => {
    dispatch(updateOrder(id, { valoration: valoration + 1 }));
  };
  console.log('USER', user);

  return (
    <div
      className={
        toggle ? styles.orderCardContainerToggle : styles.orderCardContainer
      }
    >
      {data &&
        data.map((e) => (
          <Card
            key={e.id}
            title={e.name}
            className={type === 'feature' ? styles.card : styles.cardBug}
            style={
              toggle
                ? {
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'row',
                    height: 70,
                    margin: 5,
                  }
                : null
            }
          >
            {toggle ? (
              <p className={styles.date} onClick={() => action(e.id)}>
                <strong>SEE MORE</strong>
              </p>
            ) : null}

            <p className={styles.date} onClick={() => action(e.id)}>
              {e.createdAt.substr(0, 10)}
            </p>

            <div className={styles.votesContainer}>
              <p
                onClick={() => action(e.id)}
                style={toggle ? { width: '40%' } : null}
              >
                Votes: <strong>{e.valoration}</strong>
              </p>
              {user.id ? (
                <button
                  className={styles.vote}
                  onClick={() => handleAddOne(e.id, e.valoration)}
                  style={toggle ? { width: '35%', marginLeft: '4vw' } : null}
                >
                  Vote +
                </button>
              ) : (
                <button
                  style={toggle ? { width: '35%', marginLeft: '4vw' } : null}
                  className={styles.disabled}
                >
                  Login to vote
                </button>
              )}
            </div>
          </Card>
        ))}
    </div>
  );
};

export default OrderCard;
