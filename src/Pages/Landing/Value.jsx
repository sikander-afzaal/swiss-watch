import HeadingComp from "../../Components/HeadingComp";

const Value = () => {
  return (
    <div className="full mt-[150px]">
      <div className="section flex-col">
        <div className="flex justify-center gap-2 items-center text-center flex-col">
          <HeadingComp sub="" head="Our Values" />{" "}
        </div>
        <div className="grid items-stretch mt-[40px] gap-8 xl:gap-4 place-items-center grid-cols-1 xl:grid-cols-3 w-full">
          <ValueBox
            head="Innovation"
            img="/val1.png"
            desc="Swiss Crypto Watch is the leading NFT watch brand."
          />
          <ValueBox
            head="Utility"
            img="/val2.png"
            desc="Swiss Crypto Watches are not ment to be in your wallet only. You can use them on your NFT frames, Smart phones and Smart watches."
          />
          <ValueBox
            head="Swiss Quality & Design"
            img="/val3.png"
            desc="Swiss Crypto Watch is an idea from watch enthusiast Ronald Grob. He created the concept & developed the design with Daniel Labhart and Michael Kornmayer"
          />
        </div>
      </div>
    </div>
  );
};

export default Value;

const ValueBox = ({ img, head, desc }) => {
  return (
    <div className="flex  bg-[rgba(255,255,255,0.04)] max-w-[460px] rounded-[36px] justify-start text-center items-center flex-col w-full px-4 xl:px-5 py-[40px]">
      <img src={img} className="object-contain h-[72px]" alt="" />
      <h3 className="mt-5 text-white uppercase font-bold text-2xl sm:text-[30px] leading-[24px] xl:leading-[30px]">
        {head}
      </h3>
      <p className="text-[#9D9AA7] text-lg mt-[15px]">{desc}</p>
    </div>
  );
};
