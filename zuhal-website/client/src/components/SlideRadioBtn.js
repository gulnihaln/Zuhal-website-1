export default function SlideRadioBtn({ setSlideIndex, images, slideIndex }) {
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
          checked={slideIndex === index}
          onClick={() => handleRadioClick(index)}
        ></input>
      ))}
    </>
  );
}
