import React from "react";
import "../../../css/home.css";
import img1 from "../../../media/section2-img1.png";
import img2 from "../../../media/section2-img2.png";
import img3 from "../../../media/section2-img3.png";
import HomeC2 from "../components/home_c2";
const HomeS2 = () => {
  const data = [
    {
      image: img1,
      p1: "1. Build Your Order",
      p2: "Start by selecting from a wide variety of fresh and delicious seafood options available in our store. Customize your order to your liking, choosing the type and quantity of seafood that suits your culinary preferences.",
      extra: "me-lg-3 me-md-3 me-sm-3 m-0",
    },
    {
      image: img2,
      p1: "2. Catch, Pack & Ship",
      p2: "We source the freshest seafood directly from the sea, ensuring it meets our high-quality standards. Your selection is then carefully packed and shipped to your doorstep, guaranteeing best arrivance.",
      extra: "me-lg-3 me-md-3 me-sm-3",
    },
    {
      image: img3,
      p1: "3. Deliver, Eat & Enjoy",
      p2: "As your order arrives, you'll be greeted with the enticing aroma of the sea. Unpack your seafood delights. Whether you're a seasoned chef or a home cook. Dive into a world of taste, and freshness with every bite.",
      extra: "",
    },
  ];

  return (
    <>
      <div className="home__section2 mb-4 p-lg-3 p-md-3 p-sm-2 p-1">
        <p className="home__section2-title mt-5 mb-4">HOW IT WORKS?</p>
        <div className="home__section2-row d-flex justify-content-center flex-wrap px-lg-5 px-md-5 px-sm-2 px-1">
          {data.map((item, index) => (
            <HomeC2
              key={index}
              img={item.image}
              p1={item.p1}
              p2={item.p2}
              extra={item.extra}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeS2;
