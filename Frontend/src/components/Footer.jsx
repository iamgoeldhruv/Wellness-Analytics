import React from "react";
import './Footer.css';

const Footer = ({}) => {
  return (
  <div>
    <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <title>Document</title>
  <footer>
    <div className="footerContainer">
      <div className="socialIcons">
        <a href="">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="">
          <i className="fa-brands fa-twitter" />
        </a>
        <a href="">
          <i className="fa-brands fa-google-plus" />
        </a>
        <a href="">
          <i className="fa-brands fa-youtube" />
        </a>
      </div>
      <div className="footerNav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">our Team</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footerBottom">
      <p>
        Copyright ©2024; Designed by <span className="designer">LogicLegion</span>
      </p>
    </div>
  </footer>
  </div>

  );
};

export default Footer;
