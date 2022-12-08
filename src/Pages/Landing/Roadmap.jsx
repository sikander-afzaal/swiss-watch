import { useRef, useEffect } from "react";
import HeadingComp from "../../Components/HeadingComp";
import gsap from "gsap";

const Roadmap = () => {
  const roadmapHeadStyles =
    "text-blue uppercase text-[24px] lg:text-[30px] leading-[24px] lg:leading-[30px] font-bold";
  const roadmapDescStyles = "text-sm lg:text-base text-white max-w-[306px]";
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();
  const line4 = useRef();
  const line5 = useRef();
  const line6 = useRef();

  useEffect(() => {
    const lineArray = [
      line2.current,
      line4.current,
      line6.current,
      line5.current,
      line3.current,
      line1.current,
    ];
    gsap.set(lineArray, { filter: "brightness(0.4)" });
    gsap.fromTo(
      lineArray,
      { filter: "brightness(0.4)" },
      {
        filter: "brightness(2)",
        stagger: 2,
        repeat: -1,
        duration: 0.8,
      }
    );
  }, []);

  return (
    <div
      id="roadmap"
      className="full mt-[100px] xl:mt-[150px] relative isolate"
    >
      <div className="absolute rounded-full top-[55%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  left-0 w-[700px] h-[700px]"></div>
      <div className="section flex-col gap-3 text-center">
        <HeadingComp sub="Roadmap" head="Development Roadmap" />
        <p className="text-white text-base sm:text-[20px] leading-[30px] max-w-[950px]">
          3 collections will be availble, each limited to 999 pieces, Bespoke
          collection will be available, limited to only 99 in 2023
        </p>
        <div className="grid gap-x-5 gap-y-7 grid-cols-2 xl:grid-cols-[auto__1fr__auto] w-full grid-rows-[1fr__auto__auto__auto] xl:grid-rows-3 mt-[40px] xl:mt-[80px]">
          {/* Row 1 roadmap ---------------------- */}
          <div className="self-start relative row-start-2 row-end-3 col-start-1 col-end-2 xl:row-start-1 xl:row-end-2 xl:col-start-1 xl:col-end-2 flex justify-start h-full xl:h-auto xl:justify-center items-end flex-col gap-4 text-right">
            <h2 className={roadmapHeadStyles}>2023 Q4</h2>
            <p className={roadmapDescStyles}>
              New monthly collections will be availble
            </p>
            <img
              ref={line1}
              src="/line1.png"
              className="absolute  left-[110%] top-[10%] xl:block hidden"
              alt=""
            />
          </div>
          <div className="self-start relative row-start-2 row-end-3 col-start-2 col-end-3 xl:row-start-1 xl:row-end-2 xl:col-start-3 xl:col-end-4 flex justify-start h-full xl:h-auto xl:justify-center items-start flex-col gap-4 text-left">
            <h2 className={roadmapHeadStyles}>December 2022</h2>
            <p className={roadmapDescStyles}>
              Monthly collections will be unveiled, All Swiss Crypto Watches can
              be used on Smart phones and Smart watches
            </p>{" "}
            <img
              ref={line2}
              src="/line2.png"
              className="absolute   right-[110%] xl:block hidden top-[10%]"
              alt=""
            />
          </div>
          {/* Row 1 end roadmap -------------------------- */}
          {/* Row 2 roadmap ---------------------- */}
          <div className="self-center relative col-start-1 col-end-2 row-start-3 row-end-4 xl:row-start-2 xl:row-end-3 xl:col-start-1 xl:col-end-2 flex justify-start h-full xl:h-auto xl:justify-center items-end flex-col gap-4 text-right">
            <h2 className={roadmapHeadStyles}>2023 Q3</h2>
            <p className={roadmapDescStyles}>
              New monthly collections will be availble
            </p>
            <img
              ref={line3}
              src="/line3.png"
              className="absolute left-[110%]  top-[10%] xl:block hidden"
              alt=""
            />
          </div>
          <div className="self-center relative col-start-2 col-end-3 row-start-3 row-end-4 xl:row-start-2 xl:row-end-3 xl:col-start-3 xl:col-end-4 flex justify-start h-full xl:h-auto xl:justify-center items-start flex-col gap-4 text-left">
            <h2 className={roadmapHeadStyles}>2023 q1</h2>
            <p className={roadmapDescStyles}>
              Monthly collections will be unveiled, Swiss Crypto Watch Coin
              (SCWC ) will be tradable
            </p>{" "}
            <img
              ref={line4}
              src="/line4.png"
              className="absolute   right-[110%] xl:block hidden top-[10%]"
              alt=""
            />
          </div>
          {/* Row 2 end roadmap -------------------------- */}
          {/* Row 3 roadmap ---------------------- */}
          <div className="self-end relative col-start-1 col-end-2 row-start-4 row-end-5 xl:row-start-3 xl:row-end-4 xl:col-start-1 xl:col-end-2 flex justify-start h-full xl:h-auto xl:justify-center items-end flex-col gap-4 text-right">
            <h2 className={roadmapHeadStyles}>2023 Q2</h2>
            <p className={roadmapDescStyles}>
              New monthly collections will be availble
            </p>{" "}
            <img
              ref={line5}
              src="/line5.png"
              className="absolute left-[110%] xl:block hidden bottom-[10%]"
              alt=""
            />
          </div>
          <div className="self-end relative col-start-2 col-end-3 row-start-4 row-end-5 xl:row-start-3 xl:row-end-4 xl:col-start-3 xl:col-end-4 flex justify-start h-full xl:h-auto xl:justify-center items-start flex-col gap-4 text-left">
            <h2 className={roadmapHeadStyles}>2023 Q2</h2>
            <p className={roadmapDescStyles}>
              First Swiss Crypto Watch unveiled, payable only with Swiss Crypto
              Watch Coin (SCWC)
            </p>{" "}
            <img
              ref={line6}
              src="/line6.png"
              className="absolute  right-[110%] xl:block hidden bottom-[10%]"
              alt=""
            />
          </div>
          {/* Row 3 end roadmap -------------------------- */}
          <img
            src="/roadmap.png"
            className="xl:col-start-2 col-start-1 xl:col-end-3 col-end-3 xl:row-start-1 row-start-1 xl:row-end-4 row-end-2 self-center justify-self-center"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
