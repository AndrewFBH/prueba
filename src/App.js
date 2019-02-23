import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Characters from './components/Characters';
import Detail from './components/Detail'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>    
            <Route exact path='/characters' component={Characters} />
            <Route  path='/characters/:id'  component={Detail} /> 
            <Route path='/home' component={Home} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App