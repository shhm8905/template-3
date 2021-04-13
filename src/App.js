import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Index from './Components/Index';
import Work from './Components/Work';
import Portfolio from './Components/Portfolio';
import Profile from './Components/Profile';
import About from './Components/About';


const App =()=> {
  
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/template-3" exact component={Index} />
          <Route path="/work" component={Work} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
};

export default App;