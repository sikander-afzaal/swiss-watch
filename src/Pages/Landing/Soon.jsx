import Button from "../../Components/Button";
import gsap, { Power3 } from "gsap";
import Flip from "gsap/Flip";
import { useEffect, useRef, useState } from "react";

const Soon = () => {
  const [activeWatch, setActiveWatch] = useState(1);
  const watch1 = useRef();
  const watch2 = useRef();
  const watch3 = useRef();
  const page1 = useRef();
  const page2 = useRef();
  const page3 = useRef();
  useEffect(() => {
    gsap.registerPlugin(Flip);
    const watchState = Flip.getState([
      watch1.current,
      watch2.current,
      watch3.current,
    ]);

    [watch1.current, watch2.current, watch3.current].forEach((elem, idx) => {
      if (idx === activeWatch - 1) {
        elem.classList.add("watchActive");
        elem.classList.remove("order-1");
        elem.classList.remove("xl:max-w-[210px]");
        elem.classList.remove("max-w-[115px]");
        elem.classList.remove("order-2");
        elem.classList.remove("order-3");
      } else {
        elem.classList.remove("watchActive");
        elem.classList.add("xl:max-w-[210px]");
        elem.classList.add("max-w-[115px]");
        elem.classList.remove("order-1");
        elem.classList.remove("order-2");
        elem.classList.remove("order-3");
        if (activeWatch === 1) {
          watch3.current.classList.add("order-3");
          watch2.current.classList.add("order-1");
        } else if (activeWatch === 2) {
          watch1.current.classList.add("order-1");
          watch3.current.classList.add("order-3");
        } else if (activeWatch === 3) {
          watch1.current.classList.add("order-1");
          watch2.current.classList.add("order-3");
        }
      }
    });
    Flip.from(watchState, {
      duration: 2,
      absolute: true,
      ease: Power3.easeInOut,
    });
  }, [activeWatch]);
  useEffect(() => {
    setTimeout(() => {
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
          setActiveWatch(1);
          break;
        default:
          setActiveWatch(1);
          break;
      }
    }, 5000);
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
          </div>
        </div>
        <div className="flex  xl:min-h-[520px] min-h-[320px] justify-center xl:mt-0 mt-[50px] items-center w-full ">
          <img
            ref={watch1}
            onClick={() => setActiveWatch(1)}
            src="/soon1.png"
            className={`cursor-pointer  w-full  object-contain row-start-1 row-end-2`}
            alt=""
          />
          <img
            ref={watch2}
            onClick={() => setActiveWatch(2)}
            src="/soon2.png"
            className={`cursor-pointer w-full  object-contain row-start-1 row-end-2 `}
            alt=""
          />
          <img
            ref={watch3}
            onClick={() => setActiveWatch(3)}
            src="/soon3.png"
            alt=""
            className={`cursor-pointer  w-full  object-contain row-start-1 row-end-2`}
          />
        </div>
      </div>
    </div>
  );
};

export default Soon;
