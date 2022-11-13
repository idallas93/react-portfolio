import * as React from 'react'
import "./style.css";
import { Carousel } from "react-bootstrap";
import Stella1 from "../../pages/Assets/Stella1.png";
import Stella2 from "../../pages/Assets/Stella2.png";
import Stella3 from "../../pages/Assets/Stella3.png";
import Stella4 from "../../pages/Assets/Stella4.png";
import Stella5 from "../../pages/Assets/Stella5.png";
import Stella6 from "../../pages/Assets/Stella6.png";
import Stella7 from "../../pages/Assets/Stella7.png";
import Stella8 from "../../pages/Assets/Stella8.png";

function StellaCarousel() {

  return (
<Carousel>
<Carousel.Item>
    <img
      className="d-block w-100"
      src={Stella1} 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Stella in Gowanus</h3>
      <p>City pup</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Stella2} 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Puppachino</h3>
      <p>Stella's favorite treat</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Stella3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Alert</h3>
      <p>Great watch dog</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Stella4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Football</h3>
      <p>Natural talent</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Stella5}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Nap time</h3>
      <p>Only dog I've known to only sleep on her back</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Stella6}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>All I want for Christmas is you</h3>
      <p>Would've preferred a Chanukah bush tbh</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Stella7}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Big yawn!</h3>
      <p>Nap time?</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Stella8}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Snow Day</h3>
      <p>This is the last picture</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  );
};

export default StellaCarousel;
