import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import photo1 from "../images/01.PNG";
import photo2 from "../images/02.PNG";
import photo3 from "../images/03.PNG";




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
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default BSCarousel;
