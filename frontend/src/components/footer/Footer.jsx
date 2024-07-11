import React from "react";
import "./footer.scss";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="logo">Easy Meal </span>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            repudiandae. Fugiat perferendis culpa officiis nobis enim
            consequuntur dolorum a dignissimos laborum earum non odit numquam
            omnis nulla expedita, asperiores qui.
          </p>
          <div className="icons">
            <FaFacebook size={"2rem"} />
            <BsTwitter size={"2rem"} />
            <FaLinkedin size={"2rem"} />
          </div>
        </div>
        <div className="footer-center">
          <h3>COMPANY</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>GET IN TOUCH</h3>
          <ul>
            <li>+254 715622198</li>
            <li>easymeal@meal.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright <BiCopyright /> 2024 - All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
