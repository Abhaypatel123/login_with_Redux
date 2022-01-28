import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Login";
import Home from "../Home";
import Profile from '../Profile';
import Appheader from "../AppHeader";


function isLoggedIn() {
  console.log('islogges',window.localStorage.getItem('auth'))
  if (localStorage.getItem('auth')) {
    return true;
  }

  return false;
}

function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({
      pathname: '/login'
    });
  }
}


const MainRouter = () => (
  <>
    <Switch>
      <Route exact path="/home" component={Home} ></Route>
      <Route  path="/login" component={Login} ></Route>
      <Route  path="/header" component={Appheader}></Route>
      <Route  path="/profile" component={Profile}  ></Route>
    </Switch>
  </>
);

export default MainRouter;
