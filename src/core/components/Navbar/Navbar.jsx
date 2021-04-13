import React, { useState, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { SidebarData } from "./SidebarData/SidebarData";
import duda from "../../../assets/img/AppHome/gris.png";
import "./Navbar.scss";
/* import { IconContext } from "react-icons"; */
import { IsLoggedContext } from "../../../shared/contexts/IsLoggedContext";
import { getCookieUtil } from "../../../shared/utils/getCookieUtil";
import { removeCookieUtil } from "../../../shared/utils/removeCookieUtil";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { isLogged, setIsLogged } = useContext(IsLoggedContext);

  const history = useHistory();

  function signOutButton(index) {
    if (index == 5) {
      /*  removeCookieUtil('user');
        removeCookieUtil('token');
        setIsLogged(false); */
      history.push("/login");
      localStorage.clear();
    }
  }

  return (
    <>
      {/* <IconContext.Provider value={{ color: "black" }}> */}
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className={item.cName}
                onClick={() => signOutButton(index)}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* </IconContext.Provider> */}

      <div>
        <img className="dude" src={duda} alt=""></img>
      </div>
    </>
  );
}

export default Navbar;
