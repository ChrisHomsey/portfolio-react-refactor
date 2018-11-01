import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Nav from './components/Nav';
import About from './pages/About';
import Photography from './pages/Photography';
import Web from './pages/Web';
import Footer from './components/Footer';


class App extends Component {
  render(props) {
    return (
        <Router>
          <Route render={({location}) => (
            <div>
              <Nav/>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="page" timeout={650}>
                  <Switch key={location}>
                    <Route exact path="/" component={About} />
                    <Route exact path="/photography" component={Photography} />
                    <Route exact path="/web" component={Web} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <Footer/>
            </div>
          )} />
        </Router>
    );
  }
}

export default App;
