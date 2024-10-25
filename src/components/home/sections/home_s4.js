import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../../../css/home.css";
import img1 from "../../../media/section4-img1.jpeg";
import img2 from "../../../media/section4-img2.jpeg";
import img3 from "../../../media/section4-img3.jpeg";
import img4 from "../../../media/section4-img4.jpeg";
import img5 from "../../../media/section4-img5.jpeg";
import HomeC4 from "../components/home_c4";

const HomeS4 = () => {
  const data = [
    {
      image: img1,
      p1: "Wild Caught Fish",
      p2: "Wild caught fish are harvested from their natural habitats in oceans, rivers, and lakes. They are known for their distinct flavors and are often considered to be more sustainable choices.",
    },
    {
      image: img2,
      p1: "Farm-Raised Fish",
      p2: "Farm-raised fish are bred in controlled environments, ensuring a consistent supply and quality. They are carefully monitored to maintain high standards of health and nutrition.",
    },
    {
      image: img3,
      p1: "Mollusks",
      p2: "Mollusks, such as clams, oysters, and mussels, are a diverse group of shellfish found in both freshwater and marine environments. They are prized for their unique textures and rich, briny flavors.",
    },
    {
      image: img4,
      p1: "Shellfish",
      p2: "Shellfish encompass a variety of marine animals with shells, such as scallops, clams, and oysters. They are valued for their delicate taste and are often enjoyed raw, steamed, or grilled.",
    },
    {
      image: img5,
      p1: "Crustaceans",
      p2: "Crustaceans, including crabs, lobsters, and shrimp, are highly sought after for their tender, sweet meat. They are a popular choice for a variety of gourmet dishes and seafood feasts.",
    },
  ];
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(15);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1070) {
        setSlidesPerView(3);
        setSpaceBetween(15);
      } else if (screenWidth >= 675) {
        setSlidesPerView(2);
        setSpaceBetween(10);
      } else {
        setSlidesPerView(1);
        setSpaceBetween(10);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="home__section4 m-auto">
        <p className="home__section4-title mt-5">OUR PRODUCTS</p>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          initialSlide={2}
          centeredSlides={false}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="home__mySwiper col-lg-8 col-md-9 col-sm-11 col-12 pb-5"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <HomeC4 img={item.image} p1={item.p1} p2={item.p2} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeS4;
