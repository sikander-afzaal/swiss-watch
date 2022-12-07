import Button from "../../Components/Button";
import HeadingComp from "../../Components/HeadingComp";

const Details = () => {
  return (
    <div className="full isolate relative mt-[80px] xl:mt-[120px]">
      <div className="absolute rounded-full top-[45%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  left-0 w-[700px] h-[700px]"></div>
      <div className="absolute rounded-full top-[90%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  right-0 w-[700px] h-[700px]"></div>
      <div className="section flex-col gap-[80px] xl:gap-[150px]">
        <div className="flex justify-center xl:flex-row flex-col items-center gap-[50px] xl:gap-[100px] ">
          <img
            src="/usability.png"
            className="max-w-[350px] sm:max-w-[500px] xl:max-w-[600px] object-contain w-full"
            alt=""
          />
          <div className="flex justify-center items-center text-center xl:text-left xl:items-start flex-col gap-[15px]">
            <HeadingComp sub="Usability" head="Usability" />
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              Swiss Crypto Watches can be used on NFT frames, on Smart phones
              and Smart watches.
            </p>
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              They will show exact local time on the devices. (Air Drop,
              available in Q1 2023)
            </p>
            <Button name="Learn More" classes="mt-5" />
          </div>{" "}
        </div>
        <div className="flex justify-center xl:flex-row flex-col-reverse items-center gap-[50px] xl:gap-[100px] ">
          <div className="flex justify-center items-center text-center xl:text-left xl:items-start flex-col gap-[15px]">
            <HeadingComp sub="Coin" head="Swiss Crypto Watch Coin (SCWC)" />
            <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
              Swiss Crypto Watch Coin will be tradable in early 2023, followed
              by a dedicated strictly limited watch collection only payable with
              the Co.
            </p>
            <Button name="Learn More" classes="mt-5" />
          </div>{" "}
          <img
            src="/coin.png"
            className="max-w-[350px] sm:max-w-[500px] xl:max-w-[600px] object-contain w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
