import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Index from './Components/Index';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/template-3" exact component={Index} />
          <Route path="/template-3/Contact" component={Contact} />
        </Switch>
        
      </BrowserRouter>
    );
  }
}

export default App;