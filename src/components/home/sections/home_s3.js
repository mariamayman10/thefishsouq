import React from "react";
import "../../../css/home.css";

const HomeS3 = () => {
  return (
    <>
      <div className="home__section3 pb-5">
        <p className="home__section3-subtitle pt-5">welcome</p>
        <p className="home__section3-title mb-4">FISH BOX</p>
        <div className="home__section3-content row m-auto col-lg-8 col-md-10 col-11 pb-4">
          <div className="home__section3-col1 col-lg-5 col-md-7 col-8">
            <p className="home__section3-col1-p1 mb-2 mt-lg-5 mt-md-5 mt-3 ms-lg-5 ms-md-5 ms-2">
              FISH BOX
            </p>
            <p className="home__section3-col1-p2 mb-2 me-3 ms-lg-5 ms-md-5 ms-2">
              Our fish online store offers an enticing array of seafood that
              transcends the ordinary, curated to satisfy the most discerning
              palates. Our aim is to deliver a feast that's both indulgent and
              healthful.
            </p>
            <button className="home__section3-col1-btn ms-lg-5 ms-md-5 ms-2 mb-3">
              LEARN MORE
            </button>
          </div>
          <div className="home__section3-col2 col-lg-7 col-md-5 col-4"></div>
        </div>
      </div>
    </>
  );
};

export default HomeS3;
