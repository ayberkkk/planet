import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Container } from "reactstrap";
import { CSSTransition } from "react-transition-group";

const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const comments = [
    {
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "John Doe",
    },
    {
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "John Doe-2",
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      name: "John Doe-3",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="comment">
      <Container>
        <h2>
          Decision makers in business and government, as well as researchers,
          are achieving results with Planet
        </h2>
        <div className="comment-line">
          <button onClick={prevSlide} className="comment-button">
            <BsChevronLeft />
          </button>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="comment-transition"
            key={currentIndex}
          >
            <div>
              <p>{comments[currentIndex].desc}</p>
              <span>{comments[currentIndex].name}</span>
            </div>
          </CSSTransition>
          <button onClick={nextSlide} className="comment-button">
            <BsChevronRight />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Comments;
