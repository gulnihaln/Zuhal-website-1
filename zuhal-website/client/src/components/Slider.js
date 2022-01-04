import React, { useState, useEffect } from "react";
import SlideRadioBtn from "./SlideRadioBtn";
import "./styles/Slider.css";

export default function Slider({ images }) {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timeoutId);
  });

  const nextSlide = () => {
    if (slideIndex !== images.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length - 1) {
      setSlideIndex(0);
    }
  };

  return (
    <section className="slider-container">
      <div
        style={{
          backgroundImage: `url(${images[slideIndex].src})`,
        }}
        className="slider-img-container"
      >
        <div className="slider-btn-container">
          <SlideRadioBtn
            setSlideIndex={setSlideIndex}
            slideIndex={slideIndex}
            images={images}
          />
        </div>
      </div>
    </section>
  );
}
