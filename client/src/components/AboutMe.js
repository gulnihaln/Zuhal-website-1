import ImgTag from "./ImgTag";
import "./styles/AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <section className="aboutMe-section1">
        <article className=" aboutMe-section1-article">
          <h1 className=" aboutMe-section1-h">Lorem ipsum dolor sit amet.</h1>
          <p className="aboutMe-section1-p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            tempora assumenda blanditiis provident iusto vero eius culpa impedit
            error quis necessitatibus vitae doloremque omnis doloribus neque
            excepturi dicta. Asperiores, animi!
          </p>
        </article>
        <ImgTag category="editorial" imgLink="editorial7.jpg" alt="editorial7" />
       
      </section>
      <section className="aboutMe-section2">
        <p className="aboutMe-section2-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ad odit ut. Sit cumque dolores perspiciatis repudiandae esse molestias
          iure?
        </p>
        <button className="button-primary">Lorem ipsum .</button>
      </section>
      <section className="aboutMe-section3">
        <h1 className="aboutMe-section3-h">
          Snap photos and share like never before
        </h1>
        <p className="aboutMe-section3-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          pariatur quod, quaerat officia fugiat accusantium, porro omnis
          laboriosam impedit necessitatibus aliquam ullam esse expedita tempora
          accusamus dicta quas asperiores? Consectetur.
        </p>
      </section>
      <section className="aboutMe-section4">
        <div className="aboutMe-section4-div">
        <ImgTag category="editorial" imgLink="editorial8.jpg" alt="editorial8" />
         
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            hic reprehenderit dolore tempore dignissimos libero ea quisquam
            adipisci officiis, exercitationem fuga, accusamus quae culpa vero
            labore itaque ullam illum atque.
          </p>
        </div>
        <div className="aboutMe-section4-div">
        <ImgTag category="editorial" imgLink="editorial9.jpg" alt="editorial9" />
  
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            hic reprehenderit dolore tempore dignissimos libero ea quisquam
            adipisci officiis, exercitationem fuga, accusamus quae culpa vero
            labore itaque ullam illum atque.
          </p>
        </div>
      </section>
    </div>
  );
}
