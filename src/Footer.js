import React, { Component } from 'react';
import FooterOne from './FooterOne';
import FooterTwo from './FooterTwo';
import FooterThree from './FooterThree';
class Footer extends Component {
    render() {
        return (
            <div>
               <FooterOne/>
               <FooterTwo/>
               <FooterThree/> 
            </div>
        );
    }
}

export default Footer;