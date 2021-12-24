import React, { useState } from "react";
import GalleryCard from "./GalleryCard";
import { images } from "./imagesData";

export default function Portfolio() {
  const [active, setActive] = useState("Bridal");

  console.log(images);
  return (
    <>
      <section>
        <h1>PORTFOLIO </h1>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button style={{ border: "none" }} onClick={() => setActive("Bridal")}>
          Bridal Gallery
        </button>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button
          style={{ border: "none" }}
          onClick={() => setActive("Beauty and Editorial")}
        >
          Beauty/Editorial Gallery
        </button>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button
          style={{ border: "none" }}
          onClick={() => setActive("Occations")}
        >
          Occasions Gallery
        </button>
        <img src="https://via.placeholder.com/640x332.png" alt="" />
        <button
          style={{ border: "none" }}
          onClick={() => setActive("Commercial")}
        >
          Commercial Gallery
        </button>
      </section>
      <section className="gallery-section">
        {active === "Bridal" && <GalleryCard images={images} cardIndex={0} />}
        {active === "Beauty and Editorial" && (
          <GalleryCard images={images} cardIndex={1} />
        )}
        {active === "Occations" && (
          <GalleryCard images={images} cardIndex={2} />
        )}
        {active === "Commercial" && (
          <GalleryCard images={images} cardIndex={3} />
        )}
      </section>
    </>
  );
}
