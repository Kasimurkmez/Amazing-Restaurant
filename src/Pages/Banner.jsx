import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../src/assets/home/pexels-photo-970108.webp";
import img2 from "../../src/assets/home/pexels-photo-842545.webp";
import img3 from "../../src/assets/home/pexels-photo-2741448.jpeg";
import img4 from "../../src/assets/home/pexels-photo-792026.jpeg";
import img5 from "../../src/assets/home/pexels-photo-5639496.jpeg";
import img6 from "../../src/assets/home/pexels-photo-9213911.jpeg";

function Banner() {
  return (
    <div className="w-full mx-auto text-center">
      <Carousel>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
