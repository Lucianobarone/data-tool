import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import styles from './index.module.css';
import { deleteOrder } from '../../../redux/actions-creators/services/order-service';

export default function SimpleModal({
  visible,
  handleCancel,
  singleFeature,
  singleBug,
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
    handleCancel();
  };

  const setData = (dataName) => {
    const feature = singleFeature.length > 0 ? true : false;
    const data = feature
      ? singleFeature[0][`${dataName}`]
        ? singleFeature[0][`${dataName}`]
        : 'NO DATA'
      : singleBug[0][`${dataName}`]
      ? singleBug[0][`${dataName}`]
      : 'NO DATA';
    return data;
  };

  return (
    <div>
      <Modal
        className={styles.modalContainer}
        visible={visible}
        title={setData('name')}
        onCancel={handleCancel}
        footer={false}
      >
        <span className={styles.spanRowComtainer}>
          <span className={styles.spanRow}>
            <h3 className={styles.title}>Creator:</h3>
            <p>{setData('authorName')}</p>
          </span>
          <span className={styles.spanRow}>
            <h3 className={styles.title}>Date: </h3>
            <p>{setData('createdAt').substr(0, 10)}</p>
          </span>
        </span>

        <img src={setData('image')} alt="imagen" className={styles.image} />
        <h3 className={styles.title}>Description: </h3>
        <p>{setData('description')}</p>

        <br />
        <br />

        {user.id ? (
          <button
            className={styles.remove}
            onClick={() => handleDelete(setData('id'))}
          >
            REMOVE ORDER
          </button>
        ) : (
          <button className={styles.disabled}>Login to delete</button>
        )}
      </Modal>
    </div>
  );
}
