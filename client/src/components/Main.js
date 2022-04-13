import Slider from "./Slider";
import { useEffect } from "react";
import "./styles/PrimaryButton.css";
import ImgTag, { specialOccasions } from "./ImgTag";

export default function Main() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const images = [
		{ src: `${specialOccasions["image1.jpg"].default}`, alt: "image1" },
		{ src: `${specialOccasions["image2.jpg"].default}`, alt: "image2" },
		{ src: `${specialOccasions["image3.jpg"].default}`, alt: "image3" },
	];

	return (
		<>
			<Slider images={images} />
			<section className="section-intro">
				<h2>Lorem ipsum dolor sit amet.</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quis
					id consectetur, tempore iusto iure atque cumque ullam excepturi
					dolores explicabo. Non error suscipit saepe dolor, labore deleniti nam
					est?
				</p>
				<button className="button-primary">Lorem ipsum</button>
				<img src="" alt=""></img>
			</section>
			<section className="sectionQuote">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
					aliquid.
				</p>
				<p className="quoteAuthor">Lorem ipsum dolor</p>
			</section>
			<section>
				<ImgTag category="specialOccasions" imgLink="image4.jpg" alt="image1" />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, error.
				</p>
			</section>
		</>
	);
}
