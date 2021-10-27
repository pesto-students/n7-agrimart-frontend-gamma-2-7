import React from 'react';
import { Carousel,Image } from 'react-bootstrap'
import Tractor from "../assests/Tractor.jpg";
import Pesticide from "../assests/Pesticides.jpg";
import Rice from "../assests/Rice.jpg";

const ProductCarousel = () => {
    return (
    <Carousel className="carousell" pause='hover'>
  <Carousel.Item>
    <Image
      src={Tractor}
      alt=""
    />
    <Carousel.Caption className="carousel-caption">
      <h2>For Rent</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image
      src={Pesticide}
      alt="First slide"
    />

    <Carousel.Caption className="carousel-caption">
      <h2>Pesticides</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image
      src={Rice}
      alt="First slide"
    />

    <Carousel.Caption className="carousel-caption">
      <h2>Basmati Rice</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default ProductCarousel;