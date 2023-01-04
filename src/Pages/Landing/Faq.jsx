import FaqTab from "../../Components/FaqTab";
import HeadingComp from "../../Components/HeadingComp";

const Faq = () => {
  return (
    <div className="relative isolate full mt-[160px] xl:mt-[120px]">
      <div className="absolute rounded-full top-[70%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  right-0 w-[700px] h-[700px]"></div>
      <div className="section flex-col gap-3 text-center">
        <HeadingComp sub="" head="Frequently Asked Questions" />{" "}
        <p className="text-white text-base sm:text-[20px] leading-[30px] ">
          The key that unlocks you into The Swiss Cryptowatch Club
        </p>
        <div className="max-w-[1160px] flex justify-center text-left items-center flex-col w-full mt-5 gap-4">
          <FaqTab
            question="How Do I buy a CryptoWatch NFT?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          />
          <FaqTab
            question="What is the price of a CryptoWatch NFT?"
            answer="Text wird noch angepasst. Price 0.28Ethereum, Baseball collection 9ETH."
          />

          <FaqTab
            question="WHAT WILL PRICING BE FOR MINTING A CRYPTOSTALLION NFT?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          />
          <FaqTab
            question="WHERE CAN I VIEW MY NFTS?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
