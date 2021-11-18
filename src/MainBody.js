import React, { Component } from 'react';
import Searchbar from './mainSearchbar';
import Grid from './grid';
import './mainBody.css';
import textimg1 from './images/textimg1.png';
import textimg2 from './images/textimg2.png';
import textimg3 from './images/textimg3.png';
class MainBody extends Component {
    render() {
        return (
            <>
           <Searchbar/>
           <div className="content-part">
        <div className="under-content-part">
            <h2>Welcome to the Mercedes-Benz international<br /> website.</h2>
            <p>Exclusive reports and current films: experience a broad range of topics from the <br />fascinating world of Mercedes-Benz. To find out about offers in your location, please<br /> go to the local Mercedes-Benz website.
            </p>
            <p>This is the International website of Mercedes-Benz AG.<br /> Visitors from the U.S., please visit our U.S. website <a href="www.mbusa.com">www.mbusa.com.</a></p>
            <button>Bring me to my local website</button>
        </div>

    </div>
    <div className="three-box-list">
        <div className="under-three-box-list"><img src={textimg3} alt="im" id="textim1"/></div>
        <div className="under-three-box-list"><img src={textimg2} alt="im" id="textim2"/></div>
        <div className="under-three-box-list"><img src={textimg1} alt="im" id="textim3"/></div>
    </div>
   <Grid/>

            </>
        );
    }
}

export default MainBody;