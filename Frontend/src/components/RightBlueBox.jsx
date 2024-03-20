import React from "react";
import './RightBlueBox.css';
const RightBlueBox = ({}) => {
  return (
    // <div>
      <div className="why-choose-us-right">
        <h3>
          Emergency?
          <br />
          Contact Us
        </h3>
        <p>
          Urgent medical assistance needed? Contact us immediately for swift
          support and guidance. Our team is here 24/7 to respond promptly to
          your medical emergencies. Don't hesitate to reach out in case of a
          medical crisis – your well-being is our priority.
        </p>
        <div className="w-right-contact-container">
          <div className="w-right-contact-box">
            <i className="fa-solid fa-phone" />
            <div className="w-right-contact-box-text">
              <span>Call Us Now</span>
              <strong>+91-6205303611</strong>
            </div>
          </div>
          <div className="w-right-contact-box">
            <i className="fa-solid fa-envelope" />
            <div className="w-right-contact-box-text">
              <span>Mail Us</span>
              <strong>graj25776@gmail.com</strong>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};
export default RightBlueBox;
