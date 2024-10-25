import React, { useState, useEffect } from "react";
import img1 from "../../../media/offer1.png";
import img2 from "../../../media/offer2.png";
import img3 from "../../../media/offer3.png";
import HomeC5 from "../components/home_c5";
import "../../../css/home.css";
const offers = [
  {
    p1: "Splashing Summer Sale",
    p2: "Two portions of fresh, wild-caught salmon fillets, A bag of succulent, deveined shrimp for quick and easy meals, Flaky whitefish fillets that can be grilled or baked, and Tender sweet scallops for a gourmet seafood experience.",
    img: img1,
  },
  {
    p1: "Fresh Catch Fiesta",
    p2: "Delight in a medley of ocean flavors with our combo pack of cod, shrimp, and scallops, all sustainably sourced and ready for your favorite recipes.",
    img: img2,
  },
  {
    p1: "Seaside Savings",
    p2: "Enjoy a taste of the sea with our special bundle of mussels, clams, and calamari, perfect for seafood lovers and gourmet cooks alike.",
    img: img3,
  },
];

const HomeS5 = () => {
  const [currentOffer, setCurrentOffer] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentOffer((prevOffer) => (prevOffer + 1) % offers.length);
        setFadeOut(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home__section5 py-4">
      <p className="home__section5-title pb-0">SPECIAL OFFERS</p>
      <HomeC5
        p1={offers[currentOffer].p1}
        p2={offers[currentOffer].p2}
        img={offers[currentOffer].img}
        fadeOut={fadeOut}
      />
    </div>
  );
};

export default HomeS5;
