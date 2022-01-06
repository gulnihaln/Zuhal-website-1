import ImageGallery from "react-image-gallery";
import "./styles/Slider.css";

export default function Slider({ images }) {
  const images2 = images.map((image) => {
    return {
      original: image.src || image.original,
      originalAlt: image.alt || image.originalAlt,
    };
  });
  return (
    <section className="slider-container">
      <ImageGallery
        items={images2}
        autoPlay={true}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        slideDuration={2000}
        swipingTransitionDuration={1000}
        slideInterval={5000}
        showThumbnails={false}
      />
    </section>
  );
}
