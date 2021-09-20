import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import ProductsList from './ProductsList';
import Cart from './Cart';
import Login from './Login';
import { useUser } from '../contexts/UserContext';
import PrivateRoute from '../components/PrivateRoute';

function Layout() {
  const { currentUser } = useUser();

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/04/login" component={Login} />
        <PrivateRoute
          isLoggedIn={!!currentUser.id}
          path="/04/cart"
          component={Cart}
        />
        <PrivateRoute
          isLoggedIn={!!currentUser.id}
          path="/04"
          component={ProductsList}
        />
      </Switch>
    </Router>
  );
}

export default Layout;
