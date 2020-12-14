import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import OrderCard from '../../common/components/orderCard';
import ToolInfo from '../../common/components/toolInfo';
import SimpleModal from '../../common/components/modal';
import {
  fetchAllBugOrders,
  fetchAllFeaturesOrders,
} from '../../redux/actions-creators/services/order-service';
import { toggleView } from '../../redux/actions-creators/actions/order-action';
import { Switch } from 'antd';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';

import styles from './index.module.css';

const Tool = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [visible, setVisible] = useState(false);
  const [singleBug, setSingleBug] = useState(['NO DATA']);
  const [singleFeature, setSingleFeature] = useState(['NO DATA']);
  const features = useSelector((state) => state.orders.features);
  const user = useSelector((state) => state.user.user);
  const bugs = useSelector((state) => state.orders.bugs);
  const order = useSelector((state) => state.orders.order);
  const all = useSelector((state) => state.orders.all);
  const tool = useSelector((state) =>
    state.tools.tools.filter((e) => e.id == id),
  );

  useEffect(() => {
    dispatch(fetchAllBugOrders(id));
  }, [id, order, all]);

  useEffect(() => {
    dispatch(fetchAllFeaturesOrders(id));
  }, [id, order, all]);

  const showModal = (evt) => {
    const value = evt;
    setSingleFeature(features.filter((e) => e.id === value));
    setSingleBug(bugs.filter((e) => e.id === value));

    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setSingleFeature(['NO DATA']);
    setSingleBug(['NO DATA']);
  };

  const handleToggle = () => {
    dispatch(toggleView());
  };

  return (
    <div>
      <div style={{ padding: '3%' }}>
        <div className={styles.dataContainer}>
          <div className={styles.toolContainer}>
            <ToolInfo features={features} bugs={bugs} action={showModal} />
          </div>

          <div className={styles.orderContainer}>
            <div className={styles.toggleContainer}>
              <h1>{tool.length ? tool[0].name : 'Loading...'} </h1>

              <Switch
                onClick={handleToggle}
                className={styles.toggle}
                checkedChildren={
                  <UnorderedListOutlined className={styles.toggleView} />
                }
                unCheckedChildren={
                  <AppstoreOutlined className={styles.toggleView} />
                }
                defaultChecked
              />
            </div>

            <hr style={{ height: 2, color: 'red' }} />

            <div className={styles.orderHead}>
              <h3>Features</h3>

              {user.id ? (
                <Link to={`/tool/${id}/addOrder/feature`}>
                  {' '}
                  <button className={styles.add}>New Feature +</button>
                </Link>
              ) : (
                <button className={styles.disabled}>Login to add order</button>
              )}
            </div>
            <OrderCard action={showModal} data={features} type={'feature'} />

            <hr style={{ height: 2, color: 'red' }} />
            <div className={styles.orderHead}>
              <h3>Bugs</h3>

              {user.id ? (
                <Link to={`/tool/${id}/addOrder/bug`}>
                  {' '}
                  <button className={styles.add}>New Bug +</button>
                </Link>
              ) : (
                <button className={styles.disabled}>Login to add order</button>
              )}
            </div>
            <OrderCard action={showModal} data={bugs} type={'bug'} />
          </div>
        </div>
      </div>

      <SimpleModal
        visible={visible}
        handleCancel={handleCancel}
        singleBug={singleBug}
        singleFeature={singleFeature}
      />
    </div>
  );
};

export default Tool;
