import React from "react";
import "../../../css/profile.css";

const MyInfo = () => {
  return (
    <>
      <div className="myinfo my-0 p-lg-4 p-md-3 p-4 col-lg-7 col-md-8 col-sm-10 col-12 mb-5 m-auto">
        <p className="myinfo-name">Mariam Ayman</p>
        <div className="myinfo-categ">
          <i className="fa-regular fa-envelope"></i>
          <span className="myinfo-prop">Email Address</span>
          <p className="myinfo-val">mariamayman3131@gmail.com</p>
        </div>
        <div className="myinfo-categ">
          <i className="fa-solid fa-phone"></i>
          <span className="myinfo-prop">Phone Number</span>
          <p className="myinfo-val">+201152812450</p>
        </div>
        <div className="myinfo-categ">
          <i className="fa-solid fa-location-dot"></i>
          <span className="myinfo-prop">Address</span>
          <div className="myinfo-location">
            <p className="myinfo-val">47 Haram Street</p>
            <input
              type="text"
              className="myinfo-input mb-lg-0 mb-md-0 mb-2 me-2"
              placeholder="New Address"
              required
            />
            <button className="myinfo-btn px-2">Add Address</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyInfo;
