import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import styles from './index.module.css';
import { Input, Form, Button, Alert } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { createOrder } from '../../redux/actions-creators/services/order-service';
import {
  error,
  succes,
} from '../../redux/actions-creators/actions/order-action';

const { TextArea } = Input;

const AddOrder = () => {
  const { id, order } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const user = useSelector((store) => store.user.user);
  const err = useSelector((store) => store.orders.err);
  const succ = useSelector((store) => store.orders.succes);

  useEffect(() => {
    dispatch(error([]));
    dispatch(succes([]));
  }, []);

  const onFinish = (values) => {
    dispatch(
      createOrder({
        name: values.name,
        authorName: user.nickname,
        type: order,
        image: values.image,
        description: values.description,
        authorId: user.id,
        toolId: Number(id),
      }),
    );
  };

  const onClose = (e) => {
    dispatch(error([]));
  };
  const onCloseSucces = (e) => {
    history.push(`/tool/${id}`);
  };
  return (
    <div>
      <div className={styles.container}>
        <Link to={`/tool/${id}`}>
          {' '}
          <div className={styles.close}>
            {' '}
            <CloseOutlined />
          </div>
        </Link>
        <h1>{`New ${order}`}</h1>

        <hr />

        <div>
          {err && err.length ? (
            <Alert message={err} type="error" closable onClose={onClose} />
          ) : null}
        </div>

        <div>
          {succ && succ.length ? (
            <Alert
              message={succ}
              type="success"
              closable
              onClose={onCloseSucces}
            />
          ) : null}
        </div>

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please enter a Name!',
              },
            ]}
            tooltip={`Indicate the name of the ${'order'}`}
          >
            <Input placeholder="Select name" />
          </Form.Item>

          <Form.Item
            name="image"
            label="Image"
            tooltip={{
              title: 'Paste the URL of a Web Image (There is a default Image)',
            }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            tooltip={{
              title: 'Enter Description (There is a default Description)',
            }}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" className={styles.send} htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddOrder;
