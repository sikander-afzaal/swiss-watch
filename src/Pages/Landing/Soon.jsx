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
  const page1 = useRef();
  const page2 = useRef();
  const page3 = useRef();
  const page4 = useRef();
  const page5 = useRef();
  useEffect(() => {
    gsap.registerPlugin(Flip);
    const watchArray = [
      watch1.current,
      watch2.current,
      watch3.current,
      watch4.current,
      watch5.current,
    ];
    const watchArrayMob = [watch1.current, watch2.current, watch3.current];
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
        elem.classList.remove("left-[0%]");
        elem.classList.remove("-z-[20]");
        elem.classList.remove("-z-[10]");
        elem.classList.remove("left-[10%]");
        elem.classList.remove("right-[10%]");
        elem.classList.remove("right-[0%]");
      });

      watchArray.forEach((elem) => {
        elem.classList.remove("activeWatch");
      });
      // ------------------------------------------
      // adding new classes ----------------------------------
      watchArray[activeWatch - 1].classList.add("activeWatch");
      const filteredArray__After__New__Active__State = watchArray.filter(
        (elem) => !elem.classList.contains("activeWatch")
      );
      filteredArray__After__New__Active__State.forEach((elem, idx) => {
        elem.classList.add("w-[206px]");
        if (idx === 0) {
          elem.classList.add("left-[0%]");
          elem.classList.add("-z-[20]");
        } else if (idx === 1) {
          elem.classList.add("left-[10%]");
          elem.classList.add("-z-[10]");
        } else if (idx === 2) {
          elem.classList.add("right-[10%]");
          elem.classList.add("-z-[10]");
        } else if (idx === 3) {
          elem.classList.add("right-[0%]");
          elem.classList.add("-z-[20]");
        }
      });
    } else {
      //removing all the old classes --------------------
      const filteredArray__After__Old__Active__StateMob = watchArrayMob.filter(
        (elem) => !elem.classList.contains("activeWatchMob")
      );
      filteredArray__After__Old__Active__StateMob.forEach((elem, idx) => {
        elem.classList.remove("w-[100px]");
        elem.classList.remove("left-[10%]");
        elem.classList.remove("-z-[10]");
        elem.classList.remove("right-[10%]");
      });
      watchArrayMob.forEach((elem) => {
        elem.classList.remove("activeWatchMob");
      });
      watchArrayMob[activeWatch - 1].classList.add("activeWatchMob");
      const filteredArray__After__New__Active__StateMob = watchArrayMob.filter(
        (elem) => !elem.classList.contains("activeWatchMob")
      );
      filteredArray__After__New__Active__StateMob.forEach((elem, idx) => {
        elem.classList.add("w-[100px]");
        if (idx === 0) {
          elem.classList.add("left-[10%]");
          elem.classList.add("-z-[10]");
        } else if (idx === 1) {
          elem.classList.add("right-[10%]");
          elem.classList.add("-z-[10]");
        }
      });
      console.log(filteredArray__After__New__Active__StateMob);
    }
    Flip.from(watchState, {
      duration: 2,
      ease: Power3.easeInOut,
      absolute: true,
    });
  }, [activeWatch]);
  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     //autoplay functionality --------------
  //     const currentNum = activeWatch;

  //     if (window.innerWidth > 1280) {
  //       switch (currentNum) {
  //         case 1:
  //           setActiveWatch(2);
  //           break;
  //         case 2:
  //           setActiveWatch(3);
  //           break;
  //         case 3:
  //           setActiveWatch(4);
  //           break;
  //         case 4:
  //           setActiveWatch(5);
  //           break;
  //         case 5:
  //           setActiveWatch(1);
  //           break;
  //         default:
  //           setActiveWatch(1);
  //           break;
  //       }
  //     } else {
  //       switch (currentNum) {
  //         case 1:
  //           setActiveWatch(2);
  //           break;
  //         case 2:
  //           setActiveWatch(3);
  //           break;
  //         case 3:
  //           setActiveWatch(1);
  //           break;

  //         default:
  //           setActiveWatch(1);
  //           break;
  //       }
  //     }
  //   }, 5000);
  //   return () => {
  //     clearTimeout(interval);
  //   };
  // }, [activeWatch]);

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
          </div>
        </div>
        {window.innerWidth >= 1280 ? (
          <div className="flex max-w-[550px]     isolate relative  min-h-[450px] justify-center  items-center w-full ">
            <img
              ref={watch1}
              onClick={() => setActiveWatch(1)}
              src="/soon1.png"
              className={`cursor-pointer    top-1/2 -translate-y-1/2 absolute   object-contain `}
              alt=""
            />
            <img
              ref={watch2}
              onClick={() => setActiveWatch(2)}
              src="/soon2.png"
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
              src="/soon3.png"
              alt=""
              className={`cursor-pointer    top-1/2 -translate-y-1/2 absolute   object-contain `}
            />
            <img
              ref={watch5}
              onClick={() => setActiveWatch(5)}
              src="/soon3.png"
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
