import React from "react";
import s from "./Nav.module.scss";
import Logo from "../../assets/logo/Logo.svg";
import { navRoutes } from "../../constants/navRoutes";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../../assets/svg/hamburger_menu.svg";
import closeIcon from "../../assets/svg/close.png";
import { useState } from "react";
import { useEffect } from "react";

export const Nav = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  // const displayMenu = { display: `${showMenu ? "flex" : "none"}` };

  const displayMenu = showMenu ? s.navbarMobile : s.navbar;
  const hamburgerIcon = showMenu ? closeIcon : menuIcon;

  const handleHamburgerClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="widthContainer">
      <Link to="/">
        <img className={s.logo} src={Logo} alt="logo" />
      </Link>
      <img
        onClick={handleHamburgerClick}
        className={s.menuIcon}
        src={hamburgerIcon}
        alt="Hamburger menu"
      />
      <ul className={`${displayMenu} headline`}>
        {Object.values(navRoutes).map((navItem) => (
          <li key={navItem.path}>
            {/* <Link className="menu-link" to={navItem.path}> */}
            <button
              onClick={() => {
                setShowMenu(false);
                navigate(navItem.path);
              }}
            >
              {navItem.title}
            </button>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};