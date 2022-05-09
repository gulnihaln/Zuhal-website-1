import "./styles/SpecialOccasions.css";
import { specialOccasion } from "../utils/faqData";
import FaqSection from "./FaqSection";
import ImgTag, { specialOccasions } from "./ImgTag";
export default function SpecialOccasions() {
	return (
		<>
			<picture className="d">
				<source
					media="(min-width:500px)"
					srcSet={`${specialOccasions["image3.jpg"].default}`}
				/>
				<img
					className="hero-image special-occasions-hero"
					src={`${specialOccasions["image5.jpg"].default}`}
					alt="Flowers"
				/>
			</picture>
			<section className="occasion-middle-container">
				<ImgTag category="specialOccasions" imgLink="image4.jpg" alt="image1" />

				<p className="p-middle">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
					ratione totam laudantium ducimus quos praesentium veniam ipsam harum
					nam minima sit voluptatem nihil, doloremque id aperiam tempore quae
					quis consequatur iusto. Inventore aperiam, minima nobis quidem fugit
					odio delectus totam?
				</p>
			</section>
			<section className="faq-section">
				<article>
					<h2>
						<span>SPECIAL OCCASION</span> FAQ
					</h2>
					<p className="faq-section-paragraph">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sed
						ipsam aspernatur minus eveniet, distinctio culpa pariatur quae
						doloremque sapiente.
					</p>
				</article>
				<ul>
					{specialOccasion.map((question) => (
						<FaqSection question={question} />
					))}
				</ul>
			</section>
		</>
	);
}
