import Button from "../../Components/Button";
import HeadingComp from "../../Components/HeadingComp";

const Collection = () => {
  return (
    <div className="full  relative mt-[80px] xl:mt-[140px]">
      <div className="absolute rounded-full top-[8%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[200px]  left-0 w-[700px] h-[700px]"></div>
      <div className="absolute rounded-full top-[48%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[300px]  right-0 w-[700px] h-[700px]"></div>
      <div className="absolute rounded-full top-[90%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  left-0 w-[700px] h-[700px]"></div>
      <div className="section flex-col">
        <div className="flex gap-4 w-full max-w-[950px] justify-center items-center text-center flex-col">
          <HeadingComp sub="SCWC" head="Swiss Crypto Watch Winter Collection" />
          <p className="text-white text-base sm:text-[20px] leading-[30px]">
            The key that unlocks you into The Swiss Cryptowatch Club
          </p>
        </div>
        <div className="flex justify-center xl:flex-row flex-col items-center gap-[50px] xl:gap-[100px] mt-[50px] mb-[80px]  xl:my-[80px]">
          <img
            src="/col1.png"
            className="max-w-[500px] xl:max-w-[700px] object-contain w-[90%]"
            alt=""
          />
          <div className="flex justify-center items-center text-center xl:text-left xl:items-start flex-col gap-[15px]">
            <h3 className="uppercase text-blue text-[16px] sm:text-[24px] leading-[1] font-semibold">
              Collection
            </h3>
            <h2 className="text-white font-bold sm:text-[60px] text-[35px] leading-[44px] sm:leading-[68px]">
              Unisex <br /> Collection
            </h2>
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              Swiss Crypto Watches are inspired by nature and technical aspects.
            </p>
            <Button name="View Collection" classes="mt-5" />
          </div>
        </div>
        <div className="flex justify-center xl:flex-row flex-col-reverse items-center gap-[50px] xl:gap-[100px] ">
          <div className="flex justify-center items-center text-center xl:text-left xl:items-start flex-col gap-[15px]">
            <h3 className="uppercase text-blue text-[16px] sm:text-[24px] leading-[1] font-semibold">
              Collection
            </h3>
            <h2 className="text-white font-bold sm:text-[60px] text-[35px] leading-[44px] sm:leading-[68px]">
              Swiss <br /> Collection
            </h2>
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              The Swiss Collection is dedicated to Switzerland where Swiss
              Crypto Watch was invented and designed. It features traditional
              Swiss designs and objects.
            </p>
            <Button name="View Collection" classes="mt-5" />
          </div>
          <img
            src="/col2.png"
            className="max-w-[500px] xl:max-w-[700px] object-contain w-[90%]"
            alt=""
          />
        </div>
        <div className="flex justify-center xl:flex-row flex-col items-center gap-[50px] xl:gap-[100px] mt-[80px]">
          <img
            src="/col3.png"
            className="max-w-[500px] xl:max-w-[700px] object-contain w-[90%]"
            alt=""
          />
          <div className="flex justify-center items-center text-center xl:text-left xl:items-start flex-col gap-[15px]">
            <h3 className="uppercase text-blue text-[16px] sm:text-[24px] leading-[1] font-semibold">
              Editable watch collection
            </h3>
            <h2 className="text-white font-bold sm:text-[60px] text-[35px] leading-[44px] sm:leading-[68px]">
              Bespoke <br /> Collection
            </h2>
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              Create your own unique Swiss Crypto Watch with our design team.
              This collection will be limited to 99 pieces in 2023.
            </p>
            <Button name="View Collection" classes="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
