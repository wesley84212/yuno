import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import './style/index.scss'
import Header from './components/Header';
import NavBar from './components/NavBar';
import Registered from './pages/Registered';
import CarouselComponents from './components/CarouselComponents';
import Aboutpage from './pages/AboutArea';

function App() {
  return (<>
    <div class="container">
      <Router>
      <Header></Header>
      <NavBar></NavBar>
        <Switch>
          <Route path="/ex-link">

          </Route>
        <Route path="/registered">
          <Registered></Registered>
          </Route>
          <Route path="/connect">
          </Route>
          <Route path="/shop">
          </Route>
          <Route path="/about">
            <Aboutpage></Aboutpage>
          </Route>
          <Route path="/">
            <CarouselComponents></CarouselComponents>
          </Route>
        </Switch>
      </Router>

    </div>

  </>);
}

export default App;
