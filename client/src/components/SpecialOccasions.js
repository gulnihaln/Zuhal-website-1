import "./styles/SpecialOccasions.css";
import { specialOccasion } from "../utils/faqData";
import FaqSection from "./FaqSection";
import ImgTag, { specialOccasions } from "./ImgTag";
import { nanoid } from "nanoid";
export default function SpecialOccasions() {
	return (
		<>
			<picture className="d">
				<source
					media="(min-width:500px)"
					srcSet={`${specialOccasions["image7.jpg"].default}`}
				/>
				<img
					className="hero-image special-occasions-hero"
					src={`${specialOccasions["image11.jpeg"].default}`}
					alt="Flowers"
				/>
			</picture>
			<section className="sectionQuote">
				<p>Do not surround yourself with negativity, but rather with makeup.</p>
				<p className="quoteAuthor">-Zuhal Makeup</p>
			</section>
			<section className="occasion-middle-container">
				<ImgTag
					category="specialOccasions"
					imgLink="image8.jpg"
					alt="image1"
					className="special-occasion-image-1"
				/>
				<article className="special-occasion-intro-article">
					<h2>Be Special...</h2>
					<p className="p-middle">
						Whether it is for a special occasion such as a wedding or festival,
						or simply because you <span>deserve it </span> , we can present you
						in a <span> unique way</span> to stand out from the crowd.
					</p>
				</article>
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
						<FaqSection key={nanoid(5)} question={question} />
					))}
				</ul>
			</section>
		</>
	);
}
