import React from "react";
import "../../../css/about.css";

const AboutC2 = ({ img, p1, p2, extra }) => {
  return (
    <>
      <div
        className={`about__item ${extra} mb-1`}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      >
        <div className="layout"></div>
        <div className="layout-txt">
          <p className="feature11">{p1}</p>
          <p className="feature12">{p2}</p>
        </div>
      </div>
    </>
  );
};
export default AboutC2;
