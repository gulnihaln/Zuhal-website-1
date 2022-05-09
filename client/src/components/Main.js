import { useEffect } from "react";
import "./styles/PrimaryButton.css";
import ImgTag from "./ImgTag";
import HeroImage from "./HeroImage";
import { Link } from "react-router-dom";

export default function Main() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<HeroImage
				category="bridal"
				imgLink="bridalHero.jpeg"
				className="main-page-hero"
			/>
			<section className="section-intro">
				<article className="section-intro-article">
					<h2>Hi, Welcome to Zuhal makeup artist.</h2>
					<p>
						My name is Zuhal and I create flawless makeup and hair styling with
						elegance AND FLAIR I also love creating beauty and Editorial looks
						based in Freiburg Germany. I have created hair and makeup styling
						for weddings and special occasions clients. I am obsessed with the
						wonderful and exciting world of beauty. I provide fresh, unique and
						individual makeup and hairstyling services for weddings, special
						occasions, editorials and fashion. I also offer eyebrow grooming and
						tinting with different I am glad to receiving kind and wonderful
						words from clients so I am confident that I am making them happy.
						Please feel free to get in touch, I can’t wait to hear from you
						whatever the occasion is.
					</p>
					<Link to={"/contact"}>
						<button className="button-primary">Contact With Us</button>
					</Link>
				</article>
				<ImgTag
					category="bridal"
					imgLink="bridal2.jpg"
					alt="image1"
					className="main-image-1"
				/>
			</section>
			<section className="sectionQuote">
				<p>
					I believe all women are pretty without makeup, but with the right
					makeup, they can be pretty adorable.
				</p>
				<p className="quoteAuthor">-Zuhal Makeup</p>
			</section>
			<section className="section-intro2">
				<ImgTag
					category="bridal"
					imgLink="bridal4.jpg"
					alt="image1"
					className="main-image-2"
				/>
				<p>
					My work is described as Elegance with front row style with
					sophistication. Every one of you have a unique style and the looks
					that I create are never the same and always personalised. I know that
					getting hair and makeup every time looking person is not easy thing to
					do that’s why I am always hunting for new trends, skills and trying
					new techniques.
				</p>
			</section>
		</>
	);
}
