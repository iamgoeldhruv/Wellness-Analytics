import React from 'react';
import Ourstory from './Ourstory';
import './Ourservices.css';
import Fourtsks1 from './Fourtsks1.jsx';
const Ourservices=({})=>{
  return(
    <section id="our-services">
        <Fourtsks1/>
        <Ourstory/>
        <span className="service-btn">
          Contact Us For Need Any Help And Services{" "}
          <a href="#">Let's get Started</a>
        </span>
      </section>
  );
};
export default Ourservices;