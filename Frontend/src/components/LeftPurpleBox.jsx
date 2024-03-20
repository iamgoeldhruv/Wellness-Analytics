import React from "react";
import './LeftGreenBox.css';
const LeftGreenBox=({})=>{
  return(
    // <div>
      <div className="why-choose-us-left">
          <h3>What sets us apart?</h3>
          <div className="why-choose-box-container">
            <div className="why-choose-box">
              <i className="fa-solid fa-check" />
              <div className="why-choose-box-text">
                <strong>Advance Care</strong>
                <p>We have advanced services.</p>
              </div>
            </div>
            <div className="why-choose-box">
              <i className="fa-solid fa-check" />
              <div className="why-choose-box-text">
                <strong>Online Report</strong>
                <p>Get it within minutes.</p>
              </div>
            </div>
            <div className="why-choose-box">
              <i className="fa-solid fa-check" />
              <div className="why-choose-box-text">
                <strong>Medical &amp; Surgical</strong>
                <p>Take our help whenever needed.</p>
              </div>
            </div>
            <div className="why-choose-box">
              <i className="fa-solid fa-check" />
              <div className="why-choose-box-text">
                <strong>Lab Test's</strong>
                <p>Reading long lab reports now no more a tension.</p>
              </div>
            </div>
          </div>
        </div>
    // </div>
  );
};
export default LeftGreenBox;