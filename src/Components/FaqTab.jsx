import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const FaqTab = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`flex justify-start border-[2px] border-solid transition-all ${
        active ? "border-blue" : "border-transparent"
      } items-center bg-[rgba(255,255,255,0.06)] flex-col w-full rounded-[12px] overflow-hidden`}
    >
      <div
        onClick={() => setActive((prev) => !prev)}
        className={`w-full flex gap-3 justify-between cursor-pointer items-center p-5  `}
      >
        <h2
          className={`${
            active ? "text-blue" : "text-white"
          } font-semibold text-base md:text-[24px] md:leading-[30px] transition-colors`}
        >
          {question}
        </h2>
        <FontAwesomeIcon
          icon={active ? faMinusSquare : faPlusSquare}
          className={`${active ? "text-blue" : "text-white"} text-[35px]`}
        />
      </div>
      <div
        className={`flex overflow-hidden px-5  justify-start items-start ease-in-out  transition-all duration-500 ${
          active ? "max-h-[1000px] pb-5" : "max-h-0"
        }`}
      >
        <p className="text-white font-medium text-sm md:text-[18px] leading-[22px] md:leading-[26px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqTab;
