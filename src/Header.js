import React, { PureComponent } from 'react';
import './nav.css';
import Mercedeslogo from './logo';
class Header extends PureComponent {
    render() {
        return (
           <>
           <div className="nav-container" id="nav">
       <Mercedeslogo/>
        <div className="right-side-container">
            <div className="first-upper">
                <ul className="upper-menu">
                    <li className="sub-upper-menu">
                        <a href="#" className="logo-link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 951 1024" width="1.0714285714285714rem" height="1.00428571428571428rem" className="brandhub-icon">
                                <path
                                    d="M950.857 1024H0V0h950.857v1024zM877.714 73.143H73.143v877.714h804.571V73.143zm-336.457 665.6v-307.2H380.343v65.829h73.143v241.371h-80.457v65.829h234.057v-65.829h-65.829zM482.743 358.4c36.571 0 65.829-29.257 65.829-65.829 0-43.886-29.257-73.143-65.829-73.143s-65.829 29.257-65.829 73.143c0 36.571 29.257 65.829 65.829 65.829z"
                                    fill="currentColor"></path>
                            </svg> Provide/Privacy Statement
                        </a>
                    </li>
                    <li className="sub-upper-menu">
                        Deutsch
                    </li>
                </ul>
            </div>
            <div className="right-lower">

                <ul className="lower-menu-item">
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Vehicle</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Innovation</a></li>
                    <li><a href="#">Museum & History</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#middle-search-bar"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.3 76.3"
                                width="0.8571428571428571rem" height="1.1428571428571428rem" className="brandhub-icon">
                                <path
                                    d="M23.838 8.911c-8.243 0-14.927 6.684-14.927 14.927 0 8.132 6.795 14.927 14.927 14.927s14.927-6.795 14.927-14.927c-.001-8.243-6.795-14.927-14.927-14.927zm23.838 14.927c0 6.015-2.005 11.251-5.904 15.595l13.813 23.615c1.225 2.116 1.782 4.121 1.782 6.015 0 4.01-3.342 7.24-7.686 7.24-3.119 0-5.904-1.894-7.797-5.347L28.182 47.23c-1.225.334-2.673.445-4.344.445C10.805 47.676 0 36.871 0 23.838S10.805 0 23.838 0c12.587 0 23.838 10.582 23.838 23.838z"
                                    fill="currentColor"></path>
                            </svg></a></li>

                </ul>

            </div>
        </div>
    </div>
           </>
        );
    }
}

export default Header;