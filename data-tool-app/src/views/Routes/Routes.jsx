import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Home';
import Register from '../Register';
import Login from '../Login';
import Tool from '../Tool';
import AddOrder from '../addOrder';
import Nav from '../../sharedCommponents/Navbar';
import { check } from '../../redux/actions-creators/services/auth-services';
import { fetchAllTools } from '../../redux/actions-creators/services/tool-services';

export const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(check());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllTools());
  }, [dispatch]);

  const tools = useSelector((state) => state.tools.tools);

  return (
    <div style={{ backgroundColor: '#F5EFE6' }}>
      <Nav tools={tools} />

      <Switch>
        <div style={{ paddingTop: 50 }}>
          <Route exact path="/home" component={Home} />
          <Route exact path="/user/register" component={Register} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/tool/:id" component={Tool} />
          <Route exact path="/tool/:id/addOrder/:order" component={AddOrder} />
          <Redirect from="/" to="/home" />
        </div>
      </Switch>
    </div>
  );
};
