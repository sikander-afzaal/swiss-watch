import { useState } from "react";
// import "./Header.css";

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
      <header className="flex justify-between items-center w-full max-w-max p-5">
        <img
          className="h-[60px] lg:h-[86px] object-contain"
          src="/logo.png"
          alt=""
        />
        <div
          className={`w-full flex lg:justify-between lg:items-center lg:static fixed top-0 flex-col lg:flex-row lg:max-w-none sm:max-w-[400px] items-center max-w-full sm:items-start justify-start gap-[40px] lg:gap-0 z-[80] lg:p-0 bg-black lg:bg-transparent h-full lg:h-auto transition-all  pt-[6rem] px-[2rem] ${
            headerToggle ? "right-0" : "-right-[800px]"
          }`}
        >
          <nav className="flex justify-center lg:items-center gap-[30px] w-full flex-col lg:flex-row items-center sm:items-start">
            <a
              className={navlinkStyles}
              onClick={() => setHeaderToggle(false)}
              href="#"
            >
              Home
            </a>
            <a
              className={navlinkStyles}
              onClick={() => setHeaderToggle(false)}
              href="#"
            >
              About
            </a>
            <a
              className={navlinkStyles}
              onClick={() => setHeaderToggle(false)}
              href="#"
            >
              Roadmap
            </a>
            <a
              className={navlinkStyles}
              onClick={() => setHeaderToggle(false)}
              href="#"
            >
              Sales & Rewards
            </a>
            <a
              className={navlinkStyles}
              onClick={() => setHeaderToggle(false)}
              href="#"
            >
              Team
            </a>
            <a
              className={navlinkStyles}
              onClick={() => setHeaderToggle(false)}
              href="#"
            >
              Contact
            </a>
          </nav>
          <div className="flex justify-center items-center gap-[10px]">
            <a href="#" target={"blank"}>
              <img src="/twitter.png" alt="" />
            </a>
            <a href="#" target={"blank"}>
              <img src="/telegram.png" alt="" />
            </a>
            <a href="#" target={"blank"}>
              <img src="/reddit.png" alt="" />
            </a>
            <a href="#" target={"blank"}>
              <img src="/youtube.png" alt="" />
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
