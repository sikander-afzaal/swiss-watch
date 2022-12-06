import "./styles/Hero.css";
import Button from "../../Components/Button/Button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const Hero = () => {
  return (
    <div className="container">
      <section className="section hero-div">
        <div className="left-hero">
          <h2>
            Welcome To <span>Swiss Cryptowatch Club</span>
          </h2>
          <p>
            Every buyer is automatically member of Swiss Crypto Watch Club.
            Swiss Crypto Watch Club will offer special collections and other
            amenities to their members.
          </p>
          <Button name="JOIN DISCORD" />
        </div>
        <div className="right-hero">
          <img src="/hero.png" alt="" />
        </div>
      </section>
      <h2 className="bg-text">CRYPTOWATCH</h2>
      <div className="marquee-div">
        <div className="rotated-slide">
          <Splide
            extensions={{ AutoScroll }}
            options={{
              width: "100%",
              type: "loop",
              drag: "free",
              autoWidth: true,
              gap: "20px",
              arrows: false,
              pagination: false,
              autoScroll: {
                speed: 2,
              },
            }}
          >
            <SplideSlide>
              <p className="marquee-text">
                <div></div> Unisex Collection
              </p>
            </SplideSlide>
            <SplideSlide>
              <p className="marquee-text">
                <div></div> Swiss Collection
              </p>
            </SplideSlide>
            <SplideSlide>
              <p className="marquee-text">
                <div></div> Bespoke Collection
              </p>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Hero;
