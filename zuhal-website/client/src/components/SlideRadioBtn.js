import { useState } from "react";

export default function SlideRadioBtn({ setSlideIndex }) {
  
  const handleRadioClick = (value) => {
      setSlideIndex(+value);
    };

  return (
    <div>
      <input
        type="radio"
        name="react-radio-btn"
        value="0"
        onClick={() => handleRadioClick("0")}
      ></input>
      <input
        type="radio"
        name="react-radio-btn"
        value="1"
        onClick={() => handleRadioClick("1")}
      ></input>
    </div>
  );
}