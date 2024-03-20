import React from 'react';
import LeftGreenBox from './LeftPurpleBox';
import RightBlueBox from './RightBlueBox';
import './TwoBoxes.css';
const TwoBoxes=({})=>{
  return(
    <div>
        <section id="why-choose-us">
        <LeftGreenBox></LeftGreenBox>
        <RightBlueBox></RightBlueBox>
      </section>
    </div>
  );
};

export default TwoBoxes;