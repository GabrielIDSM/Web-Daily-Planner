import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;