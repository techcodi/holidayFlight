import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer>
      <div className="footer-con">
        <div className="footer-left">
          <img src="./Fickleflight Logo.png" alt="flight logo" />
          <p>
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hote
            <p>
              bookings. We also have all your flight needs in you online shop{" "}
            </p>
          </p>
          <div className="f-socials">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        <div className="footer-right">
          <div className="f-right-link">
            <b>Company</b>
            <small>About Us</small>
            <small>News</small>
            <small>Careers</small>
            <small>How we work</small>
          </div>
          <div className="f-right-link">
            <b>Support</b>
            <small>Account</small>
            <small>Support Center</small>
            <small>FAQ</small>
            <small>Accessibility</small>
          </div>
          <div className="f-right-link">
            <b>More</b>
            <small>Covid Advisory</small>
            <small>Airline Fees</small>
            <small>Tips</small>
            <small>Quarrantine Rules</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
