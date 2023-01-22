// import Button from "../../Components/Button";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import HeadingComp from "../../Components/HeadingComp";
import Button from "../../Components/Button";

const Details = () => {
  const coin1 = useRef();
  const coin2 = useRef();
  const coin3 = useRef();
  const coin4 = useRef();
  useEffect(() => {
    gsap.fromTo(
      coin1.current,
      { x: 0 },
      { x: 50, yoyo: true, repeat: -1, duration: 3 }
    );
    gsap.fromTo(
      coin2.current,
      { x: 0 },
      { x: -50, yoyo: true, repeat: -1, duration: 3 }
    );
    gsap.fromTo(
      coin3.current,
      { x: -20 },
      { x: 20, yoyo: true, repeat: -1, duration: 3 }
    );
    gsap.fromTo(
      coin4.current,
      { x: 20 },
      { x: -20, yoyo: true, repeat: -1, duration: 3 }
    );
  }, []);

  return (
    <div className="full isolate  relative mt-[80px] xl:mt-[120px]">
      <div className="absolute rounded-full top-[45%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  left-0 w-[700px] h-[700px]"></div>
      <div className="absolute rounded-full top-[90%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  right-0 w-[700px] h-[700px]"></div>
      <div className="section flex-col gap-[80px] xl:gap-[150px]">
        <div className="flex justify-center xl:flex-row flex-col items-center gap-[50px] xl:gap-[100px] ">
          <img
            src="/usability.png"
            className="max-w-[350px] xl:block hidden sm:max-w-[500px] xl:max-w-[600px] object-contain w-full"
            alt=""
          />
          <div className="flex justify-center items-center text-center xl:text-left xl:items-start flex-col gap-[15px]">
            <HeadingComp sub="" head="Usability" />
            <img
              src="/usability.png"
              className="max-w-[350px] xl:hidden block sm:max-w-[500px] xl:max-w-[600px] object-contain w-full"
              alt=""
            />
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              Swiss Crypto Watches can be used on NFT frames, on Smart phones
              and Smart watches.
            </p>
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              They will show exact local time on the devices. (Air Drop,
              available in Q2 2023)
            </p>
            {/* <Button name="Learn More" classes="mt-5" /> */}
          </div>{" "}
        </div>
        <div className="flex   justify-center xl:flex-row flex-col-reverse items-center gap-[0px] xl:gap-[100px] ">
          <div className="flex w-full justify-center items-center text-center xl:text-left xl:items-start flex-col gap-[15px]">
            <HeadingComp sub="" head="Swiss Crypto Watch Coin (SCWC)" />
            <div className="xl:hidden flex justify-center items-center">
              <img
                src="/coin1.png"
                className="max-w-[150px] relative z-10  sm:max-w-[500px] xl:max-w-[600px] object-contain w-full"
                alt=""
                ref={coin3}
              />
              <img
                ref={coin4}
                src="/coin2.png"
                className="max-w-[150px]  sm:max-w-[500px] xl:max-w-[600px] object-contain w-full"
                alt=""
              />
            </div>
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              Swiss Crypto Watch Coin will be tradable in early 2023, followed
              by a dedicated strictly limited watch collection only payable with
              the Coin.
            </p>

            <Button name="Join Discord" classes="mt-5" />
          </div>{" "}
          <div className="w-full justify-center items-center xl:flex hidden">
            <img
              src="/coin1.png"
              className="max-w-[350px]  relative z-10 sm:max-w-[500px] xl:max-w-[300px] object-contain w-full"
              alt=""
              ref={coin1}
            />
            <img
              ref={coin2}
              src="/coin2.png"
              className="max-w-[350px]  sm:max-w-[500px] xl:max-w-[300px] object-contain w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
