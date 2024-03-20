import React from 'react';
import './Serviceinfo.css';
const Serviceinfo=({})=>{
  return(
    <div>
      <section className="what-we-provide">
        <div className="w-info-box w-i-box1">
          <div className="w-info-icon">
            <i className="fa-solid fa-capsules" />
          </div>
          <div className="w-info-text">
            <strong>Specialised Service</strong>
            <p>Enjoy our specialised services.</p>
          </div>
        </div>
        <div className="w-info-box w-i-box2">
          <div className="w-info-icon">
            <i className="fa-regular fa-comments" />
          </div>
          <div className="w-info-text">
            <strong>24/7 Advanced Care</strong>
            <p>Available whenever you need us.</p>
          </div>
        </div>
        <div className="w-info-box w-i-box3">
          <div className="w-info-icon">
            <i className="fa-solid fa-square-poll-horizontal" />
          </div>
          <div className="w-info-text">
            <strong>Get Result Online</strong>
            <p>Fast and clean work.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Serviceinfo;