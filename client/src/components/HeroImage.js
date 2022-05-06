import React from "react";
import ImgTag from "./ImgTag";
import "./styles/HeroImage.css";

export default function HeroImage({ category, imgLink, alt, className }) {
	return (
		<section className="hero-image-container">
			<ImgTag
				category={category}
				imgLink={imgLink}
				alt={alt}
				className={`hero-image ${className}`}
			/>
		</section>
	);
}
