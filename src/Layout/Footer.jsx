import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faDiscord,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="relative overflow-y-hidden pt-[250px] -mt-[174px] isolate full bg-[rgba(255,255,255,0.06)]">
      <div className="absolute rounded-full top-[40%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  left-0 w-[700px] h-[700px]"></div>
      <div className="section gap-7 flex-col">
        <img src="/logo.png" alt="" />
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="#home"
            className="text-white capitalize font-normal text-lg leading-[1] no-underline"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white capitalize font-normal text-lg leading-[1] no-underline"
          >
            About
          </a>
          <a
            href="#roadmap"
            className="text-white capitalize font-normal text-lg leading-[1] no-underline"
          >
            Roadmap
          </a>
          <a
            href="#team"
            className="text-white capitalize font-normal text-lg leading-[1] no-underline"
          >
            Team
          </a>
          <a
            href="#details"
            className="text-white capitalize font-normal text-lg leading-[1] no-underline"
          >
            Company Details
          </a>

          <a
            href="#contact"
            className="text-white capitalize font-normal text-lg leading-[1] no-underline"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.instagram.com/swisscryptowatch/"
            className="text-white transition-all duration-500 hover:bg-blue hover:border-blue border-[1px] h-[48px] w-[48px] grid place-items-center border-white border-solid rounded-full text-[20px]"
            target={"blank"}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com/CHCryptoWatch/"
            className="text-white transition-all duration-500 hover:bg-blue hover:border-blue border-[1px] h-[48px] w-[48px] grid place-items-center border-white border-solid rounded-full text-[20px]"
            target={"blank"}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="text-white transition-all duration-500 hover:bg-blue hover:border-blue border-[1px] h-[48px] w-[48px] grid place-items-center border-white border-solid rounded-full text-[20px]"
            target={"blank"}
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>{" "}
          <a
            href="https://www.youtube.com/channel/UCXXo8c67GfYPNtpJeQ3V4fQ"
            className="text-white transition-all duration-500 hover:bg-blue hover:border-blue border-[1px] h-[48px] w-[48px] grid place-items-center border-white border-solid rounded-full text-[20px]"
            target={"blank"}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.facebook.com/swisscryptowatch"
            className="text-white transition-all duration-500 hover:bg-blue hover:border-blue border-[1px] h-[48px] w-[48px] grid place-items-center border-white border-solid rounded-full text-[20px]"
            target={"blank"}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
      <div className="flex justify-center w-full items-center py-6 mt-8 bg-[rgba(255,255,255,0.04)]">
        <p className="text-white font-normal text-center text-base">
          Copyright © 2023{" "}
          <a href="#" target={"blank"} className="no-underline text-blue">
            Swisscryptowatch.com
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
