import FaqTab from "../../Components/FaqTab";
import HeadingComp from "../../Components/HeadingComp";

const Faq = () => {
  return (
    <div className="relative isolate full mt-[160px] xl:mt-[120px]">
      <div className="absolute rounded-full top-[70%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  right-0 w-[700px] h-[700px]"></div>
      <div className="section flex-col gap-3 text-center">
        <HeadingComp sub="" head="Frequently Asked Questions" />{" "}
        <p className="text-white text-base sm:text-[20px] leading-[30px] "></p>
        <div className="max-w-[1160px] flex justify-center text-left items-center flex-col w-full mt-5 gap-4">
          <FaqTab
            question="HOW DO I BUY A Swiss Crypto Watch NFT ON OPENSEA?"
            answer="To buy a Swiss Crypto Watch NFT on OpenSea, you will need to create an account and connect a cryptocurrency wallet. You can then browse the available listings and 
            select the NFT you want to purchase. Once you have selected the NFT, you can review the details and 
            complete the transaction using your connected wallet."
          />
          <FaqTab
            question="WHAT DO I GET WHEN I BUY A SWISS CRYPTO WATCH?"
            answer="You get a 10 seconds video with a ticking watch, followed by an Air
          drop with the watch fully functional showing the exact time."
          />
          <FaqTab
            question="WHAT IS THE PRICE OF A Swiss Crypto Watch NFT?"
            answer="We have conducted many Discussions with team and our community and Fans. 
            We decided to offer each NFT from the Winter collection for only 0.28 ETH. 
            The special Bespoke Collection will cost 20 ETH each."
          />
          <FaqTab
            question="WHAT WILL PRICING BE FOR MINTING A Swiss Crypto Watch NFT?"
            answer="The base cost for minting a Swiss Crypto Watch NFT on OpenSea includes the cost of hosting and storing your NFT on the blockchain. 
            The minting price depends on many Factors such as the Blockchain Load.
            By using a wallet during purchasing an NFT you will see transparently the minting price before signing any Transaction. 
            Additional fees may apply for certain options or services.  Please contact OpenSea directly for a more detailed quote based on your specific needs."
          />
          <FaqTab
            question="WHERE CAN I VIEW MY NFTS?"
            answer="You can view your NFTs by connecting to Opensea using the same Wallets you have used to purchase a Swiss Crypto Watch NFT."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
