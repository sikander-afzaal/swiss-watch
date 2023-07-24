import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeadingComp from "../../Components/HeadingComp";

const Roadmap2024 = () => {
  const roadmapHeadStyles =
    "text-blue uppercase text-[24px] lg:text-[30px] leading-[24px] lg:leading-[30px] font-bold";
  const roadmapDescStyles =
    "text-sm lg:text-base text-white  w-full max-w-[306px]  sm:max-w-[406px]";
  const circleStyles =
    "bg-blue rounded-full mid:static absolute top-0 -left-[45px]  mid:w-6 w-[12px] h-[12px] mid:h-6 border-solid box-content border-[#4A4A4E] border-[6px] mid:border-[12px]";
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();
  const line4 = useRef();
  const line5 = useRef();
  const line6 = useRef();
  const line7 = useRef();
  const line8 = useRef();
  const line9 = useRef();
  const line10 = useRef();
  const mobileLine = useRef();
  const container = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    //desktop animation
    const lineArray = [
      line2.current,
      line9.current,
      line4.current,
      line10.current,
      line6.current,
      line5.current,
      line8.current,
      line3.current,
      line7.current,
      line1.current,
    ];
    if (window.innerWidth > 1024) {
      gsap.set(lineArray, { filter: "brightness(0) invert(1)" });
      gsap.fromTo(
        lineArray,
        { filter: "brightness(0.4) invert(1)" },
        {
          filter: "brightness(1) invert(0)",
          stagger: 2,
          repeat: -1,
          duration: 0.8,
        }
      );
    } else {
      //mobile animation -------------
      gsap.to(mobileLine.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "20% 40%",
          scrub: 2,
        },
        height: "100%",
      });
    }
  }, []);
  return (
    <div
      ref={container}
      className="full mt-[100px] mid:mt-[200px] relative isolate"
    >
      <div className="absolute whitespace-pre-wrap rounded-full top-[55%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  left-0 w-[700px] h-[700px]"></div>
      <div className="section flex-col gap-3 text-center">
        <HeadingComp head="Development Roadmap 2024" />

        {window.innerWidth > 1024 ? (
          <div className="grid gap-x-5 gap-y-7 grid-cols-2 mid:grid-cols-[auto__1fr__auto] w-full relative grid-rows-[1fr__auto__auto__auto] mid:grid-rows-3 mt-[40px] mid:mt-[80px]">
            {/* Row 1 roadmap ---------------------- */}
            <div className="self-start relative row-start-2 row-end-3 col-start-1 col-end-2 mid:row-start-1 mid:row-end-2 mid:col-start-1 mid:col-end-2 flex justify-start h-full mid:h-auto mid:justify-center items-end flex-col gap-4 text-right">
              <h2 className={roadmapHeadStyles}>2024 Q4</h2>
              <p className={roadmapDescStyles}>
                SCW Christmas Collection will be unveiled
              </p>
              <img
                ref={line1}
                src="/line1.png"
                className="absolute  left-[110%] top-[10%] mid:block hidden"
                alt=""
              />
            </div>
            <div className="self-start top-[23%] mid:col-auto mid:row-auto col-start-1 col-end-2 row-start-5 row-end-6  left-0 mid:absolute flex justify-start h-full mid:h-auto mid:justify-center items-end flex-col gap-4 text-right">
              <h2 className={roadmapHeadStyles}>2024 Q4</h2>
              <p className={roadmapDescStyles}>
                SCW Wiinter 2024 Collection unveiled.
              </p>
              <img
                ref={line7}
                src="/line7.svg"
                className="absolute  left-[105%] top-[10%] mid:block hidden"
                alt=""
              />
            </div>
            <div className="self-start bottom-[25%] mid:col-auto mid:row-auto left-0 col-start-2 col-end-3 row-start-5 row-end-6  mid:absolute flex justify-start h-full mid:h-auto mid:justify-center items-start mid:items-end flex-col gap-4 text-right">
              <h2 className={roadmapHeadStyles}>2024 Q3</h2>
              <p className={roadmapDescStyles}>
                Diamond Collection will be unveiled.
              </p>
              <img
                ref={line8}
                src="/line8.svg"
                className="absolute  left-[105%] top-[10%] mid:block hidden"
                alt=""
              />
            </div>
            <div className="self-start relative row-start-2 row-end-3 col-start-2 col-end-3 mid:row-start-1 mid:row-end-2 mid:col-start-3 mid:col-end-4 flex justify-start h-full mid:h-auto mid:justify-center items-start flex-col gap-4 text-left">
              <h2 className={roadmapHeadStyles}>2024 Q1</h2>
              <p className={roadmapDescStyles}>
                First SCW collection payable only witih Swiss Crypto Watch Coin
                (SCWC) will be unveiled
              </p>{" "}
              <img
                ref={line2}
                src="/line2.png"
                className="absolute   right-[110%] mid:block hidden top-[10%]"
                alt=""
              />
            </div>
            <div className="self-start top-[23%] right-0 mid:col-auto mid:row-auto col-start-1 col-end-2 row-start-6 row-end-7  mid:absolute flex justify-start h-full mid:h-auto mid:justify-center items-end mid:items-start flex-col gap-4 text-right mid:text-left">
              <h2 className={roadmapHeadStyles}>2024 Q1</h2>
              <p className={roadmapDescStyles}>
                Valentine Collection will be unveiled.
              </p>
              <img
                ref={line9}
                src="/line9.svg"
                className="absolute  right-[105%] top-[10%] mid:block hidden"
                alt=""
              />
            </div>
            <div className="self-start bottom-[18%] right-0 mid:col-auto mid:row-auto col-start-2 col-end-3 row-start-6 row-end-7  mid:absolute flex justify-start h-full mid:h-auto mid:justify-center items-start flex-col gap-4 text-left">
              <h2 className={roadmapHeadStyles}>2024 Q2</h2>
              <p className={roadmapDescStyles}>
                New model of Swiss Collection (Cheese) will be unveiled
              </p>
              <img
                ref={line10}
                src="/line10.svg"
                className="absolute  right-[105%] top-[0%] mid:block hidden"
                alt=""
              />
            </div>
            {/* Row 1 end roadmap -------------------------- */}
            {/* Row 2 roadmap ---------------------- */}
            <div className="self-center relative col-start-1 col-end-2 row-start-3 row-end-4 mid:row-start-2 mid:row-end-3 mid:col-start-1 mid:col-end-2 flex justify-start h-full mid:h-auto mid:justify-center items-end flex-col gap-4 text-right">
              <h2 className={roadmapHeadStyles}>2024 Q3</h2>
              <p className={roadmapDescStyles}>
                New model of Swiss Collection (Money) will be unveiled
              </p>
              <img
                ref={line3}
                src="/line3.png"
                className="absolute left-[110%]  top-[10%] mid:block hidden"
                alt=""
              />
            </div>
            <div className="self-center relative col-start-2 col-end-3 row-start-3 row-end-4 mid:row-start-2 mid:row-end-3 mid:col-start-3 mid:col-end-4 flex justify-start h-full mid:h-auto mid:justify-center items-start flex-col gap-4 text-left">
              <h2 className={roadmapHeadStyles}>2024 q1</h2>
              <p className={roadmapDescStyles}>
                New model of Swiss Collection (Chocolate) wlll be unveiled
              </p>{" "}
              <img
                ref={line4}
                src="/line4.png"
                className="absolute   right-[110%] mid:block hidden top-[10%]"
                alt=""
              />
            </div>
            {/* Row 2 end roadmap -------------------------- */}
            {/* Row 3 roadmap ---------------------- */}
            <div className="self-end relative col-start-1 col-end-2 row-start-4 row-end-5 mid:row-start-3 mid:row-end-4 mid:col-start-1 mid:col-end-2 flex justify-start h-full mid:h-auto mid:justify-center items-end flex-col gap-4 text-right">
              <h2 className={roadmapHeadStyles}>2024 Q2</h2>
              <p className={roadmapDescStyles}>
                First model which can be configurated from 3 different case
                colours, 3 different dials and a variety of straps unveiled. For
                SCW members only.
              </p>{" "}
              <img
                ref={line5}
                src="/line5.png"
                className="absolute left-[110%] mid:block hidden bottom-[50%] translate-y-1/2"
                alt=""
              />
            </div>
            <div className="self-end relative col-start-2 col-end-3 row-start-4 row-end-5 mid:row-start-3 mid:row-end-4 mid:col-start-3 mid:col-end-4 flex justify-start h-full mid:h-auto mid:justify-center items-start flex-col gap-4 text-left">
              <h2 className={roadmapHeadStyles}>2024 Q2</h2>
              <p className={roadmapDescStyles}>
                Summer SCW will be unveiled
              </p>{" "}
              <img
                ref={line6}
                src="/line6.png"
                className="absolute  right-[110%] mid:block hidden bottom-[10%]"
                alt=""
              />
            </div>
            {/* Row 3 end roadmap -------------------------- */}
            <img
              src="/roadmap.png"
              className="mid:col-start-2 col-start-1 mid:col-end-3 col-end-3 mid:row-start-1 row-start-1 mid:row-end-4 row-end-2 self-center justify-self-center"
              alt=""
            />
          </div>
        ) : (
          <div className="grid self-start sm:self-center h-full w-max mid:gap-y-0 gap-y-[0px] gap-x-[30px] mid:gap-x-[50px] isolate  relative grid-cols-[auto__1fr] mid:grid-cols-6 mid:w-full  grid-rows-[1fr__1fr__1fr__1fr__1fr__1fr__1fr__1fr__1fr__1fr] mid:grid-rows-1 mt-[40px] mid:mt-[80px]">
            {/* left line roadmap ---------- */}
            <div className="relative col-start-1 col-span-1 row-start-1 row-end-[11] mid:absolute left-0 top-5 -z-10 mid:w-full w-[6px] h-full mid:h-[6px] bg-[rgba(255,255,255,0.12)] overflow-hidden">
              <div
                ref={mobileLine}
                className="absolute left-0 top-0 w-full h-0 z-20 bg-[rgba(255,255,255,0.8)]"
              ></div>
            </div>
            {/* left line roadmap ---------- */}

            <div className="mid:text-center mid:mb-0 col-span-1 col-start-2 mid:h-auto h-auto mb-[40px] text-left flex justify-start items-start relative mid:items-center flex-col gap-4 ">
              <div className={circleStyles}></div>
              <h3 className={roadmapHeadStyles}>2024 Q1</h3>
              <p className={roadmapDescStyles}>
                First SCW collection payable only witih Swiss Crypto Watch Coin
                (SCWC) will be unveiled
              </p>
            </div>
            <div className="mid:text-center mid:mb-0 col-span-1 col-start-2 mid:h-auto h-auto mb-[40px] text-left flex justify-start items-start relative mid:items-center flex-col gap-4 ">
              <div className={circleStyles}></div>
              <h3 className={roadmapHeadStyles}>2024 Q1</h3>
              <p className={roadmapDescStyles}>
                Valentine Collection will be unveiled.
              </p>
            </div>

            <div className="mid:text-center mid:mb-0 col-span-1 col-start-2 mid:h-auto h-auto mb-[40px] text-left flex justify-start items-start relative mid:items-center flex-col gap-4 ">
              <div className={circleStyles}></div>
              <h3 className={roadmapHeadStyles}>2024 Q1</h3>
              <p className={roadmapDescStyles}>
                New model of Swiss Collection (Chocolate) wlll be unveiled
              </p>
            </div>
            <div className="mid:text-center mid:mb-0 col-span-1 col-start-2 mid:h-auto h-auto mb-[40px] text-left flex justify-start items-start relative mid:items-center flex-col gap-4 ">
              <div className={circleStyles}></div>
              <h3 className={roadmapHeadStyles}>2024 Q2</h3>
              <p className={roadmapDescStyles}>
                New model of Swiss Collection (Cheese) will be unveiled
              </p>
            </div>
            <div className="mid:text-center mid:mb-0 col-span-1 col-start-2 mid:h-auto h-auto mb-[40px] text-left flex justify-start items-start relative mid:items-center flex-col gap-4 ">
              <div className={circleStyles}></div>
              <h3 className={roadmapHeadStyles}>2024 Q2</h3>
              <p className={roadmapDescStyles}>Summer SCW will be unveiled</p>
            </div>
            <div className="mid:text-center mid:mb-0 col-span-1 col-start-2 mid:h-auto h-auto mb-[40px] text-left flex justify-start items-start relative mid:items-center flex-col gap-4 ">
              <div className={circleStyles}></div>
              <h3 className={roadmapHeadStyles}>2024 Q2</h3>
              <p className={roadmapDescStyles}>
                First model which can be configurated from 3 different case
                colours, 3 different dials and a variety of straps unveiled. For
                SCW members only.
              </p>
            </div>
            <div className="mid:text-center text-left col-span-1 col-start-2 flex justify-start items-start relative mid:items-center flex-col gap-4 ">
              <div className={circleStyles}></div>
              <h3 className={roadmapHeadStyles}>2024 Q3</h3>
              <p className={roadmapDescStyles}>
                Diamond Collection will be unveiled.
              </p>
            </div>
            <div className="mid:text-center text-left col-span-1 col-start-2 flex justify-start items-start relative mid:items-center flex-col gap-4 ">
              <div className={circleStyles}></div>
              <h3 className={roadmapHeadStyles}>2024 Q3</h3>
              <p className={roadmapDescStyles}>
                New model of Swiss Collection (Money) will be unveiled
              </p>
            </div>
            <div className="mid:text-center mid:mb-0 col-span-1 col-start-2 mid:h-auto h-auto mb-[40px] text-left flex justify-start items-start relative mid:items-center flex-col gap-4 ">
              <div className={circleStyles}></div>
              <h3 className={roadmapHeadStyles}>2024 Q4</h3>
              <p className={roadmapDescStyles}>
                SCW Wiinter 2024 Collection unveiled.
              </p>
            </div>
            <div className="mid:text-center mid:mb-0 col-span-1 col-start-2 mid:h-auto h-auto mb-[40px] text-left flex justify-start items-start relative mid:items-center flex-col gap-4 ">
              <div className={circleStyles}></div>
              <h3 className={roadmapHeadStyles}>2024 Q4</h3>
              <p className={roadmapDescStyles}>
                SCW Christmas Collection will be unveiled
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roadmap2024;
