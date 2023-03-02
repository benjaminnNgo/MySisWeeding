import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../assets/img/carousel-1-my.jpg";
import carousel2 from "../assets/img/carousel-2-my.jpg";

function MainCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
