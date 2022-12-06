import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="container header-wrapp">
      {headerToggle && <div className="overlay"></div>}
      <header>
        <img src="/logo.png" alt="" />
        <div className={`nav-wrap ${headerToggle ? "header-active" : ""}`}>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Roadmap</a>
            <a href="#">Sales & Rewards</a>
            <a href="#">Team</a>
            <a href="#">Contact</a>
          </nav>
          <div className="social-div">
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
          className="menu-toggle"
        />
      </header>
    </div>
  );
};

export default Header;
