import { useEffect, useRef } from "react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import Button from "../../Components/Button";
import HeadingComp from "../../Components/HeadingComp";

const About = () => {
  const path1 = useRef();
  const path2 = useRef();
  const path3 = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.to(img1.current, {
      motionPath: {
        path: path1.current,
        align: path1.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: "none",
      repeat: -1,
      duration: 22,
    });
    gsap.to(img2.current, {
      motionPath: {
        path: path2.current,
        align: path2.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: "none",
      duration: 26,
      repeat: -1,
    });
    gsap.to(img3.current, {
      motionPath: {
        path: path3.current,
        align: path3.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: "none",
      duration: 30,
      repeat: -1,
    });
  }, []);

  return (
    <div id="about" className="full isolate relative  mt-[80px] xl:mt-[140px]">
      <div className="absolute rounded-full -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px] right-[0%] w-[700px] h-[700px]"></div>
      <div className="xl:flex-row flex-col section gap-[30px] xl:gap-[120px]">
        <div className="w-full xl:overflow-x-visible overflow-x-hidden flex justify-center items-center relative h-auto  min-h-[450px] xl:min-h-[600px]">
          <img
            src="/logo.png"
            className="xl:h-[75px] h-[43px] xl:w-[190px] w-[108px] object-contain"
            alt=""
          />
          <img
            className="absolute z-30 xl:max-w-none max-w-[45px]"
            src="/about2.png"
            ref={img1}
            alt=""
          />
          <img
            className="absolute z-20 xl:max-w-none max-w-[63px]"
            src="/about3.png "
            ref={img2}
            alt=""
          />
          <img
            className="absolute z-10 xl:max-w-none max-w-[80px]"
            src="/about1.png"
            ref={img3}
            alt=""
          />
          {window.innerWidth > 1280 ? (
            <svg
              width="257"
              height="257"
              viewBox="0 0 257 257"
              fill="none"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={path1}
                opacity="0.24"
                d="M255.365 128.2C255.365 198.451 198.423 255.401 128.182 255.401C57.9418 255.401 1.00024 198.451 1.00024 128.2C1.00024 57.9494 57.9418 1 128.182 1C198.423 1 255.365 57.9494 255.365 128.2Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              width="149"
              className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              height="148"
              viewBox="0 0 149 148"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={path1}
                opacity="0.24"
                d="M147.066 73.9185C147.066 114.127 114.5 146.722 74.3299 146.722C34.16 146.722 1.59424 114.127 1.59424 73.9185C1.59424 33.7095 34.16 1.11523 74.3299 1.11523C114.5 1.11523 147.066 33.7095 147.066 73.9185Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          )}
          {window.innerWidth > 1280 ? (
            <svg
              width="436"
              height="438"
              viewBox="0 0 436 438"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <path
                ref={path2}
                opacity="0.24"
                d="M434.547 219C434.547 338.851 337.585 436.006 217.981 436.006C98.3765 436.006 1.41455 338.851 1.41455 219C1.41455 99.1491 98.3765 1.99414 217.981 1.99414C337.585 1.99414 434.547 99.1491 434.547 219Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              width="251"
              height="252"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 251 252"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={path2}
                opacity="0.24"
                d="M249.322 126C249.322 194.764 193.734 250.503 125.169 250.503C56.6038 250.503 1.01587 194.764 1.01587 126C1.01587 57.2361 56.6038 1.49683 125.169 1.49683C193.734 1.49683 249.322 57.2361 249.322 126Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          )}
          {window.innerWidth > 1280 ? (
            <svg
              width="581"
              height="582"
              viewBox="0 0 581 582"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <path
                ref={path3}
                opacity="0.24"
                d="M580 291C580 450.659 450.589 580.089 290.953 580.089C131.317 580.089 1.90576 450.659 1.90576 291C1.90576 131.341 131.317 1.91162 290.953 1.91162C450.589 1.91162 580 131.341 580 291Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              width="334"
              height="334"
              viewBox="0 0 334 334"
              fill="none"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={path3}
                opacity="0.24"
                d="M333 167C333 258.68 258.747 333 167.153 333C75.5588 333 1.30566 258.68 1.30566 167C1.30566 75.3199 75.5588 1 167.153 1C258.747 1 333 75.3199 333 167Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          )}
        </div>
        <div className="flex sm:text-left w-full justify-start items-center sm:items-start text-center flex-col gap-[15px]">
          <HeadingComp sub="SCWC" head="Welcome to Swiss Cryptowatch Club" />
          <p className="text-white text-base sm:text-[20px] leading-[30px]">
            Swiss Crypto Watch Coin will be tradable in early 2023, followed by
            a dedicated strictly limited watch collection only payable with the
            Coin.
          </p>
          <p className="text-white text-base sm:text-[20px] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <Button name="Learn more" classes="mt-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
