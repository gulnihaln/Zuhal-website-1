import "./styles/AboutMe.css";
import ImgTag from "./ImgTag";
import { Link } from "react-router-dom";

export default function AboutMe() {
	return (
		<div className="aboutMe">
			<section className="aboutMe-section1">
				<article className=" aboutMe-section1-article">
					<h1 className=" aboutMe-section1-h">About Me</h1>
					<p className="aboutMe-section1-subhead">
						A makeup artist who loves to create confidence in women and make
						them feel at their best.
					</p>
					<p className="aboutMe-section1-p">
						If I make a women feel amazing on their wedding day then the day has
						been a success! Each and every person is unique and has something
						beautiful about them. I believe this is my job to polish that
						uniqueness and create that flawless and radiant finish look to your
						makeup. I am not someone who likes to try new hairstyles and Makeup
						looks. My style is very elegant and clean I would say but if someone
						wishes slightly different and edgy look, I am always up for that.
					</p>
					<p className="aboutMe-section1-p">
						Over the past 7 years I have built up valuable experience
						collaborating with many industry professionals to include
						photographers and models.
					</p>
				</article>
				<ImgTag
					className="first-image"
					category="about"
					imgLink="about1.jpeg"
					alt="about me"
				/>
			</section>
			<section className="aboutMe-section2">
				<p className="aboutMe-section2-p">
					Interested in seeing some of my work? Take a look at my porfolio
					below!
				</p>
				<Link className="button" to="/portfolio">
					View Portfolio
				</Link>
			</section>
			{/* <section className="aboutMe-section3">
        <h1 className="aboutMe-section3-h">
          Snap photos and share like never before
        </h1>
        <p className="aboutMe-section3-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          pariatur quod, quaerat officia fugiat accusantium, porro omnis
          laboriosam impedit necessitatibus aliquam ullam esse expedita tempora
          accusamus dicta quas asperiores? Consectetur.
        </p>
      </section> */}
			<section className="aboutMe-section4">
				<div className="aboutMe-section4-div">
					<ImgTag
						className="second-image"
						category="about"
						imgLink="about2.png"
						alt="about me"
					/>
					<p>
						Zuhal is a very passionate and professional Makeup artist processing
						an open mind and enthusiastic nature. Having gained extensive
						knowledge in all aspects of Make-up pursuing a BA (Hons) in Media
						Makeup and Special Effects. Zuhal has worked on a freelance basics
						across various areas of the industry such as Bridal, Beauty,
						Fashion, Editorial, Theatre and special effects.
					</p>
					<p>
						One of her forte’s is Bridal Hair and Makeup and making her clients
						feel and look wonderful on their special day. whilst her extensive
						experience and calm demeanour ensures that what can be a stressful
						morning runs smoothy and the bride gets to the venue on time.
					</p>
				</div>
				{/* <div className="aboutMe-section4-div">
          {/* <img
            src="https://via.placeholder.com/350x150"
            alt="xxx"
            width="500"
            height="300"
          /> */}
				{/* </div> */}
			</section>
		</div>
	);
}
