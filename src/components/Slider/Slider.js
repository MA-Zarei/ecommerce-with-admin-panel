import React from "react";
import "./Slider.css";
import IMG1_1 from "../../Photos/Slider/1-1.png";
import IMG1_2 from "../../Photos/Slider/1-2.png";
import Arrow_Icon from "../../Photos/Icons/arrow.png";

export default function Slider() {
  return (
    <div className="slider">
      <div className="slider-picture">
        <img src={IMG1_1} alt="slider-main-photo" />
      </div>
      <div className="slider-content">
        <div>
          <p className="title">Lorem ipsum dolor sit amet</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut
          </p>
        </div>
        <div className="banner-product-component">
          <div className="pc-container">
            <div className="f-line">
              <p className="pc-title">title</p>
              <span className="arrow-icon">
                <img src={Arrow_Icon} alt="arrow-icon" />
              </span>
            </div>
            <p className="pc-short-desc">short desc</p>
            <div className="pc-img">
              <img src={IMG1_2} alt="pc-img" />
            </div>
          </div>
          <div className="pc-tags">
            <span>tag1</span>
            <span>tag2</span>
            <span>tag3</span>
            <span>tag4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
