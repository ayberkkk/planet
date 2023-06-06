import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Container } from "reactstrap";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    process.env.PUBLIC_URL +
      "https://img.freepik.com/free-photo/abstract-background-with-blue-pink-sphere_23-2148235958.jpg?size=626&ext=jpg&ga=GA1.2.1969923234.1681329547&semt=sph",
    process.env.PUBLIC_URL +
      "https://img.freepik.com/free-photo/abstract-background-with-green-yellow-sphere_23-2148236000.jpg?size=626&ext=jpg&ga=GA1.2.1969923234.1681329547&semt=sph",
    process.env.PUBLIC_URL +
      "https://img.freepik.com/free-photo/abstract-background-with-red-purple-sphere_23-2148235980.jpg?size=626&ext=jpg&ga=GA1.2.1969923234.1681329547&semt=sph",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container>
      <div className="z-3 images-div">
        <button onClick={prevSlide} className="slider-button">
          <BsChevronLeft />
        </button>
        <span className="slider-counter">
          {currentIndex + 1}/{images.length}
        </span>
        <button onClick={nextSlide} className="slider-button">
          <BsChevronRight />
        </button>
        <img
          className="img-fluid d-block"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />
      </div>
    </Container>
  );
};

export default Slider;
