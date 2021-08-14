import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboards from './pages/Dashboards'

function App() {
  return (
    <Router>
      <Provider store={store}>
          <div className="App">
                <Switch>
                  <Route path="/" exact> <Redirect to="/dashboard/home" /> </Route>
                  <Route path="/dashboard/:menu"> <Dashboards /> </Route>
                </Switch>
          </div>
      </Provider>
    </Router>
  );
}

export default App;
