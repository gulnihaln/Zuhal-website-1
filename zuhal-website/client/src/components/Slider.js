import React, { useState, useEffect } from 'react';
import SlideRadioBtn from './SlideRadioBtn';

export default function Slider (){
  const images = [
      { src: "https://via.placeholder.com/1440x400.png" },
      { src: "https://via.placeholder.com/1400x400.png" }
    ];

  const [slideIndex, setSlideIndex] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      nextSlide()
    }, 5000)
  })
  console.log(slideIndex)
  const nextSlide = () => {
    if (slideIndex !== images.length - 1) {
      setSlideIndex(slideIndex + 1)
    }else if(slideIndex === images.length - 1){
      setSlideIndex(0)
    }
  }

  return (
    <>
      <div className="container-slider">
        <img src={images[slideIndex].src}></img>   
      </div>
      <SlideRadioBtn setSlideIndex={setSlideIndex}/>
    </>
  )
}