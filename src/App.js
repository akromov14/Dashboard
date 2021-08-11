import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/HomePage';
import Dashboards from './pages/Dashboards'

function App() {
  return (
    <Router>
      <Provider store={store}>
          <div className="App">
                <Switch>
                  <Route path="/" exact><Home /></Route>
                  <Route path="/dashboard/:menu"><Dashboards /></Route>
                </Switch>
          </div>
      </Provider>
    </Router>
  );
}

export default App;
