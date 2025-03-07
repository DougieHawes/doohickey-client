import { Link } from "react-router-dom";

import darkModeLogo from "../../display/media/images/icons/darkModeLogo.png";
import lightModeLogo from "../../display/media/images/icons/lightModeLogo.png";

import ModeToggle from "./ModeToggle";

import { Link1 } from "../utils/links";

import "./style.scss";

const Header = ({ darkmode, onClick }) => {
  return (
    <header className="header">
      <div className="header-title-container">
        <Link className="header-title-link" to="/">
          <img
            className="header-title-logo"
            src={darkmode ? darkModeLogo : lightModeLogo}
            alt=""
          />
          <h1 className="header-title">Doohickey</h1>
        </Link>
      </div>
      <nav className="header-navbar">
        <Link1 to="/products" text="products" />
        <Link1 to="/about" text="about" />
        <Link1 to="/contact" text="contact" />
      </nav>
      <ModeToggle darkmode={darkmode} onClick={onClick} />
    </header>
  );
};

export default Header;
