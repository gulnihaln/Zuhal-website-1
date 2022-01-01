import React, { useState, useEffect } from "react";
import SlideRadioBtn from "./SlideRadioBtn";
<<<<<<< HEAD

=======
import "./styles/Slider.css";
>>>>>>> 2bb99fe352b49678a1cd3eb769ee5335fde9d4f4
export default function Slider({ images }) {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(intervalId);
  });
<<<<<<< HEAD
  // console.log(slideIndex);
=======
  console.log(slideIndex);
>>>>>>> 2bb99fe352b49678a1cd3eb769ee5335fde9d4f4
  const nextSlide = () => {
    if (slideIndex !== images.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length - 1) {
      setSlideIndex(0);
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <section className="slider-container">
      <div
        style={{
          backgroundImage: `url(${images[slideIndex].src})`,
        }}
        className="slider-img-container"
      >
        {/* <img src={images[slideIndex].src}></img> */}
      </div>
      <div className="slider-btn-container">
        <SlideRadioBtn
          setSlideIndex={setSlideIndex}
          slideIndex={slideIndex}
          images={images}
        />
      </div>
    </section>
>>>>>>> 2bb99fe352b49678a1cd3eb769ee5335fde9d4f4
  );
}
