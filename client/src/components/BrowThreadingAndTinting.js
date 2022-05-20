import ImgTag from "./ImgTag";
import "./styles/BrowThreadingAndTinting.css";

export default function BrowThreadingAndTinting() {
	return (
		<>
			<div className="brow-container">
				<section className="section1-brow">
					<ImgTag
						category="editorial"
						imgLink="editorial4.jpg"
						alt="editorial1"
						className="editorial1-img"
					/>
					<p className="section1-brow-p">
						Eyebrows are very important in how your whole face looks. The
						distance between your eyebrows and how they are shaped can take
						years of your age. But as it is with many things in beauty, one
						shape does not fit all. With my experience I can create that perfect
						eyebrow shape that suits your face and help you maintain it with a
						few simple DIY techniques. Faces come in different shapes and sizes,
						all beautiful in their own way.
					</p>
				</section>
				<section className="sectionQuote">
					<p>
						With my years of experience I can create the perfect shaped eyebrows
						for your beautiful face with 3 simple rules. Understanding the shape
						of your face, perfect shaped eyebrows for your face and Mapping your
						eyebrows in a way that compliments your nose and creates that
						ultimate cheekbones.
					</p>
					<p className="quoteAuthor">-Zuhal Makeup</p>
				</section>
				<section className="section2-brow">
					<p className="section2-brow-p">
						Understanding the shape of your face and what eyebrows will suit it
						is the single most important thing in creating that perfect set of
						eyebrows. For example natural-looking high, sharp arches can create
						vertical points on round-shaped faces and help create that beautiful
						look. On the other hand, elongated eyebrows look perfect on long
						faces. If you are blessed with an oval shape face there are no rules
						that apply, except the dimensions of your face. Thick eyebrows with
						heavy arch suit square faces perfectly on the other hand straight or
						rounded eyebrows will suit a heart-shaped face.
					</p>
					<ImgTag
						category="specialOccasions"
						imgLink="image3.jpg"
						alt="editorial2"
						className="editorial2-img"
					/>
				</section>
			</div>
		</>
	);
}
