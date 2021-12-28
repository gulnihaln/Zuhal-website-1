import { useEffect } from "react";

export default function LoyaltyAndGiftCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <img
          scr="https://via.placeholder.com/640x332.png"
          alt="Placeholder"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Obcaecati debitis incidunt sequi quisquam
          cum fuga rem ipsum aperiam nisi accusamus natus
          magni placeat quis eaque libero dolore ab
          dignissimos ea in, fugiat delectus.
        </p>
        <button>Click</button>
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Obcaecati debitis incidunt sequi quisquam
          cum fuga rem ipsum aperiam nisi accusamus natus
          magni placeat quis eaque libero dolore ab
          dignissimos ea in, fugiat delectus.
        </p>
        <button>Click</button>
        <img
          scr="https://via.placeholder.com/640x332.png"
          alt="Placeholder"
        />
      </section>
    </>
  );
}
