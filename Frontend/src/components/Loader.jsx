import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <section className="unique-section">
      <svg>
        <filter id="unique-gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
          ></feColorMatrix>
        </filter>
      </svg>
      <div className="unique-loader">
        <span className="unique-span" style={{ "--unique-i": 1 }}></span>
        <span className="unique-span" style={{ "--unique-i": 2 }}></span>
        <span className="unique-span" style={{ "--unique-i": 3 }}></span>
        <span className="unique-span" style={{ "--unique-i": 4 }}></span>
        <span className="unique-span" style={{ "--unique-i": 5 }}></span>
        <span className="unique-span" style={{ "--unique-i": 6 }}></span>
        <span className="unique-span" style={{ "--unique-i": 7 }}></span>
        <span className="unique-span" style={{ "--unique-i": 8 }}></span>
        <span className="unique-rotate" style={{ "--unique-j": 0 }}></span>
        <span className="unique-rotate" style={{ "--unique-j": 1 }}></span>
        <span className="unique-rotate" style={{ "--unique-j": 2 }}></span>
        <span className="unique-rotate" style={{ "--unique-j": 3 }}></span>
        <span className="unique-rotate" style={{ "--unique-j": 4 }}></span>
      </div>
    </section>
  );
};

export default Loader;
