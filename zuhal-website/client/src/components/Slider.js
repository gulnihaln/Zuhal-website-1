import React, { useState, useEffect } from "react";
import SlideRadioBtn from "./SlideRadioBtn";

export default function Slider({ images }) {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(intervalId);
  });
  // console.log(slideIndex);
  const nextSlide = () => {
    if (slideIndex !== images.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length - 1) {
      setSlideIndex(0);
    }
  };

  return (
    <>
      <div className="container-slider">
        <img src={images[slideIndex].src}></img>
      </div>
      <SlideRadioBtn
        setSlideIndex={setSlideIndex}
        slideIndex={slideIndex}
        images={images}
      />
    </>
  );
}
