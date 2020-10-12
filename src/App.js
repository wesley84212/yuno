import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import './style/index.scss'
import Header from './components/Header';
import NavBar from './components/NavBar';
import Purchase from './pages/Purchase';
import Inventory from './pages/Inventory';

function App() {
  return (<>
    <div class="container">
      <Router>
        <Header></Header>
        <NavBar></NavBar>
        <Switch>
        <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/purchase">
            <Purchase></Purchase>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </Router>

    </div>

  </>);
}

export default App;
