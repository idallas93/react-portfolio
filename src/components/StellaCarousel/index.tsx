import * as React from 'react'
import "./style.css";
import { Carousel } from "react-bootstrap";

function StellaCarousel() {

  return (
<Carousel>
<Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://i.imgur.com/rGtNC0r.png"} 
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
      src={"https://i.imgur.com/UVCXdzu.jpg"} 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Beach Day</h3>
      <p>Sandy nose</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://i.imgur.com/cYfGQjM.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Hiking</h3>
      <p>Stella needed a water break</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://i.imgur.com/zLmdpwP.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Tennis Ball</h3>
      <p>She loves fetch more than anything</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://i.imgur.com/O1WSJi3.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Another beach day</h3>
      <p>The only thing she loves more than fetch is playing fetch in the water</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://i.imgur.com/VeFjF9u.jpg"}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Nap time</h3>
      <p>What a beautiful smile</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'https://i.imgur.com/4rUUI5d.jpg'}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Stella likes to vote in local elections</h3>
      <p>And wear a surgery donut for nap time</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://i.imgur.com/WNLTqlc.png"}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Alert</h3>
      <p>I must've said treat or walk</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  );
};

export default StellaCarousel;
