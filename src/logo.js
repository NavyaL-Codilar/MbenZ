import React, { PureComponent } from 'react';
import logo from './images/car-logo.jpeg';
class Mercedeslogo extends PureComponent {
    render() {
        return (
            <>
                 <div className="logo-container">
            <img className="brandhub-header__logo" src={logo} alt="logo"/>
            <span className="name">Mercedes-Benz</span>
        </div>
            </>
        );
    }
}

export default Mercedeslogo;