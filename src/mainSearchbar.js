import React, { Component } from 'react';
import './searchbar.css';
class Searchbar extends Component {
    render() {
        return (
           <>
            <div className="middle-search-bar">
        <input type="text" placeholder="I am looking for..." />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.3 76.3" height="1.2142857142857142rem" className="brandhub-icon">
            <path
                d="M23.838 8.911c-8.243 0-14.927 6.684-14.927 14.927 0 8.132 6.795 14.927 14.927 14.927s14.927-6.795 14.927-14.927c-.001-8.243-6.795-14.927-14.927-14.927zm23.838 14.927c0 6.015-2.005 11.251-5.904 15.595l13.813 23.615c1.225 2.116 1.782 4.121 1.782 6.015 0 4.01-3.342 7.24-7.686 7.24-3.119 0-5.904-1.894-7.797-5.347L28.182 47.23c-1.225.334-2.673.445-4.344.445C10.805 47.676 0 36.871 0 23.838S10.805 0 23.838 0c12.587 0 23.838 10.582 23.838 23.838z"
                fill="currentColor"></path>
        </svg>
    </div>
           </>
        );
    }
}

export default Searchbar;