import ImgTag from "./ImgTag";
import "./styles/BrowThreadingAndTinting.css";

export default function BrowThreadingAndTinting() {
  return (
    <>
      <div className="brow-container">
        <section className="section1-brow">
         <ImgTag category ="editorial" imgLink="editorial1.jpg" alt="editorial1" className="editorial1-img" />
          <p className="section1-brow-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            quibusdam maxime. Recusandae reiciendis suscipit libero delectus qui
            animi dolore accusantium corporis non repellat optio rerum aut
            necessitatibus dolores vel eum tenetur aliquid, praesentium sunt
            cupiditate ullam nihil. Ea ex quis illo? Reiciendis dolorum delectus
            labore culpa nulla quisquam necessitatibus pariatur.
          </p>
        </section>
        <section className="section2-brow">
          <p className="section2-brow-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            vel! Id quibusdam iure dolorum eligendi deserunt consequuntur eius
            delectus iste, inventore quidem soluta hic repellat repellendus.
            Esse quisquam necessitatibus a cumque reprehenderit, minus nihil hic
            vitae? Nihil quidem quasi ad iste, magni velit omnis veritatis
            assumenda laborum, soluta aspernatur esse!
          </p>
         <ImgTag category ="editorial" imgLink="editorial2.jpg" alt="editorial2" className="editorial2-img" />
         
        </section>
      </div>
    </>
  );
}
