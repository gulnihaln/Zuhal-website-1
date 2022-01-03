import "./styles/AboutMe.css";

export default function AboutMe() {
  return (
    < div id="aboutMe">
      <section className="aboutMe-section1">
        <article id=" aboutMe-section1-article">
          <h1 id=" aboutMe-section1-h">Lorem ipsum dolor sit amet.</h1>
          <p id="aboutMe-section1-p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            tempora assumenda blanditiis provident iusto vero eius culpa impedit
            error quis necessitatibus vitae doloremque omnis doloribus neque
            excepturi dicta. Asperiores, animi!
          </p>
        </article>
        <img
          src="https://via.placeholder.com/350x150"
          alt="xxx"
          // width="500"
          // height="800"
        />
      </section>
      <section className="aboutMe-section2">
        <p id="aboutMe-section2-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ad odit ut. Sit cumque dolores perspiciatis repudiandae esse molestias
          iure?
        </p>
        <button id="aboutMe-section2-button">Lorem ipsum dolor.</button>
      </section>
      <section className="aboutMe-section3">
        <h1 id="aboutMe-section3-h">Snap photos and share like never before</h1>
        <p id="aboutMe-section3-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          pariatur quod, quaerat officia fugiat accusantium, porro omnis
          laboriosam impedit necessitatibus aliquam ullam esse expedita tempora
          accusamus dicta quas asperiores? Consectetur.
        </p>
      </section>
      <section className="aboutMe-section4">
        <div className="aboutMe-section4-div">
          <img
            src="https://via.placeholder.com/350x150"
            alt="xxx"
            width="500"
            height="300"
          />
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            hic reprehenderit dolore tempore dignissimos libero ea quisquam
            adipisci officiis, exercitationem fuga, accusamus quae culpa vero
            labore itaque ullam illum atque.
          </p>
        </div>
        <div className="aboutMe-section4-div">
          <img
            src="https://via.placeholder.com/350x150"
            alt="xxx"
            width="500"
            height="300"
          />
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
