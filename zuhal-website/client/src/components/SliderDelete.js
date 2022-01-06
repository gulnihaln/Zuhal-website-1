import React from "react";
import ImageGallery from "react-image-gallery";
import "../App.css";
export default function SliderDelete() {
  const images = [
    {
      original:
        "https://i2.wp.com/zuhalmakeupartist.com/wp-content/uploads/2019/04/MG_8459dsdfddd.jpg?fit=1920%2C1362&ssl=1",
    },
    {
      original:
        "https://i0.wp.com/zuhalmakeupartist.com/wp-content/uploads/2019/04/3.jpg?fit=1920%2C2485&ssl=1",
    },
    {
      original:
        "https://i1.wp.com/zuhalmakeupartist.com/wp-content/uploads/2019/04/MG_7312ds.jpg?fit=1920%2C2707&ssl=1",
    },
  ];
  return (
    <div>
      Slider
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        showIndex={true}
        slideDuration={1000}
        swipingTransitionDuration={1000}
        slideInterval={1000}
        bulletClass="my-radio"
        showThumbnails={false}
      />
      ;
    </div>
  );
}
