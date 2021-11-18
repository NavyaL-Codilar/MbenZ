import React, { Component } from 'react';
import Side1 from './car.jpeg';
import Side2 from './carI.png';
import Side3 from './share.png';
import './sideNav.css';

class sideNav extends Component {
    render() {
        return (
            <div>
                <div class="side_nav" id="mySidenav">
                    <a href="#" id="car"><img src= {Side1} alt=""
                        style="width: 30px; height: 30px;"/>
                    </a>
                    <a href="#" id="car_settings"><img src= {Side2} alt=""
                        style="width: 30px; height: 30px;"/></a>
                    <a href="#" id="share"><img src = {Side3} alt=""
                        style="width: 30px; height: 30px;"/> </a>
                </div>
            </div>
        );
    }
}

export default sideNav;