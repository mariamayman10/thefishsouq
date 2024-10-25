import React from "react";
import "../../css/about.css";
import img1 from "../../media/bg_feature1.jpg";
import img2 from "../../media/bg_feature2.jpg";
import img3 from "../../media/bg_feature3.jpg";
import img4 from "../../media/bg_feature4.jpg";
import img5 from "../../media/advantages1.jpg";
import img6 from "../../media/advantages2.jpg";
import img7 from "../../media/advantages3.jpg";
import img8 from "../../media/advantages4.jpg";
import AboutC2 from "./components/about_c2";
import AboutC4 from "./components/about_c4";
const About = () => {
  return (
    <>
      <section className="about__container pb-4">
        <div className="about__content d-flex justify-content-center align-items-center">
          <div className="text-content">
            <p className="main-title mb-0">ABOUT</p>
            <p className="breadcrumb">
              <a href="#">HOME</a> | <a href="#">ABOUT</a>
            </p>
          </div>
        </div>
      </section>
      <section className="about__section pt-5 m-auto">
        <div className="about__images row d-flex flex-wrap justify-content-center m-auto">
          <AboutC2 img={img1} p1={"PRODUCT"} p2={"World Class"} />
          <AboutC2 img={img2} p1={"LEADER"} p2={"Seafood"} />
          <AboutC2 img={img3} p1={"PARTNER"} p2={"Sustainable"} />
          <AboutC2 img={img4} p1={"QUALITY"} p2={"Control"} />
        </div>
      </section>
      <section className="ourStory py-5">
        <div className="storyContainer col-8 m-auto">
          <div className="storyHeader">
            <p className="p1 pb-0 mb-0">OUR</p>
            <p className="p2 pt-0">STORY</p>
          </div>
          <div className="storyBody row d-flex flex-wrap">
            <div
              className="c1 col-6 p-lg-5 p-4"
              style={{
                backgroundImage: `url(${require("../../media/map_bg.jpg")})`,
              }}
            >
              <p className="c1Header">Fish Box Founders</p>
              <p className="c1Body">
                The Fish Box was founded by two friends Tamer & Mohamed take a
                Family-running business to a higher level with the attention of
                providing individual customers, Horeca, and the wholesale
                industry with high-quality seasonal local fish & sourced seafood
                products with a deep respect for the environment; we pride
                ourselves handling artisanal fishermen. We would use our years
                of experience and skills in delivering real performance and
                health benefits to our clients offering them first-quality fish
                they can trust and then delivered to their door weekly,
                fortnightly or monthly!
              </p>
            </div>
            <div
              className="c2 col-6"
              style={{
                backgroundImage: `url(${require("../../media/team.jpg")})`,
              }}
            ></div>
          </div>
        </div>
      </section>
      <section className="container ourAdv">
        <div className="ourAdvHeader">
          <p className="p1">about</p>
          <p className="p2">OUR ADVANTAGES</p>
        </div>
        <div className="row row-cols-auto Justify-content-center">
          <AboutC4
            img={img5}
            p1={"Responsibly Sourced"}
            p2={
              "Responsibly-sourced seafood is the key to the modern, safe and profitable seafood industry."
            }
          />
          <AboutC4
            img={img6}
            p1={"Environment"}
            p2={
              "The seafood industry has a concern over climate impact, and takes responsibility in any case."
            }
          />
          <AboutC4
            img={img7}
            p1={"Staff"}
            p2={
              "Our experts work hard to maintain the quality seafood for our dear customers exclusively."
            }
          />
          <AboutC4
            img={img8}
            p1={"Marketplace"}
            p2={
              "Your business becomes benefitial by providing the customers with the best."
            }
          />
        </div>
      </section>
    </>
  );
};

export default About;
