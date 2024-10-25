import React, { useState } from "react";
import "../../css/profile.css";
import MyInfo from "./sections/my_info";
import SavedCards from "./sections/saved_cards";
import Rewards from "./sections/rewards";
import MyOrders from "./sections/my_orders";
import Drawer from "./components/drawer";

const Profile = () => {
  const [selectedContent, setSelectedContent] = useState("MyInfo");

  const renderContent = () => {
    switch (selectedContent) {
      case "Info":
        return <MyInfo />;
      case "Cards":
        return <SavedCards />;
      case "Rewards":
        return <Rewards />;
      case "Orders":
        return <MyOrders />;
      default:
        return <MyInfo />;
    }
  };

  return (
    <>
      {/* Section 1 */}
      <div className="profile__section1 mb-5">
        <p className="profile__section1-p1">My Account</p>
        <span className="profile__section1-sp1">HOME</span>
        <span className="profile__section1-sp2">&nbsp; | &nbsp;</span>
        <span className="profile__section1-sp3">My Account</span>
      </div>
      {/* Drawer */}
      <div className="mb-5">
        <Drawer onSelect={setSelectedContent} />
      </div>
      {/* Content */}
      {renderContent()}
    </>
  );
};

export default Profile;
