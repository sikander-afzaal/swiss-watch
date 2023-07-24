import Button from "../../Components/Button";
import HeadingComp from "../../Components/HeadingComp";
import gsap, { Power3 } from "gsap";
import Flip from "gsap/Flip";
import { useEffect, useRef, useState } from "react";

const Collection = () => {
  const [activeWatch, setActiveWatch] = useState(1);
  const watch1 = useRef();
  const watch2 = useRef();
  const watch3 = useRef();
  const watch4 = useRef();
  const watch5 = useRef();
  const watch6 = useRef();
  const watch7 = useRef();
  useEffect(() => {
    gsap.registerPlugin(Flip);
    const watchArray = [
      watch1.current,
      watch2.current,
      watch3.current,
      watch4.current,
      watch5.current,
      watch6.current,
      watch7.current,
    ];
    const watchArrayMob = [
      watch1.current,
      watch2.current,
      watch3.current,
      watch4.current,
      watch5.current,
      watch6.current,
      watch7.current,
    ];
    const watchState =
      window.innerWidth > 1280
        ? Flip.getState(watchArray)
        : Flip.getState(watchArrayMob);
    if (window.innerWidth > 1280) {
      //removing all the old classes --------------------
      const filteredArray__After__Old__Active__State = watchArray.filter(
        (elem) => !elem.classList.contains("activeWatch")
      );
      filteredArray__After__Old__Active__State.forEach((elem, idx) => {
        elem.classList.remove("w-[206px]");
        elem.classList.remove("h-[270px]");
        elem.classList.remove("left-[0%]");
        elem.classList.remove("left-[15%]");
        elem.classList.remove("left-[5%]");
        elem.classList.remove("-z-[20]");
        elem.classList.remove("-z-[10]");
        elem.classList.remove("-z-[30]");
        elem.classList.remove("right-[5%]");
        elem.classList.remove("right-[15%]");
        elem.classList.remove("right-[0%]");
      });

      watchArray.forEach((elem) => {
        elem.classList.remove("activeWatch");
      });

      switch (activeWatch) {
        case 1:
          watch1.current.classList.add("activeWatch");
          watch2.current.classList.add("right-[15%]");
          watch2.current.classList.add("-z-[10]");
          watch3.current.classList.add("right-[5%]");
          watch3.current.classList.add("-z-[20]");
          watch4.current.classList.add("right-[0%]");
          watch4.current.classList.add("-z-[30]");
          watch5.current.classList.add("left-[0%]");
          watch5.current.classList.add("-z-[30]");
          watch6.current.classList.add("left-[5%]");
          watch6.current.classList.add("-z-[20]");
          watch7.current.classList.add("left-[15%]");
          watch7.current.classList.add("-z-[10]");
          break;
        case 2:
          watch2.current.classList.add("activeWatch");
          watch3.current.classList.add("right-[15%]");
          watch3.current.classList.add("-z-[10]");
          watch4.current.classList.add("right-[5%]");
          watch4.current.classList.add("-z-[20]");
          watch5.current.classList.add("right-[0%]");
          watch5.current.classList.add("-z-[30]");
          watch6.current.classList.add("left-[0%]");
          watch6.current.classList.add("-z-[30]");
          watch7.current.classList.add("left-[5%]");
          watch7.current.classList.add("-z-[20]");
          watch1.current.classList.add("left-[15%]");
          watch1.current.classList.add("-z-[10]");
          break;
        case 3:
          watch3.current.classList.add("activeWatch");
          watch4.current.classList.add("right-[15%]");
          watch4.current.classList.add("-z-[10]");
          watch5.current.classList.add("right-[5%]");
          watch5.current.classList.add("-z-[20]");
          watch6.current.classList.add("right-[0%]");
          watch6.current.classList.add("-z-[30]");
          watch7.current.classList.add("left-[0%]");
          watch7.current.classList.add("-z-[30]");
          watch1.current.classList.add("left-[5%]");
          watch1.current.classList.add("-z-[20]");
          watch2.current.classList.add("left-[15%]");
          watch2.current.classList.add("-z-[10]");
          break;
        case 4:
          watch4.current.classList.add("activeWatch");
          watch5.current.classList.add("right-[15%]");
          watch5.current.classList.add("-z-[10]");
          watch6.current.classList.add("right-[5%]");
          watch6.current.classList.add("-z-[20]");
          watch7.current.classList.add("right-[0%]");
          watch7.current.classList.add("-z-[30]");
          watch1.current.classList.add("left-[0%]");
          watch1.current.classList.add("-z-[30]");
          watch2.current.classList.add("left-[5%]");
          watch2.current.classList.add("-z-[20]");
          watch3.current.classList.add("left-[15%]");
          watch3.current.classList.add("-z-[10]");
          break;
        case 5:
          watch5.current.classList.add("activeWatch");
          watch6.current.classList.add("right-[15%]");
          watch6.current.classList.add("-z-[10]");
          watch7.current.classList.add("right-[5%]");
          watch7.current.classList.add("-z-[20]");
          watch1.current.classList.add("right-[0%]");
          watch1.current.classList.add("-z-[30]");
          watch2.current.classList.add("left-[0%]");
          watch2.current.classList.add("-z-[30]");
          watch3.current.classList.add("left-[5%]");
          watch3.current.classList.add("-z-[20]");
          watch4.current.classList.add("left-[15%]");
          watch4.current.classList.add("-z-[10]");
          break;
        case 6:
          watch6.current.classList.add("activeWatch");
          watch7.current.classList.add("right-[15%]");
          watch7.current.classList.add("-z-[10]");
          watch1.current.classList.add("right-[5%]");
          watch1.current.classList.add("-z-[20]");
          watch2.current.classList.add("right-[0%]");
          watch2.current.classList.add("-z-[30]");
          watch3.current.classList.add("left-[0%]");
          watch3.current.classList.add("-z-[30]");
          watch4.current.classList.add("left-[5%]");
          watch4.current.classList.add("-z-[20]");
          watch5.current.classList.add("left-[15%]");
          watch5.current.classList.add("-z-[10]");
          break;
        case 7:
          watch7.current.classList.add("activeWatch");
          watch1.current.classList.add("right-[15%]");
          watch1.current.classList.add("-z-[10]");
          watch2.current.classList.add("right-[5%]");
          watch2.current.classList.add("-z-[20]");
          watch3.current.classList.add("right-[0%]");
          watch3.current.classList.add("-z-[30]");
          watch4.current.classList.add("left-[0%]");
          watch4.current.classList.add("-z-[30]");
          watch5.current.classList.add("left-[5%]");
          watch5.current.classList.add("-z-[20]");
          watch6.current.classList.add("left-[15%]");
          watch6.current.classList.add("-z-[10]");
          break;

          watch5.current.classList.add("activeWatch");
          watch6.current.classList.add("right-[15%]");
          watch6.current.classList.add("-z-[10]");
          watch7.current.classList.add("right-[5%]");
          watch7.current.classList.add("-z-[20]");
          watch1.current.classList.add("right-[0%]");
          watch1.current.classList.add("-z-[30]");
          watch2.current.classList.add("left-[0%]");
          watch2.current.classList.add("-z-[30]");
          watch3.current.classList.add("left-[5%]");
          watch3.current.classList.add("-z-[20]");
          watch4.current.classList.add("left-[15%]");
          watch4.current.classList.add("-z-[10]");
          break;

        default:
          break;
      }
      const filteredArray__After__New__Active__State = watchArray.filter(
        (elem) => !elem.classList.contains("activeWatch")
      );
      filteredArray__After__New__Active__State.forEach((elem, idx) => {
        elem.classList.add("w-[206px]");
        elem.classList.add("h-[270px]");
      });
    } else {
      //removing all the old classes --------------------

      watchArrayMob.forEach((elem, idx) => {
        elem.classList.remove("w-[67px]");
        elem.classList.remove("left-[0%]");
        elem.classList.remove("left-[20%]");
        elem.classList.remove("left-[10%]");
        elem.classList.remove("-z-[20]");
        elem.classList.remove("-z-[10]");
        elem.classList.remove("-z-[30]");
        elem.classList.remove("right-[10%]");
        elem.classList.remove("right-[20%]");
        elem.classList.remove("right-[0%]");
        elem.classList.remove("h-[95px]");
        elem.classList.remove("activeWatchMob");
      });
      switch (activeWatch) {
        case 1:
          watch1.current.classList.add("activeWatchMob");
          watch2.current.classList.add("right-[20%]");
          watch2.current.classList.add("-z-[10]");
          watch3.current.classList.add("right-[10%]");
          watch3.current.classList.add("-z-[20]");
          watch4.current.classList.add("right-[0%]");
          watch4.current.classList.add("-z-[30]");
          watch5.current.classList.add("left-[0%]");
          watch5.current.classList.add("-z-[30]");
          watch6.current.classList.add("left-[10%]");
          watch6.current.classList.add("-z-[20]");
          watch7.current.classList.add("left-[20%]");
          watch7.current.classList.add("-z-[10]");
          break;
        case 2:
          watch2.current.classList.add("activeWatchMob");
          watch3.current.classList.add("right-[20%]");
          watch3.current.classList.add("-z-[10]");
          watch4.current.classList.add("right-[10%]");
          watch4.current.classList.add("-z-[20]");
          watch5.current.classList.add("right-[0%]");
          watch5.current.classList.add("-z-[30]");
          watch6.current.classList.add("left-[0%]");
          watch6.current.classList.add("-z-[30]");
          watch7.current.classList.add("left-[10%]");
          watch7.current.classList.add("-z-[20]");
          watch1.current.classList.add("left-[20%]");
          watch1.current.classList.add("-z-[10]");
          break;
        case 3:
          watch3.current.classList.add("activeWatchMob");
          watch4.current.classList.add("right-[20%]");
          watch4.current.classList.add("-z-[10]");
          watch5.current.classList.add("right-[10%]");
          watch5.current.classList.add("-z-[20]");
          watch6.current.classList.add("right-[0%]");
          watch6.current.classList.add("-z-[30]");
          watch7.current.classList.add("left-[0%]");
          watch7.current.classList.add("-z-[30]");
          watch1.current.classList.add("left-[10%]");
          watch1.current.classList.add("-z-[20]");
          watch2.current.classList.add("left-[20%]");
          watch2.current.classList.add("-z-[10]");
          break;
        case 4:
          watch4.current.classList.add("activeWatchMob");
          watch5.current.classList.add("right-[20%]");
          watch5.current.classList.add("-z-[10]");
          watch6.current.classList.add("right-[10%]");
          watch6.current.classList.add("-z-[20]");
          watch7.current.classList.add("right-[0%]");
          watch7.current.classList.add("-z-[30]");
          watch1.current.classList.add("left-[0%]");
          watch1.current.classList.add("-z-[30]");
          watch2.current.classList.add("left-[10%]");
          watch2.current.classList.add("-z-[20]");
          watch3.current.classList.add("left-[20%]");
          watch3.current.classList.add("-z-[10]");
          break;
        case 5:
          watch5.current.classList.add("activeWatchMob");
          watch6.current.classList.add("right-[20%]");
          watch6.current.classList.add("-z-[10]");
          watch7.current.classList.add("right-[10%]");
          watch7.current.classList.add("-z-[20]");
          watch1.current.classList.add("right-[0%]");
          watch1.current.classList.add("-z-[30]");
          watch2.current.classList.add("left-[0%]");
          watch2.current.classList.add("-z-[30]");
          watch3.current.classList.add("left-[10%]");
          watch3.current.classList.add("-z-[20]");
          watch4.current.classList.add("left-[20%]");
          watch4.current.classList.add("-z-[10]");
          break;
        case 6:
          watch6.current.classList.add("activeWatchMob");
          watch7.current.classList.add("right-[20%]");
          watch7.current.classList.add("-z-[10]");
          watch1.current.classList.add("right-[10%]");
          watch1.current.classList.add("-z-[20]");
          watch2.current.classList.add("right-[0%]");
          watch2.current.classList.add("-z-[30]");
          watch3.current.classList.add("left-[0%]");
          watch3.current.classList.add("-z-[30]");
          watch4.current.classList.add("left-[10%]");
          watch4.current.classList.add("-z-[20]");
          watch5.current.classList.add("left-[20%]");
          watch5.current.classList.add("-z-[10]");
          break;
        case 7:
          watch7.current.classList.add("activeWatchMob");
          watch1.current.classList.add("right-[20%]");
          watch1.current.classList.add("-z-[10]");
          watch2.current.classList.add("right-[10%]");
          watch2.current.classList.add("-z-[20]");
          watch3.current.classList.add("right-[0%]");
          watch3.current.classList.add("-z-[30]");
          watch4.current.classList.add("left-[0%]");
          watch4.current.classList.add("-z-[30]");
          watch5.current.classList.add("left-[10%]");
          watch5.current.classList.add("-z-[20]");
          watch6.current.classList.add("left-[20%]");
          watch6.current.classList.add("-z-[10]");
          break;

        default:
          break;
      }
      const filteredArray__After__New__Active__State = watchArrayMob.filter(
        (elem) => !elem.classList.contains("activeWatchMob")
      );
      filteredArray__After__New__Active__State.forEach((elem, idx) => {
        elem.classList.add("w-[67px]");
        elem.classList.add("h-[95px]");
      });
    }
    Flip.from(watchState, {
      duration: 2,
      ease: Power3.easeInOut,
      absolute: true,
    });
  }, [activeWatch]);
  useEffect(() => {
    const interval = setTimeout(() => {
      //autoplay functionality --------------
      const currentNum = activeWatch;

      switch (currentNum) {
        case 1:
          setActiveWatch(2);
          break;
        case 2:
          setActiveWatch(3);
          break;
        case 3:
          setActiveWatch(4);
          break;
        case 4:
          setActiveWatch(5);
          break;
        case 5:
          setActiveWatch(6);
          break;
        case 6:
          setActiveWatch(7);
          break;
        case 7:
          setActiveWatch(1);
          break;
        default:
          setActiveWatch(1);
          break;
      }
    }, 5000);
    return () => {
      clearTimeout(interval);
    };
  }, [activeWatch]);

  return (
    <div className="full  relative mt-[80px] xl:mt-[140px]">
      <div className="absolute rounded-full top-[8%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[200px]  left-0 w-[700px] h-[700px]"></div>
      <div className="absolute rounded-full top-[48%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[300px]  right-0 w-[700px] h-[700px]"></div>
      <div className="absolute rounded-full top-[90%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  left-0 w-[700px] h-[700px]"></div>
      <div className="section flex-col">
        <div className="flex gap-4 w-full max-w-[950px] justify-center items-center text-center flex-col">
          <HeadingComp head="Swiss Crypto Watch First Collection" />
          <p className="text-white text-base sm:text-[20px] leading-[30px]">
            The key that unlocks you into The Swiss Cryptowatch Club
          </p>
        </div>
        <div className="flex justify-center xl:flex-row flex-col-reverse items-center gap-[50px] xl:gap-[100px] mt-[50px] mb-[80px]  xl:my-[80px]">
          <img
            src="/col1.png"
            className="max-w-[500px] xl:block hidden xl:max-w-[700px] object-contain w-[90%]"
            alt=""
          />
          <div className="flex justify-center items-center text-center xl:text-left xl:items-start flex-col gap-[15px]">
            <h3 className="uppercase text-blue text-[16px] sm:text-[24px] leading-[1] font-semibold">
              Collection
            </h3>
            <h2 className="text-white font-bold sm:text-[60px] text-[35px] leading-[44px] sm:leading-[68px]">
              Unisex <br /> Collection
            </h2>
            <img
              src="/col1.png"
              className="max-w-[500px] xl:hidden block xl:max-w-[700px] object-contain w-[90%]"
              alt=""
            />
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              Swiss Crypto Watches are inspired by nature and technical aspects.
            </p>
            <Button name="View Collection" classes="mt-5" />
          </div>
        </div>
        <div className="flex justify-center xl:flex-row flex-col items-center gap-[50px] xl:gap-[100px] ">
          <div className="flex justify-center items-center text-center xl:text-left xl:items-start flex-col gap-[15px]">
            <h3 className="uppercase text-blue text-[16px] sm:text-[24px] leading-[1] font-semibold">
              Collection
            </h3>
            <h2 className="text-white font-bold sm:text-[60px] text-[35px] leading-[44px] sm:leading-[68px]">
              Swiss <br /> Collection
            </h2>
            <img
              src="/col2.png"
              className="max-w-[500px] xl:hidden block xl:max-w-[700px] object-contain w-[90%]"
              alt=""
            />
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              The Swiss Collection is dedicated to Switzerland where Swiss
              Crypto Watch was invented and designed. It features traditional
              Swiss designs and objects.
            </p>
            <Button name="View Collection" classes="mt-5" />
          </div>
          <img
            src="/col2.png"
            className="max-w-[500px] xl:block hidden xl:max-w-[700px] object-contain w-[90%]"
            alt=""
          />
        </div>
        <div className="flex justify-center xl:flex-row flex-col-reverse items-center gap-[50px] xl:gap-[100px] mt-[80px]">
          {window.innerWidth >= 1280 ? (
            <div className="flex max-w-[550px]     isolate relative  min-h-[450px] justify-center  items-center w-full ">
              <img
                ref={watch1}
                onClick={() => setActiveWatch(1)}
                src="/bes5.png"
                className={`cursor-pointer    top-1/2 -translate-y-1/2 absolute   object-contain `}
                alt=""
              />
              <img
                ref={watch2}
                onClick={() => setActiveWatch(2)}
                src="/bes1.png"
                className={`cursor-pointer   top-1/2 -translate-y-1/2 absolute   object-contain  `}
                alt=""
              />
              <img
                ref={watch3}
                onClick={() => setActiveWatch(3)}
                src="/bes3.png"
                alt=""
                className={`cursor-pointer absolute    top-1/2 -translate-y-1/2   object-contain `}
              />
              <img
                ref={watch4}
                onClick={() => setActiveWatch(4)}
                src="/bes4.png"
                alt=""
                className={`cursor-pointer    top-1/2 -translate-y-1/2 absolute   object-contain `}
              />
              <img
                ref={watch5}
                onClick={() => setActiveWatch(5)}
                src="/bes2.png"
                alt=""
                className={`cursor-pointer    top-1/2 -translate-y-1/2 object-contain absolute  `}
              />
              <img
                ref={watch6}
                onClick={() => setActiveWatch(6)}
                src="/soon6.png"
                alt=""
                className={`cursor-pointer    top-1/2 -translate-y-1/2 object-contain absolute  `}
              />
              <img
                ref={watch7}
                onClick={() => setActiveWatch(7)}
                src="/soon7.png"
                alt=""
                className={`cursor-pointer    top-1/2 -translate-y-1/2 object-contain absolute  `}
              />
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-center items-center text-center xl:text-left xl:items-start flex-col gap-[15px]">
            <h3 className="uppercase text-blue text-[16px] sm:text-[24px] leading-[1] font-semibold">
              Editable watch collection
            </h3>
            <h2 className="text-white font-bold sm:text-[60px] text-[35px] leading-[44px] sm:leading-[68px]">
              Bespoke <br /> Collection
            </h2>
            {window.innerWidth < 1280 ? (
              <div className=" relative max-w-[350px]   min-h-[250px] justify-center  mt-[20px] w-full ">
                <img
                  ref={watch1}
                  onClick={() => setActiveWatch(1)}
                  src="/bes1.png"
                  className={`cursor-pointer top-1/2 -translate-y-1/2  absolute  object-contain `}
                  alt=""
                />
                <img
                  ref={watch2}
                  onClick={() => setActiveWatch(2)}
                  src="/bes2.png"
                  className={`cursor-pointer top-1/2 -translate-y-1/2 absolute object-contain  `}
                  alt=""
                />
                <img
                  ref={watch3}
                  onClick={() => setActiveWatch(3)}
                  src="/bes3.png"
                  alt=""
                  className={`cursor-pointer top-1/2 -translate-y-1/2 absolute  object-contain `}
                />
                <img
                  ref={watch4}
                  onClick={() => setActiveWatch(4)}
                  src="/bes4.png"
                  alt=""
                  className={`cursor-pointer top-1/2 -translate-y-1/2 absolute  object-contain `}
                />
                <img
                  ref={watch5}
                  onClick={() => setActiveWatch(5)}
                  src="/bes5.png"
                  alt=""
                  className={`cursor-pointer top-1/2 -translate-y-1/2 absolute  object-contain `}
                />{" "}
                <img
                  ref={watch6}
                  onClick={() => setActiveWatch(6)}
                  src="/soon6.png"
                  alt=""
                  className={`cursor-pointer    top-1/2 -translate-y-1/2 object-contain absolute  `}
                />
                <img
                  ref={watch7}
                  onClick={() => setActiveWatch(7)}
                  src="/soon7.png"
                  alt=""
                  className={`cursor-pointer    top-1/2 -translate-y-1/2 object-contain absolute  `}
                />
              </div>
            ) : (
              ""
            )}
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              Create your own unique Swiss Crypto Watch with our design team.
              This collection will be limited to 99 pieces in 2023.
            </p>
            <a href="#contact">
              <Button name="Apply" classes="mt-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
