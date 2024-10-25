import React from "react";
import "../../../css/about.css";

const AboutC4 = ({ img, p1, p2 }) => {
  return (
    <>
      <div className="Card" style={{ width: "17rem" }}>
        <div className="layout">
          <i className="fa-solid fa-link"></i>
        </div>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text1">{p1}</p>
          <p className="card-text2">{p2}</p>
        </div>
      </div>
    </>
  );
};
export default AboutC4;
