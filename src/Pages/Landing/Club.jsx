import Button from "../../Components/Button";
import HeadingComp from "../../Components/HeadingComp";

const Club = () => {
  return (
    <div className="full bg-[rgba(255,255,255,0.06)] mt-[100px]">
      <div className="max-w-max w-full px-5 py-[70px] xl:py-[100px] flex justify-center xl:flex-row flex-col-reverse items-center gap-[50px] xl:gap-[100px] ">
        <div className="flex justify-center items-center text-center xl:text-left xl:items-start flex-col gap-[15px]">
          <HeadingComp
            sub="Swiss Cryptowatch Club"
            head="Welcome to Swiss Cryptowatch Club (SCWC)"
          />
          <p className="text-white text-base sm:text-[20px] leading-[30px] xl:max-w-none max-w-[600px]">
            Every buyer is automatically member of Swiss Crypto Watch Club.
            Swiss Crypto Watch Club will offer special collections and other
            amenities to their members.
          </p>
          <Button name="Learn More" classes="mt-5" />
        </div>{" "}
        <img
          src="/club.png"
          className="max-w-[500px] xl:max-w-[600px] object-contain w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Club;
