import React from "react";
import s from "./Footer.module.scss";
import Logo from "../../assets/logo/logoWhiteVertical.png";
import { navRoutes } from "../../constants/navRoutes";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className={s.backColor}>
        <div className="widthContainer">
          <div className={s.container}>
            <div className={s.grid2colAdaptive}>
              <div className={s.grid2colStatic}>
                <Link to="/">
                  <img className={s.logoVertical} src={Logo} alt="logo" />
                </Link>

                <p className={s.footerTitle}>Doormat Navigation</p>
                <div></div>
                <nav className={s.footerLink}>
                  <ul className={s}>
                    {Object.values(navRoutes).map((navItem) => (
                      <li key={navItem.path}>
                        <Link to={navItem.path}>{navItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className={s.grid2colStatic}>
                <p className={s.footerTitle}>Contact</p>
                <p className={s.footerTitle}>Social</p>
                {/* </div> */}

                {/* <div className={"s.grid4col"} style={{ alignItems: "flex-start" }}> */}
                {/* <div></div> */}

                <div className={s.footerLink} style={{ lineHeight: "3" }}>
                  <a href="tel:555-666-7777">555-666-7777</a>
                  <a href="mailto:jim@rock.com">jim@rock.com</a>
                  <address style={{ lineHeight: "1.4" }}>
                    Mozilla Foundation 331 E Evelyn Ave Mountain View, CA 94041
                    USA
                  </address>
                </div>
                <div className={s.footerLink}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};