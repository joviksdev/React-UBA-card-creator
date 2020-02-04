import React from 'react';
import Header from './layout/Header';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardState from './context/cardState';
import Overlay from './components/Overlay';
import FlipCard from './components/FlipCard';

import HomePage from './components/pages/HomePage';

function App() {
  return (
    <CardState>
      <Router>
        <div>
          <Overlay />
          <FlipCard />
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/About' component={About} />
          </Switch>
        </div>
      </Router>
    </CardState>
  );
}

export default App;
