import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import jeep from '../assets/jeep.jpg'
import photo from '../assets/photo.jpg'


class CarouselBox extends Component {
  render() {
    return (
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100 h-30" src={jeep} alt="jeep"/>

					<Carousel.Caption>
						<h3>Jeep</h3>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				
				<Carousel.Item>
					<img className="d-block w-100" src={photo} alt="jeep"/>

					<Carousel.Caption>
						<h3>Photo</h3>
						<p>Lorem12</p>
					</Carousel.Caption>
				</Carousel.Item>
			
			</Carousel>
    )
  }
}

export default CarouselBox;