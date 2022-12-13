import HeadingComp from "../../Components/HeadingComp";

const Roadmap = () => {
  const roadmapHeadStyles =
    "text-blue uppercase text-[24px] lg:text-[30px] leading-[24px] lg:leading-[30px] font-bold";
  const roadmapDescStyles = "text-sm lg:text-base text-white max-w-[306px]";
  const circleStyles =
    "bg-blue rounded-full xl:static absolute top-0 -left-[45px]  xl:w-6 w-[12px] h-[12px] xl:h-6 border-solid box-content border-[#4A4A4E] border-[6px] xl:border-[12px]";
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
        <div className="grid self-start sm:self-center w-max xl:gap-y-0 gap-y-[40px] gap-x-[30px] xl:gap-x-[50px] isolate  relative grid-cols-[auto__1fr] xl:grid-cols-6 xl:w-full  grid-rows-6 xl:grid-rows-1 mt-[40px] xl:mt-[80px]">
          <div className="static row-start-1 row-end-7 xl:absolute left-0 top-5 -z-10 xl:w-full w-[6px] h-full xl:h-[6px] bg-white opacity-[0.12]"></div>
          <div className="xl:text-center text-left flex justify-start items-start relative xl:items-center flex-col gap-4">
            <div className={circleStyles}></div>
            <h3 className={roadmapHeadStyles}>Dec 2022</h3>
            <p className={roadmapDescStyles}>
              Monthly collections will be unveiled, All Swiss Crypto Watches can
              be used on Smart phones and Smart watches
            </p>
          </div>
          <div className="xl:text-center text-left flex justify-start items-start relative xl:items-center flex-col gap-4 ">
            <div className={circleStyles}></div>
            <h3 className={roadmapHeadStyles}>2023 q1</h3>
            <p className={roadmapDescStyles}>
              Monthly collections will be unveiled, Swiss Crypto Watch Coin
              (SCWC ) will be tradable
            </p>
          </div>

          <div className="xl:text-center text-left flex justify-start items-start relative xl:items-center flex-col gap-4 ">
            <div className={circleStyles}></div>
            <h3 className={roadmapHeadStyles}>2023 Q2</h3>
            <p className={roadmapDescStyles}>
              First Swiss Crypto Watch unveiled, payable only with Swiss Crypto
              Watch Coin (SCWC)
            </p>
          </div>
          <div className="xl:text-center text-left flex justify-start items-start relative xl:items-center flex-col gap-4 ">
            <div className={circleStyles}></div>
            <h3 className={roadmapHeadStyles}>2023 q4</h3>
            <p className={roadmapDescStyles}>
              New monthly collections will be availble
            </p>
          </div>
          <div className="xl:text-center text-left flex justify-start items-start relative xl:items-center flex-col gap-4 ">
            <div className={circleStyles}></div>
            <h3 className={roadmapHeadStyles}>2023 Q2</h3>
            <p className={roadmapDescStyles}>
              New monthly collections will be availble
            </p>
          </div>
          <div className="xl:text-center text-left flex justify-start items-start relative xl:items-center flex-col gap-4 ">
            <div className={circleStyles}></div>
            <h3 className={roadmapHeadStyles}>2023 Q3</h3>
            <p className={roadmapDescStyles}>
              New monthly collections will be availble
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
