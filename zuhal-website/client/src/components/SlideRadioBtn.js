<<<<<<< HEAD
import { useState } from "react";

export default function SlideRadioBtn({ setSlideIndex, images }) {
=======
export default function SlideRadioBtn({ setSlideIndex, images, slideIndex }) {
>>>>>>> 2bb99fe352b49678a1cd3eb769ee5335fde9d4f4
  const handleRadioClick = (value) => {
    setSlideIndex(+value);
  };

  return (
    <>
      {images.map((image, index) => (
        <input
          key={index}
          type="radio"
          name="react-radio-btn"
          value={index}
<<<<<<< HEAD
=======
          checked={slideIndex === index}
>>>>>>> 2bb99fe352b49678a1cd3eb769ee5335fde9d4f4
          onClick={() => handleRadioClick(index)}
        ></input>
      ))}
    </>
  );
}
