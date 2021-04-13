import React, { Component } from 'react';
import Home from '../Home/index';
import About from '../About/index';
import Footer from '../Footer/index';
import Profile from '../Profile/index';
import Portfolio from '../Portfolio/index';
import Work from '../Work/index';
import SocialMedia from '../SocialMedia/index';
import Contact from "../Contact/index";
import Up from '../Up/Up';



class Index extends Component {

    render() {
        return (
            <>
                <Up/>
                <Home />
                <Work />
                <Portfolio />
                <Profile />
                <About />
                <Contact/>
                <SocialMedia />
                <Footer />
            </>
        );
    }
}

export default Index;