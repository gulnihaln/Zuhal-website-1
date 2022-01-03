import React, { useState } from "react";
import GalleryCard from "./GalleryCard";
import { bridal, commercial, beauty, occasions } from "../utils/imagesData";

export default function Portfolio() {
  const [activeGalleryImages, setActiveGalleryImages] = useState([]);
  const [galleryStyle, setGalleryStyle] = useState("");

  return (
    <>
      <section>
        <h1>PORTFOLIO </h1>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button
          style={{ border: "none" }}
          onClick={() => {
            setActiveGalleryImages(bridal);
            setGalleryStyle("bridal");
          }}
        >
          Bridal Gallery
        </button>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button
          style={{ border: "none" }}
          onClick={() => {
            setActiveGalleryImages(beauty);
            setGalleryStyle("beauty");
          }}
        >
          Beauty/Editorial Gallery
        </button>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button
          style={{ border: "none" }}
          onClick={() => {
            setActiveGalleryImages(occasions);
            setGalleryStyle("occasions");
          }}
        >
          Occasions Gallery
        </button>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button
          style={{ border: "none" }}
          onClick={() => {
            setActiveGalleryImages(commercial);
            setGalleryStyle("commercial");
          }}
        >
          Commercial Gallery
        </button>
      </section>
      <section className={`${galleryStyle}-gallery gallery-main`}>
        <GalleryCard images={activeGalleryImages} />
      </section>
    </>
  );
}
