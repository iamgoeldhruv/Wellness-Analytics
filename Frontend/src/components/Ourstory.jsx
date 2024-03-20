import React from "react";
import storyim from "../images/DesignerD.png";
import './OurStory.css';
const Ourstory=({})=>{
  return(
    <div>
      <section id="our_story">
          <div className="our-story-img">
            <img src={storyim} alt="" />
          </div>
          <div className="our-stroy-text">
            <h2>About Us!</h2>
            <p>
              As a medical professional passionate about accessible healthcare,
              I created this website to bridge the gap between expertise and
              patients. Recognizing the need for reliable information in an era
              of overwhelming data, I curated resources to empower individuals
              in making informed health decisions.{" "}
            </p>
            <p>
              Through user-friendly interfaces and trustworthy content, this
              platform aims to democratize medical knowledge, fostering a
              healthier, more informed society. My vision is to cultivate a
              virtual space where individuals feel supported, understood, and
              equipped to navigate their health journey with confidence and
              clarity.
            </p>
            <p />
            <div className="story-numbers-container">
              <div className="story-numbers-box s-n-box1">
                <strong>1000+</strong>
                <span>Happy Customers</span>
              </div>
              <div className="story-numbers-box s-n-box2">
                <strong>4+</strong>
                <span>Expert Services</span>
              </div>
              <div className="story-numbers-box s-n-box3">
                <strong>24/7</strong>
                <span>Detailed Analysis</span>
              </div>
              <div className="story-numbers-box s-n-box4">
                <strong>106+</strong>
                <span>Award Wining</span>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};
export default Ourstory;