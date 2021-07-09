import React, { useState } from 'react';
import './assets/img/styles/App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Page404 from "./components/Page404";
import NotFound from "./components/NotFound";
import Request from "./components/Request";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

    const [background, setBackground] = useState('common');

    return (
          <div className="App">
            <Router>
                <div className={background}>
                    <div className="app">
                        <Nav />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/history" exact component={Request} />
                            <Route component={Page404} />
                            <Route path="*" component={NotFound} status={404} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
  );
}

export default App;
