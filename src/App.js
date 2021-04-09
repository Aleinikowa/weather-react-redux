import React from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Clock';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Router>
            <div className="app">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
