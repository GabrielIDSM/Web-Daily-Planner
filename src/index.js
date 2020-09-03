import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from './Login'
import { Dashboard } from './Dashboard';
import { NewEvent } from './NewEvent';
import { NewBirthday } from './NewBirthday';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/newevent" component={NewEvent} />
        <ProtectedRoute exact path="/newbirthday" component={NewBirthday} />
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();