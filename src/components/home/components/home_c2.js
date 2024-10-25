import React from "react";
import "../../../css/home.css";

const HomeC2 = ({ img, p1, p2, extra }) => {
  return (
    <>
      <div
        className={`home__section2-item col-lg-3 col-md-4 col-sm-6 col-8 ${extra}`}
      >
        <img src={img} alt="" width="150" height="150" className="mb-3" />
        <p className="home__section2-item-p1 mb-3">{p1}</p>
        <p className="home__section2-item-p2">{p2}</p>
      </div>
    </>
  );
};

export default HomeC2;
