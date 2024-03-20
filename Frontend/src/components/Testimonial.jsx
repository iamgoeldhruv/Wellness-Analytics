import React from "react";
import t1 from "../images/t1.jpg";
import testim from "../images/girlf.png";
import './Testimonial.css';
const Testimonial = ({}) => {
  return (
    <div>
      <section id="testimonials">
        <div className="testimonials-heading">
          <h3>Our Patients FeedBack About Us</h3>
          <p>
            We have received some positive feedback about our services from
            users across different countries.Here is one of them.
          </p>
        </div>
        <div className="testimonials-content">
          <div className="testimonials-img">
            <img alt="" src={testim} />
          </div>
          <div className="testimonials-box-container">
            <div className="swiper mySwipertesti">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonials-box">
                    <div className="t-profile">
                      <div className="t-profile-img">
                        <img alt="" src={t1} />
                      </div>
                      <div className="t-profile-text">
                        <strong>Aarushi Goyal</strong>
                        <span>From India</span>
                        <div className="t-rating">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </div>
                    <p>
                      As a user navigating the complexities of healthcare, I
                      found solace and clarity within this website. Its
                      intuitive interface and comprehensive resources empowered
                      me to make informed decisions about my health journey. The
                      wealth of trustworthy information coupled with responsive
                      support truly sets it apart. From accessing urgent
                      assistance to delving into informative articles, my
                      experience was seamless and reassuring. Highly recommend
                      for anyone seeking reliable guidance in their medical
                      endeavors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
