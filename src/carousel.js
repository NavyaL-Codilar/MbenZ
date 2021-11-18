import car_img1 from "./corousal1.jpeg";
import car_img2 from "./corousal2.jpeg";
import car_img3 from "./corousal3.jpeg";
import './carousel.css';
import sideNav from "./sideNav";

function Carousel() {
    return (

        <div className="carousel" >
            <div className="carousel-inner" >
                <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
                <div className="carousel-item">
                    <img src={car_img1} alt="" />
                </div>
                <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
                <div className="carousel-item">
                    <img src={car_img2} alt="" />
                </div>
                <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
                <div className="carousel-item">
                    <img src={car_img3} alt="" />
                </div>
                <label for="carousel-3" className="carousel-control prev control-1">‹</label>
                <label for="carousel-2" className="carousel-control next control-1">›</label>
                <label for="carousel-1" className="carousel-control prev control-2">‹</label>
                <label for="carousel-3" className="carousel-control next control-2">›</label>
                <label for="carousel-2" className="carousel-control prev control-3">‹</label>
                <label for="carousel-1" className="carousel-control next control-3">›</label>

            
            </div>
            <sideNav />
        </div>
        
        
    );
}
export default Carousel;