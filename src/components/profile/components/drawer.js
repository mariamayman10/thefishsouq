import React, { useState } from "react";
import "../../../css/profile.css";
const Drawer = ({ onSelect }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleItemClick = (content) => {
    onSelect(content);
  };
  const handleCategClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <>
      <div
        className={`profile__drawer ${
          isActive ? "active" : ""
        } row d-flex justify-content-between align-content-center col-lg-4 col-md-5 col-sm-7 col-12 m-auto ps-2 pe-3`}
      >
        {["Info", "Orders", "Rewards", "Cards", "Log out"].map(
          (item, index) => (
            <div
              key={index}
              className={`${
                selectedItem === index ? "selected" : ""
              } profile__drawer-item m-0 p-0`}
              onClick={() => handleCategClick(index)}
            >
              <a className=" mb-0" onClick={() => handleItemClick(item)}>
                <i
                  className={`fa-solid ${
                    index === 0
                      ? "fa-id-card"
                      : index === 1
                      ? "fa-list"
                      : index === 2
                      ? "fa-gift drawer-icon"
                      : index === 3
                      ? "fa-credit-card"
                      : "fa-arrow-right-from-bracket"
                  }`}
                ></i>
                <span className="profile__drawer-span">{item}</span>
              </a>
              <span className="profile__drawer-tooltip">{item}</span>
            </div>
          )
        )}
        <div className="profile__drawer-toggle p-0 ms-0">
          <i
            className={`${
              isActive
                ? "fas fa-chevron-circle-up"
                : "fas fa-chevron-circle-down"
            } toggle`}
            onClick={handleClick}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Drawer;
