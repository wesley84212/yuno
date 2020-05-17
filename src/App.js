import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Indexpage from './pages/Indexpage'

function App() {
  return (
    <div class="container">
      <Router>
        <Switch>
          <Route path="/shop">
          </Route>
          <Route path="/about">
          </Route>
          <Route path="/">
            <Indexpage></Indexpage>
          </Route>
        </Switch>
      </Router>

    </div>

  );
}

export default App;
