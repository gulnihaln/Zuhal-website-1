export default function SlideRadioBtn({ setSlideIndex, images, slideIndex }) {
  const handleRadioClick = (value) => {
    setSlideIndex(+value);
  };

  return (
    <>
      {images.map((image, index) => (
        <div
          onClick={() => handleRadioClick(index)}
          key={index}
          className={`my-radio ${slideIndex === index ? "checked" : ""}`}
        ></div>
      ))}
    </>
  );
}
