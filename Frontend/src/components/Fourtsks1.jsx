import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { useNavigate } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import Smartinterpretation from './Smartinterpretation';

const Fourtsks1 = ({}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const swiper = new Swiper('.mySwiperservices', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
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
    });
    document.querySelector('.swiper-button-prev').addEventListener('click', () => {
      swiper.slidePrev();
    });

    document.querySelector('.swiper-button-next').addEventListener('click', () => {
      swiper.slideNext();
    });
    swiper.on('slideChange', () => {
      const prevButton = document.querySelector('.swiper-button-prev');
      const nextButton = document.querySelector('.swiper-button-next');
      if (swiper.isBeginning) {
        prevButton.classList.add('swiper-button-disabled');
      } else {
        prevButton.classList.remove('swiper-button-disabled');
      }
      if (swiper.isEnd) {
        nextButton.classList.add('swiper-button-disabled');
      } else {
        nextButton.classList.remove('swiper-button-disabled');
      }
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  const LabreportClick = () => {
    navigate('/labreport/');
  };

  const SmartinterpretationClick = () => {
    navigate('/smartinterpretation/');
  };

  const handleVisualClick = () => {
    navigate('/barcharts/');
  };
  const PdfClick = () => {
    navigate('/pdf/');
  };
  const handlebodychartclick=()=>{
    navigate('/bodychart/');
  }


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
              <div className="service-box s-box4">
                <i className="fa-solid fa-file-download"></i>
                <strong>Download PDF</strong>
                <p>Click here to download the PDF of all your Lab Reports at once. we provide you Customized lab reports.</p>
                <button style={{ backgroundColor: 'rgb(210 212 96)' }} onClick={PdfClick}>Get It!</button>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box s-box3">
                <i className="fa-solid fa-tooth"></i>
                <strong>Smart Interpretation</strong>
                <p>Smart Interpretation sub-feature that goes beyond simply presenting your data. It analyzes your results.</p>
                <button style={{ backgroundColor: 'rgb(232 186 205)' }} onClick={SmartinterpretationClick}>Get It!</button>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="service-box s-box2">
                <i className="fa-solid fa-eye"></i>
                <strong>Body Chart</strong>
                <p>The Health Report body chart displays a human body picture, alongside your key health data.</p>
                <button style={{ backgroundColor: 'rgb(147 230 168)' }} onClick={(handlebodychartclick) }>Get It!</button>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box s-box1">
                <i className="fa-solid fa-face-smile"></i>
                <strong>Visual Info</strong>
                <p>The Smart Report has a "Health Advisory" feature that shows medical advice into an engaging and actionable visual experience.</p>
                <button style={{ backgroundColor: '#7393B3' }} onClick={handleVisualClick}>Get It!</button>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box s-box5">
                <i className="fa-solid fa-user-doctor"></i>
                <strong>Lab Report</strong>
                <p>A lab report gives users a lot of details about their test results. They're great for doctors who want to use this information to help diagnose.</p>
                <button style={{ backgroundColor: 'rgb(188 200 212)' }} onClick={LabreportClick}>Get It!</button>
              </div>
            </div>
            
            {/* Add another slide here */}
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourtsks1;
