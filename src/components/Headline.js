import React from "react";
import Slider from "./Slider";

const Headline = () => {
  return (
    <div className="headline">
        <div className="bg-main">
          <div className="bg-image">
            <div className="bg-back"></div>
          </div>
          <div className="bg-content text-white z-2">
            <h3>Daily Earth Data to See Change and Make Better Decisions</h3>
            <p>
              Planet provides daily satellite data that helps businesses,
              governments, researchers, and journalists understand the physical
              world and take action.
            </p>
            <Slider />
          </div>
        </div>
    </div>
  );
};

export default Headline;
