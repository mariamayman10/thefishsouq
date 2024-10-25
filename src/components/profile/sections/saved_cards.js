import React from "react";
import "../../../css/profile.css";
const SavedCards = () => {
  return (
    <>
      <div class="savedcards row d-flex flex-wrap col-lg-8 col-md-9 col-sm-9 col-12 p-3 m-auto mb-5">
        <div class="card m-auto ">
          <div class="card-details p-4">
            <p>CN: **** **** **** 1234</p>
            <p>Expiry Date: 12/24</p>
          </div>
          <button class="remove-card-btn">Remove</button>
        </div>
        <div class="card m-auto">
          <div class="card-details p-4">
            <p>CN: **** **** **** 5668</p>
            <p>Expiry Date: 8/24</p>
          </div>
          <button class="remove-card-btn">Remove</button>
        </div>
      </div>
    </>
  );
};

export default SavedCards;
