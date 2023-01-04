const Subscribe = () => {
  return (
    <div id="contact" className="full mt-[80px] lg:mt-[120px] px-5">
      <div className="section bg-blue rounded-[20px] lg:px-5 px-2 lg:flex-row flex-col justify-around gap-[40px] lg:gap-5 py-8 lg:py-[100px]">
        <div className="flex justify-center items-center lg:items-start flex-col gap-3 lg:text-left text-center xl:gap-5">
          <h4 className="text-white font-semibold text-[16px] xl:text-[24px] leading-[16px] xl:leading-[24px]">
            SUBSCRIBE
          </h4>
          <h2 className="font-bold text-white text-[36px] xl:text-[60px] leading-[44px] xl:leading-[60px]">
            Subscribe to our newsletter
          </h2>
          <p className="text-white text-base xl:text-[20px] leading-[24px]">
            Sign up for our email brief for hand-picked articles, news, and
            more.
          </p>
        </div>
        <button className="w-[200px] lg:w-[250px] font-bold text-base lg:text-[22px] leading-[1] h-[60px] lg:h-[70px] bg-black lg:bg-white text-white lg:text-blue rounded-full border-none">
          SUBSCRIBE NOW
        </button>
      </div>
      <p className="text-white  mt-[50px] leading-[1.8] text-center text-sm sm:text-lg font-semibold">
        Swiss Crypto Watch is a brand of RG Watches & Jewelry GmbH, Summelenweg
        91, 8808 Pfäffikon/Switzerland <br /> Official register
        number CHE-307.000.557
      </p>
    </div>
  );
};

export default Subscribe;
