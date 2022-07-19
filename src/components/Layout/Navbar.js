import "./navbar.css";
import { useState } from "react";
// import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <img src={logo} alt="Logo" className="logo" />
      <a href="/" className="brand-name">
        JENGA JAMII{" "}
      </a>{" "}
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>{" "}
      </button>{" "}
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li className="center">
            <Link style={{ textDecoration: "none", color: "#eb9309" }} to="/">
              HOME{" "}
            </Link>{" "}
          </li>{" "}
          <li className="center">
            <Link style={{ textDecoration: "none", color: "#000" }} to="/about">
              ABOUT{" "}
            </Link>{" "}
          </li>{" "}
          <li className="center">
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/donations"
            >
              DONATIONS{" "}
            </Link>{" "}
          </li>{" "}
          <li className="center">
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/contact"
            >
              CONTACT US{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/login"
            >
              LOG IN{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link style={{ textDecoration: "none" }} to="/sign">
              <button className="btnGreen"> SIGN UP </button>{" "}
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </nav>
  );
}
export default Navbar;
