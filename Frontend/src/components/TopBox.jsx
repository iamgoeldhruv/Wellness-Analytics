import React from "react";
import TopBody from "./TopBody";
import Navbar from "./Navbar";
import './TopBox.css';
const Topbox = ({}) => {
  return (
    <div>
      <section id="hero">
        <Navbar />
        <TopBody />
      </section>
    </div>
  );
};

export default Topbox;
