import React from "react";
import "../../../css/profile.css";
const OrderCard = ({ order }) => {
  return (
    <>
      <div className="ordercard col-12 m-auto mb-2 p-lg-3 p-md-3 p-2">
        <div className="ordercard-row1 row d-flex justify-content-between mb-3">
          <div className="ordercard-row1-col1 row d-flex justify-content-start pe-0">
            <div className="ordercard-part1 p-0 ms-3 me-2">
              <div
                className={`ordercard-status ${
                  order.status === "Pending"
                    ? "pending-border"
                    : order.status === "Delivered"
                    ? "delivered-border"
                    : "cancelled-border"
                }`}
              >
                {order.status === "Pending" ? (
                  <i className="fa-solid fa-bolt pending-icon"></i>
                ) : order.status === "Delivered" ? (
                  <i className="fa-solid fa-check delivered-icon"></i>
                ) : (
                  <i className="fa-solid fa-xmark cancelled-icon"></i>
                )}
              </div>
            </div>
            <div className="ordercard-part2 p-0 ms-lg-3 ms-md-3 ms-1">
              <p className="ordercard-id mb-0">{order.id}</p>
              <p
                className={`ordercard-price mb-0 me-lg-3 me-md-3 me-1 ${
                  order.discount !== 0 ? "strike" : ""
                }`}
              >
                {order.price} EGP
              </p>
              {order.discount !== 0 ? (
                <p className="ordercard-newprice">
                  {order.price - order.discount} EGP
                </p>
              ) : (
                <p> </p>
              )}
            </div>
          </div>
          <div className="ordercard-row1-col2 ordercard-part3 m-0">
            <p
              className={`ordercard-statusT mb-1 ${
                order.status === "Pending"
                  ? "pending-text"
                  : order.status === "Delivered"
                  ? "delivered-text"
                  : "cancelled-text"
              }`}
            >
              {order.status === "Pending"
                ? "On the Way"
                : order.status === "Delivered"
                ? "Completed"
                : "Cancelled"}
            </p>
            <p className="ordercard-date mb-0">PD: {order.placeDateString}</p>
            {order.deliveredDate !== null ? (
              <div className="p-0">
                <p className="ordercard-date mb-0">
                  DD: {order.deliveryDateString}
                </p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="ordercard-row2 row d-flex justify-content-between align-content-center ps-lg-3 ps-md-3 ps-2">
          <div className="ordercard-products row d-flex justify-content-start">
            {order.products.slice(0, 3).map((item, index) => (
              <div key={index} className="ordercard-img-cont px-0 ">
                <img
                  className="ordercard-img ms-0"
                  src={item.product.image}
                  alt="err"
                />
              </div>
            ))}
            {order.products.length > 3 ? (
              <div className="ordercard-extraP pe-0">
                +{order.products.length - 3}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="ordercard-getD">
            <i class="fa-solid fa-circle-arrow-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
