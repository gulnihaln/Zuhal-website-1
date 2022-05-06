import { bridal as bridalFaq } from "../utils/faqData";
import FaqSection from "./FaqSection";
import "./styles/Bridal.css";
import ImgTag, { bridal } from "./ImgTag";
export default function Wedding() {
	return (
		<>
			<picture className="d">
				<source
					media="(min-width:720px)"
					srcset={`${bridal["bridal7.jpg"].default}`}
				/>
				<img
					className="hero-image bridal-page-hero"
					src={`${bridal["bridal4.jpg"].default}`}
					alt="Flowers"
				/>
			</picture>
			<h2 className="bridal-title">
				Bridal Hair & Makeup to make you look and feel amazing on your big Day
			</h2>
			<section className="bridal-article-container">
				<p>
					Congratulations on planning your wedding day! This is one of the most
					important days of your life so your hair and makeup should be planned
					without any compromise. You need an experienced Artist who gets to
					know you, your personality and your style. Someone who will care to
					bring the best in your look and makeup to make you look and feel
					stunning.
				</p>
				<article className="bridal-article">
					<ImgTag category="bridal" imgLink="bridal1.jpg" alt="bridal1" />
					<ImgTag category="bridal" imgLink="bridal2.jpg" alt="bridal2" />
				</article>
				<article className="bridal-article">
					<ImgTag category="bridal" imgLink="bridal3.jpg" alt="bridal3" />
				</article>
				<p>
					Zuhal’s bridal hair and makeup services will help you feel confident
					and beautiful through out your wedding day so you can look back at
					your photos and remember how amazing you felt.
				</p>
			</section>
			<section className="faq-section">
				<article>
					<h2>
						<span>WEDDING MAKEUP</span> FAQ
					</h2>
					<p className="faq-section-paragraph">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sed
						ipsam aspernatur minus eveniet, distinctio culpa pariatur quae
						doloremque sapiente.
					</p>
				</article>
				<ul>
					{bridalFaq.map((question) => (
						<FaqSection question={question} />
					))}
				</ul>
			</section>
		</>
	);
}
