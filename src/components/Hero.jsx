import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Hero = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="Hero-Header">
      <nav>
        <div className="NAV-Container">
          <div className="HeroLeft">
            <img src="./Fickleflight Logo.png" alt="flight logo" />
          </div>
          <div className={` NavRight ${openMenu ? "active" : "inactive"}`}>
            <div className="nav_link">
              <Link to="/" className="link">
                {" "}
                Home
              </Link>
              <Link to="seachpage" className="link">
                {" "}
                Search
              </Link>
              <Link to="hotelhome" className="link">
                {" "}
                Hotels
              </Link>
              <Link to="/" className="link">
                {" "}
                Offers
              </Link>
            </div>
            <div className="Nav-Right-right">
              <NotificationsNoneIcon className="note-icon" />
              <img src="profile picture.png" alt="user profile" />
              <button className="booked-nav">Book Now!</button>
            </div>
          </div>
          <span className="menu-icon">
            <MenuIcon
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            />
          </span>
        </div>
      </nav>

      {/*  */}
    </header>
  );
};

export default Hero;
