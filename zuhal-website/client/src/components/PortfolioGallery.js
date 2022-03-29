import { useEffect, useRef } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import imagesData from "../utils/imagesData";

export default function PortfolioGallery({ category, setCategory }) {
  const ref = useRef();
  const categoryImages = imagesData.filter((img) => img.category === category);
  const columnsCountBreakPoints = { 350: 1, 750: 2, 1000: 3 };
  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="portfolio-gallery">
      <header ref={ref}>
        <p>{category} Gallery</p>
        <button onClick={() => setCategory(null)}>x</button>
      </header>
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry gutter={20}>
          {categoryImages.map((image) => (
            <img
              key={`${image.title} - ${image.id}`}
              style={{ width: "100%" }}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
