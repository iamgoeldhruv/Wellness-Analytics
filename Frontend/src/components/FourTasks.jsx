import React, { useEffect } from "react";

const Serve = ({}) => {
  useEffect(() => {
    const initializeSwiper = () => {
      if (
        typeof window !== "undefined" &&
        typeof window.Swiper !== "undefined"
      ) {
        const swiper = new window.Swiper(".mySwiperservices", {
          slidesPerView: 3,
          spaceBetween: 10,
          centeredSlides: true,
          loop: true,
          breakpoints: {
            700: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        return swiper;
      }
    };

    const swiperInstance = initializeSwiper();

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  return (
    <div>
      <div className="services-heading">
        <div className="services-heading-text">
          <strong>Our Services</strong>
          <h2>High Quality Services For You</h2>
        </div>
        <div className="service-slide-btns">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      <div className="services-box-container">
        <div className="swiper mySwiperservices">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="service-box s-box1">
                <i className="fa-solid fa-tooth" />
                <strong>Smart Interpretation</strong>
                <p>
                  Smart Interpretation sub-feature that goes beyond simply
                  presenting your data. It analyzes your results.
                </p>
                <a href="#">Get It!</a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box s-box2">
                <i className="fa-solid fa-eye"></i>
                <strong>Body Chart</strong>
                <p>
                  The Health Report body chart displays a human body picture,
                  alongside your key health data.
                </p>
                <a href="#">Get It!</a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box s-box3">
                <i className="fa-solid fa-face-smile"></i>
                <strong>Visual Info</strong>
                <p>
                  The Smart Report has a "Health Advisory" feature that shows
                  medical advice into an engaging and actionable visual
                  experience.
                </p>
                <a href="#">Get It!</a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box s-box4">
                <i className="fa-solid fa-user-doctor"></i>
                <strong>Lab Report</strong>
                <p>
                  A lab report gives users a lot of details about their test
                  results. They're great for doctors who want to use this
                  information to help diagnose.
                </p>
                <a href="#">Get It!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serve;
