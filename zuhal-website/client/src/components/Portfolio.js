import React, { useState } from "react";
import GalleryCard from "./GalleryCard";
import { bridal, commercial, beauty, occations } from "./imagesData";

export default function Portfolio() {
  const [activeGalleryImages, setActiveGalleryImages] = useState([]);

  return (
    <>
      <section>
        <h1>PORTFOLIO </h1>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button
          style={{ border: "none" }}
          onClick={() => setActiveGalleryImages(bridal)}
        >
          Bridal Gallery
        </button>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button
          style={{ border: "none" }}
          onClick={() => setActiveGalleryImages(beauty)}
        >
          Beauty/Editorial Gallery
        </button>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button
          style={{ border: "none" }}
          onClick={() => setActiveGalleryImages(occations)}
        >
          Occasions Gallery
        </button>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button
          style={{ border: "none" }}
          onClick={() => setActiveGalleryImages(commercial)}
        >
          Commercial Gallery
        </button>
      </section>
      <section className="gallery-section">
        <GalleryCard images={activeGalleryImages} />
      </section>
    </>
  );
}
