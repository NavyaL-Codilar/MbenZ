import React, { Component } from 'react';
import './grid.css';
import imag1 from './images/car1.webp';
import imag2 from './images/car2.jpeg';
import imag3 from './images/car3.webp';
import imag4 from './images/car4.webp';
import imag5 from './images/car5.webp';
import imag6 from './images/car6.webp';
import imag7 from './images/car7.webp';
import imag8 from './images/car8.webp';
import imag9 from './images/car9.webp';
import imag10 from './images/car10.webp';
import imag11 from './images/car11.webp';
import imag12 from './images/car12.webp';
import imag13 from './images/car13.webp';
import imag14 from './images/car14.webp';
class Grid extends Component {
    render() {
        return (
            <>
            <div className="three-link-menus">
        <a href="" className="first-link-active"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 70"
                width="1.3571428571428572rem" height="1rem" className="brandhub-icon">
                <path
                    d="M61 10.9H34.7v26.3H61V10.9zm22.9 0H66.6v4.3H84v-4.3zm0 10.6H66.6v4.3H84v-4.3zm0 10.5H66.6v4.3H84V32zm0 10.6H34.7v4.3h49.2v-4.3zm-56.2 0H11.4v4.3h16.4v-4.3zm0-11H11.4v4.3h16.4v-4.3z"
                    fill="currentColor"></path>
                <path
                    d="M23.8.2v20.9H.5v35.6C.5 63.2 6.3 70 14 70h68.7c7.1 0 12.2-6.8 12.2-13.2V.2H23.8zm-18 56.5V26.3l18-.1v30.5c0 3.4-2.6 7.8-9.6 7.8-4.3.1-8.4-3.7-8.4-7.8zm76.9 7.8H25.8c.5-.1 3.3-2.4 3.3-7.8V5.8h60v51c0 4.7-2.8 7.7-6.4 7.7z"
                    fill="currentColor"></path>
            </svg>New
            <span className="underline"></span>
            </a>

        <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.264 57.368" width="1rem" height="1rem" className="brandhub-icon">
                <path
                    d="M30.188 46.117L14.704 57.368 9.58 53.692l5.904-18.157L0 24.395l2.005-6.015h19.049L26.957 0h6.35l5.903 18.38h19.049l2.005 6.015-15.484 11.14 5.904 18.045-5.124 3.788z"
                    fill="currentColor"></path>
            </svg>Popular</a>
        <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.106 30.21" width="0.7857142857142857rem"
                height="1rem" className="brandhub-icon">
                <path d="M24.106 15.052L0 30.21V0z" fill="currentColor"></path>
            </svg>Videos</a>
    </div>
    <div className="image-grids">
        <div className="first-image-grids">
            <div className="left-side-first-image-grid">
                <img src={imag1} alt="im" />
            </div>
            <div className="right-side-first-image-grid">
                <img src={imag2} alt="im" />
                <img src={imag3} alt="im" />
            </div>
        </div>
        <div className="second-image-grids">
            <img src={imag4} alt="im"/>
            <img src={imag5} alt="im"/>
            <img src={imag6} alt="im"/>
        </div>
        <div className="third-image-grids">
            <img src={imag7} alt="im"/>
            <img src={imag8} alt="im"/>
            <img src={imag9} alt="im"/>
        </div>
        <div className="fourth-image-grids">
            <div className="left-side-fourth-image-grid">
                <img src={imag10} alt="im"/>
            </div>
            <div className="right-side-fourth-image-grid">
                <img src={imag11} alt="im"/>
                <img src={imag12} alt="im"/>
            </div>
        </div>
        <div className="fifth-image-grids">
            <img src={imag13} alt="im"/>
            <img src={imag14} alt="im"/>
        </div>
        <div className="more-view-grid-button">
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 19.992" width="0.8571428571428571rem"
                    height="1rem" className="brandhub-icon">
                    <path d="M33.5 0v5.223L16.63 19.992 0 5.343V.12l16.63 12.908z" fill="currentColor"></path>
                </svg>Show More</a>
        </div>
    </div>
    
            </>
        );
    }
}

export default Grid;