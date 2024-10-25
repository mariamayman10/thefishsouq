import React, { useState, useEffect } from "react";
import "../../../css/home.css";

const HomeS1 = () => {
  const slideContent = [
    {
      title: "FRESH & TASTY",
      description:
        "Fish Box is home to the world's best tasting fresh fish online, offering an enticing array of seafood that transcends the ordinary.",
    },
    {
      title: "DIVE IN OCEAN",
      description:
        "We invite you to embark on a culinary journey that's as captivating as the vast ocean itself.",
    },
    {
      title: "WIDE VARIETY",
      description:
        "A wide variety of naturally caught fish than any fishmonger or supermarket.",
    },
    {
      title: "FEW CLICKS!",
      description:
        "With just a few clicks, you can bring the sea's bounty to your doorstep.",
    },
    {
      title: "CULINARY DELIGHTS",
      description:
        "Discover a world of culinary delights that promises freshness, quality, and a symphony of tastes.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (currentSlide) => (currentSlide + 1) % slideContent.length
      );
    }, 3500);

    setTimer(interval);

    return () => clearInterval(interval);
  }, [slideContent.length]);

  const navigateSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home__section1-slider-container p-0 fluid-container">
      <div className="home__section1-slider">
        {slideContent.map((slide, index) => (
          <div
            key={currentSlide === index ? `${index}-${Date.now()}` : index}
            className={`home__section1-slide ${
              index === currentSlide ? "home__section1-active" : ""
            }`}
          >
            <div className="home__section1-ps">
              <p className="home__section1-p1">{slide.title}</p>
              <p className="home__section1-p2">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="home__section1-dots">
        {slideContent.map((_, index) => (
          <span
            key={index}
            className={`home__section1-dot ${
              index === currentSlide ? "home__section1-active" : ""
            }`}
            onClick={() => navigateSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomeS1;
