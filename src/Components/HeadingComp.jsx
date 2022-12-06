import React from "react";

const HeadingComp = ({ sub, head }) => {
  return (
    <>
      <h3 className=" text-white uppercase text-[16px] sm:text-[24px] leading-[1] font-semibold">
        {sub}
      </h3>
      <h2 className=" text-blue font-bold sm:text-[60px] text-[35px] leading-[44px] sm:leading-[68px]">
        {head}
      </h2>
    </>
  );
};

export default HeadingComp;
