import { useState } from "react"

export default function SlideRadioBtn({ setSlideIndex, images }) {
  
  const handleRadioClick = (value) => {
      setSlideIndex(+value)
    };

  return (
    <>
        {images.map((image, index) => 
            <input
              key={index}
              type="radio"
              name="react-radio-btn"
              value={index}
              onClick={() => handleRadioClick("0")}
            ></input>

        )}
    </>
  )
}