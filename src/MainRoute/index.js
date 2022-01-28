import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import { Redirect, Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store,persistor} from '../pages/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Appheader from '../pages/AppHeader';


function MainRoute() {
  
  return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Switch>
                  <Route path="/login" component={Login}  />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/header" component={Appheader} />
              </Switch>
            </PersistGate>
        </Provider>
  );
}

export default MainRoute;
