import React from 'react';
import { Carousel,Image } from 'react-bootstrap'

const ProductCarousel = () => {
    return (
    <Carousel className="carousell" pause='hover'>
  <Carousel.Item>
    <Image
      src="https://picsum.photos/500/300"
      alt="First slide"
    />
    <Carousel.Caption className="carousel-caption">
      <h2>First slide label</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image
      src="https://picsum.photos/500/300"
      alt="First slide"
    />

    <Carousel.Caption className="carousel-caption">
      <h2>Second slide label</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image
      src="https://picsum.photos/500/300"
      alt="First slide"
    />

    <Carousel.Caption className="carousel-caption">
      <h2>Third slide label</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default ProductCarousel;