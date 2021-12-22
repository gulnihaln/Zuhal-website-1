import Slider from "./Slider"

export default function EveningHairAndMakeup() {
  const images = [
    { src: "https://via.placeholder.com/1440x400.png" },
    { src: "https://via.placeholder.com/1400x400.png" },
    { src: "https://via.placeholder.com/1410x400.png" }
  ];

  return (
    <>
      <Slider images={images} />
      <section>
        <img src="https://via.placeholder.com/650x350.png" alt=""></img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ratione totam laudantium ducimus quos praesentium veniam ipsam harum nam minima sit voluptatem nihil, doloremque id aperiam tempore quae quis consequatur iusto. Inventore aperiam, minima nobis quidem fugit odio delectus totam?
        </p>
      </section>
      {/* <FAQ />  */}
    </>
  );
}
