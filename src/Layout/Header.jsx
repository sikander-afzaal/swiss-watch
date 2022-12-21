import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faInstagram,
  faDiscord,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const navlinkStyles = "font-normal text-base text-white underline-none";
  return (
    <div className="full fixed left-0 top-0 bg-black z-[70]">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 left-0 w-full h-full bg-[#000] opacity-70 z-[79]"
        ></div>
      )}
      <header className="flex justify-between items-center w-full max-w-max px-5 h-[100px]">
        <a href="#home">
          <img
            className="h-[60px] lg:h-[66px] object-contain"
            src="/logo.png"
            alt=""
          />
        </a>
        <div
          className={`w-full flex lg:justify-between lg:items-center lg:static fixed top-0 flex-col lg:flex-row lg:max-w-none sm:max-w-[400px] items-center max-w-full sm:items-start justify-start gap-[40px] lg:gap-0 z-[80] lg:p-0 bg-black lg:bg-transparent h-full lg:h-auto transition-all  pt-[6rem] px-[2rem] ${
            headerToggle ? "right-0" : "-right-[800px]"
          }`}
        >
          <nav className="flex justify-center lg:items-center gap-[30px] w-full flex-col lg:flex-row items-center sm:items-start">
            <a
              className={navlinkStyles}
              onClick={() => setHeaderToggle(false)}
              href="#home"
            >
              Home
            </a>
            <a
              className={navlinkStyles}
              onClick={() => setHeaderToggle(false)}
              href="#about"
            >
              About
            </a>
            <a
              className={navlinkStyles}
              onClick={() => setHeaderToggle(false)}
              href="#roadmap"
            >
              Roadmap
            </a>

            <a
              className={navlinkStyles}
              onClick={() => setHeaderToggle(false)}
              href="#team"
            >
              Team
            </a>
            <a
              className={navlinkStyles}
              onClick={() => setHeaderToggle(false)}
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <div className="flex justify-center items-center gap-[10px]">
            <a
              href="#"
              className="text-white transition-all duration-500 hover:bg-blue hover:border-blue border-[1px] h-[36px] w-[36px] grid place-items-center border-white border-solid rounded-full text-[20px]"
              target={"blank"}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="text-white transition-all duration-500 hover:bg-blue hover:border-blue border-[1px] h-[36px] w-[36px] grid place-items-center border-white border-solid rounded-full text-[20px]"
              target={"blank"}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="text-white transition-all duration-500 hover:bg-blue hover:border-blue border-[1px] h-[36px] w-[36px] grid place-items-center border-white border-solid rounded-full text-[20px]"
              target={"blank"}
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a
              href="#"
              className="text-white transition-all duration-500 hover:bg-blue hover:border-blue border-[1px] h-[36px] w-[36px] grid place-items-center border-white border-solid rounded-full text-[20px]"
              target={"blank"}
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="#"
              className="text-white transition-all duration-500 hover:bg-blue hover:border-blue border-[1px] h-[36px] w-[36px] grid place-items-center border-white border-solid rounded-full text-[20px]"
              target={"blank"}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
        <img
          onClick={() => {
            setHeaderToggle((prev) => !prev);
          }}
          src="/menu.png"
          alt=""
          className="lg:hidden block w-6 h-[18px] cursor-pointer relative z-[81]"
        />
      </header>
    </div>
  );
};

export default Header;
