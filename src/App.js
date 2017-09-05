import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Paths/Home'
import Music from './Paths/Music'
import Videos from './Paths/Videos'
import About from './Paths/About'
import Shop from './Paths/Shop'

class App extends Component {

  render() {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/music' component={Music}/>
            <Route path='/videos' component={Videos}/>
            <Route path='/about' component={About}/>
            <Route path='/shop' component={Shop}/>
            <Route path='/*' component={Home} />
            <Route component={Home} />
          </Switch>
        </Router>
    );
  }
}

export default App
