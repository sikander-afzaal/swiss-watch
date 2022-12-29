import Button from "../../Components/Button";
import gsap, { Power3 } from "gsap";
import Flip from "gsap/Flip";
import { useEffect, useRef, useState } from "react";

const Soon = () => {
  const [activeWatch, setActiveWatch] = useState(1);
  const watch1 = useRef();
  const watch2 = useRef();
  const watch3 = useRef();
  const watch4 = useRef();
  const watch5 = useRef();
  const watch6 = useRef();
  const watch7 = useRef();
  const page1 = useRef();
  const page2 = useRef();
  const page3 = useRef();
  const page4 = useRef();
  const page5 = useRef();
  const page6 = useRef();
  const page7 = useRef();
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
    <div className="full mt-[70px] relative  xl:mt-[150px] bg-[rgba(255,255,255,0.06)] ">
      <div className="absolute rounded-full top-[55%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  left-0 w-[700px] h-[700px]"></div>
      <div className="absolute rounded-full top-[0%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  right-0 w-[700px] h-[700px]"></div>
      <div className="section xl:flex-row  xl:h-auto h-full  flex-col gap-6 py-[70px] xl:py-[160px]">
        <div className="flex w-full justify-center items-center xl:text-left text-center xl:items-start flex-col gap-3">
          <h2 className=" text-blue font-bold sm:text-[64px] text-[36px] leading-[44px] sm:leading-[78px]">
            Coming Soon
          </h2>
          {window.innerWidth < 1280 ? (
            <div className=" relative max-w-[350px]   min-h-[250px] justify-center  mt-[20px] w-full ">
              <img
                ref={watch1}
                onClick={() => setActiveWatch(1)}
                src="/soon1.png"
                className={`cursor-pointer top-1/2 -translate-y-1/2  absolute  object-contain `}
                alt=""
              />
              <img
                ref={watch2}
                onClick={() => setActiveWatch(2)}
                src="/soon2.png"
                className={`cursor-pointer top-1/2 -translate-y-1/2 absolute object-contain  `}
                alt=""
              />
              <img
                ref={watch3}
                onClick={() => setActiveWatch(3)}
                src="/soon3.png"
                alt=""
                className={`cursor-pointer top-1/2 -translate-y-1/2 absolute  object-contain `}
              />
              <img
                ref={watch4}
                onClick={() => setActiveWatch(4)}
                src="/soon4.png"
                alt=""
                className={`cursor-pointer top-1/2 -translate-y-1/2 absolute  object-contain `}
              />
              <img
                ref={watch5}
                onClick={() => setActiveWatch(5)}
                src="/soon5.png"
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
          <p className="text-white text-base sm:text-[22px] leading-[34px] xl:max-w-none max-w-[600px]">
            Every buyer is automatically member of Swiss Crypto Watch Club.
            Swiss Crypto Watch Club will offer special collections and other
            amenities to their members.
          </p>
          <Button name={"Join Discord"} classes="mt-[20px] xl:mt-[60px]" />
          {/* //pagination -------------------- */}
          <div className="hidden xl:flex justify-start items-center gap-4 mt-[50px]">
            <div
              onClick={() => setActiveWatch(1)}
              ref={page1}
              className={`w-[48px] cursor-pointer h-[6px] ${
                activeWatch === 1 ? "bg-blue" : "bg-white opacity-[0.36]"
              } transition-all`}
            ></div>
            <div
              onClick={() => setActiveWatch(2)}
              ref={page2}
              className={`w-[48px] cursor-pointer h-[6px] ${
                activeWatch === 2 ? "bg-blue" : "bg-white opacity-[0.36]"
              } transition-all`}
            ></div>
            <div
              onClick={() => setActiveWatch(3)}
              ref={page3}
              className={`w-[48px] cursor-pointer h-[6px] ${
                activeWatch === 3 ? "bg-blue" : "bg-white opacity-[0.36]"
              } transition-all`}
            ></div>
            <div
              onClick={() => setActiveWatch(4)}
              ref={page4}
              className={`w-[48px] cursor-pointer h-[6px] ${
                activeWatch === 4 ? "bg-blue" : "bg-white opacity-[0.36]"
              } transition-all`}
            ></div>
            <div
              onClick={() => setActiveWatch(5)}
              ref={page5}
              className={`w-[48px] cursor-pointer h-[6px] ${
                activeWatch === 5 ? "bg-blue" : "bg-white opacity-[0.36]"
              } transition-all`}
            ></div>
            <div
              onClick={() => setActiveWatch(6)}
              ref={page6}
              className={`w-[48px] cursor-pointer h-[6px] ${
                activeWatch === 6 ? "bg-blue" : "bg-white opacity-[0.36]"
              } transition-all`}
            ></div>
            <div
              onClick={() => setActiveWatch(7)}
              ref={page7}
              className={`w-[48px] cursor-pointer h-[6px] ${
                activeWatch === 7 ? "bg-blue" : "bg-white opacity-[0.36]"
              } transition-all`}
            ></div>
          </div>
        </div>
        {/* //desktop watches -------------------------- */}
        {window.innerWidth >= 1280 ? (
          <div className="flex max-w-[550px]     isolate relative  min-h-[450px] justify-center  items-center w-full ">
            <img
              ref={watch1}
              onClick={() => setActiveWatch(1)}
              src="/soon5.png"
              className={`cursor-pointer    top-1/2 -translate-y-1/2 absolute   object-contain `}
              alt=""
            />
            <img
              ref={watch2}
              onClick={() => setActiveWatch(2)}
              src="/soon1.png"
              className={`cursor-pointer   top-1/2 -translate-y-1/2 absolute   object-contain  `}
              alt=""
            />
            <img
              ref={watch3}
              onClick={() => setActiveWatch(3)}
              src="/soon3.png"
              alt=""
              className={`cursor-pointer absolute    top-1/2 -translate-y-1/2   object-contain `}
            />
            <img
              ref={watch4}
              onClick={() => setActiveWatch(4)}
              src="/soon4.png"
              alt=""
              className={`cursor-pointer    top-1/2 -translate-y-1/2 absolute   object-contain `}
            />
            <img
              ref={watch5}
              onClick={() => setActiveWatch(5)}
              src="/soon2.png"
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
      </div>
    </div>
  );
};

export default Soon;
