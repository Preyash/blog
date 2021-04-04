import React, { useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  let userExist = localStorage.currentUser && JSON.parse(localStorage.currentUser)
  return (
    <Switch>
      <Route exact path="/">
        {userExist ? <Redirect to="/home" /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/home" component={HomePage} />
      
      <Route component={NotFoundPage} />
    </Switch>
  );
}
