import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import photo1 from "../images/01.png";
import photo2 from "../images/02.png";
import photo3 from "../images/03.png";
import photo4 from "../images/04.png";




function BSCarousel() {



  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            src={photo1}
            className="d-block w-100"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Browse the groups</h3>
            <p>Get tempted by group"s previous meal</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={photo2}
            className="d-block w-100"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>See the week menu</h3>
            <p>Anything delicious on there ?</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={photo3}
            className="d-block w-100"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Add your meal</h3>
            <p>Time to participate !</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={photo4}
            className="d-block w-100"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>What's cooking ?</h2>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default BSCarousel;
