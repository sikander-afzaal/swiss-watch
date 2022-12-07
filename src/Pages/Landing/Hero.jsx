import Button from "../../Components/Button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const Hero = () => {
  const marqueeTextStyles =
    "font-bold text-[24px] xl:text-[42px] text-white flex justify-center items-center uppercase leading-[24px] xl:leading-[1] gap-5 w-full xl:gap-[50px]";
  return (
    <div className="full bg-hero">
      <section className=" section items-center   xl:items-start pt-[130px] flex-col xl:flex-row xl:gap-0 gap-[40px]  xl:pt-[120px]">
        <div className="flex items-center text-center xl:text-left gap-[10px] justify-center xl:items-start flex-col xl:gap-[30px]">
          <h2 className="font-bold text-[36px] xl:text-[64px] xl:leading-[78px] leading-[44px] text-white">
            Welcome To <span className="text-blue">Swiss Cryptowatch Club</span>
          </h2>
          <p className="text-white text-base xl:text-[22px] leading-[34px] max-w-[615px]">
            Every buyer is automatically member of Swiss Crypto Watch Club.
            Swiss Crypto Watch Club will offer special collections and other
            amenities to their members.
          </p>
          <Button classes={"mt-[30px] xl:mt-[50px]"} name="JOIN DISCORD" />
        </div>
        <div>
          <img
            className="max-w-[500px] xl:max-w-[840px] w-full object-contain"
            src="/hero.png"
            alt=""
          />
        </div>
      </section>
      <h2 className="text-white font-extrabold 2xl:text-[180px] text-[140px] opacity-[0.04] leading-[1] -mb-[20px] xl:block hidden">
        CRYPTOWATCH
      </h2>
      <div className="xl:m-0 mt-5 w-full relative ">
        <span className="absolute left-0 top-0 w-full h-full bg-blue -z-[2]"></span>
        <span className="absolute left-0 top-0 w-full h-full bg-black -z-[1] opacity-[0.18]"></span>
        <div className="w-full bg-blue overflow-hidden -rotate-[1.35deg] py-5 xl:py-[30px]">
          <Splide
            extensions={{ AutoScroll }}
            options={{
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
              <p className={marqueeTextStyles}>
                <div className="bg-white w-[15px] h-[15px] rounded-full"></div>{" "}
                Unisex Collection
              </p>
            </SplideSlide>
            <SplideSlide>
              <p className={marqueeTextStyles}>
                <div className="bg-white w-[15px] h-[15px] rounded-full"></div>{" "}
                Swiss Collection
              </p>
            </SplideSlide>
            <SplideSlide>
              <p className={marqueeTextStyles}>
                <div className="bg-white w-[15px] h-[15px] rounded-full"></div>{" "}
                Bespoke Collection
              </p>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Hero;
