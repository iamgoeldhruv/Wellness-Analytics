import React from "react";
import Link from "./Link";
import Topbox from "./TopBox";
import Serviceinfo from "./Serviceinfo";
import Ourservices from "./Ourservices";
import TwoBoxes from "./TwoBoxes";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
// import {useNavigate} from "react-router-dom";
const Homepage= ({}) => {
  return (
      <>
        <Link />
        <Topbox />
        <Serviceinfo />
        <Ourservices />
        <TwoBoxes />
        <Testimonial />
        <Footer />
      </>
    
  );
};
export default Homepage;