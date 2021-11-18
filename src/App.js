import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer';
import Carousel from './carousel.js';
import Grid from './grid.js';

class App extends Component {
    render() {
        return ( 
            
            <div>
           <Header/>
           <Carousel/>
           <Grid />
           <Footer/>

            </div>
            
        );
    }
}

export default App;