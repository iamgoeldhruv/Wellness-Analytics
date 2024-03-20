import React from 'react';
import cartmed from '../images/Designer.png';
import './TopBody.css' // Import CSS file for animations

const TopBody = ({}) => {
  return (
    <div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="fade-in">Empowering wellness through knowledge and care.</h1>
          <p className="fade-in">
            Get your lab reports customized. We provide you fastest services by giving advance researches on your reports and after analyzing it thoroughly provide you its simplified version.
          </p>
        </div>
        <div className="hero-img fade-in">
          <img alt="" src={cartmed} />
        </div>
      </div>
    </div>
  );
};

export default TopBody;
