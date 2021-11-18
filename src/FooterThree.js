import React, { Component } from 'react';
import './footerthree.css';
class FooterThree extends Component {
    render() {
        return (
            <>
            <hr className="footer-vertical-line" />
    <div className="main-footer">
        <div className="main-footer-first-part">
            <p>This is the International website of Mercedes-Benz AG. Visitors from the U.S., please visit our U.S. website <a href="">www.mbusa.com.</a></p>
        </div>
        <div className="main-footer-second-part">
            <div className="under-second-part">
                <ul>
                    <li>
                        <a href="">Provider</a>
                    </li>
                    <li>
                        <a href="">Legal Notice</a>
                    </li>
                    <li>
                        <a href="">Cookies</a>
                    </li>
                    <li>
                        <a href="">Privacy Statement</a>
                    </li>
                    <li>
                        <a href="">Newsfeed(RSS)</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Investor Relations</a>
                    </li>
                    <li>
                        <a href="">Daimler AG</a>
                    </li>
                </ul>
            </div>
            <div className="top-button">
                <a href="#nav">Top <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 19.957" width="1.4428571428571428rem" height="1.8857142857142858rem" className="brandhub-icon"><path d="M0 19.957l.009-5.222L16.901 0 33.5 14.674l-.009 5.222L16.888 6.963z" fill="currentColor"></path></svg></a>
            </div>
        </div>
    </div>


            </>
        );
    }
}

export default FooterThree;