import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Homecarousel.css";
import techData from "../../Utility/techData";
import { Button } from "@material-ui/core";

const Homecarousel = () => {
  return (
    <>
      <Carousel fade>
        {techData.homecarousels.map((mycarousel, index) => (
          <Carousel.Item key={index}>
            <img
              className="carousel_image"
              src={mycarousel.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="homecarousel_header">
                <h3>{mycarousel.title}</h3>
                <p>{mycarousel.details}</p>
              </div>
              <div className="homecarousel_btn">
                <Button className="homecarousel_btn_design">View Details</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        {/* <Carousel.Item>
          <img
            className="carousel_image"
            src="Images/homecarousel/2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel_image"
            src="Images/homecarousel/3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
};

export default Homecarousel;
