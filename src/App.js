import logo from './logo.svg';

import Login from '../src/pages/Login';
import Home from '../src/pages/Home';
import Profile from '../src/pages/Profile';
import { Redirect, Link, Route, Switch,Router,withRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import MainRoute from './MainRoute';
import history from  './history';


function App() {
  
  return (
      <Router history={history} >
          <MainRoute />
      </Router>
  );
}

export default (App);
