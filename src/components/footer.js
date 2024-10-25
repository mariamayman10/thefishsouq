import React from "react";
import "../css/footer.css";
import img from "../media/map_bg.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer d-flex flex-wrap p-5 m-auto">
        <div className="footer-col1 me-5 mb-3">
          <p className="footer-col1-p1">FISH BOX STORE</p>
          <p className="footer-col1-p2">
            Opened in 2017, Fish Box Store is one of the finest fish markets in
            Alexandria. We offer the world's largest assortment of seafood
            online. Order fresh, healthy and delicious seafood direct from the
            sea with next-day delivery to your door.
          </p>
          <img src={img} className="footer-col1-img" />
        </div>
        <div className="footer-col2 me-5 mb-3">
          <p className="footer-col2-p1">Explore</p>
          <a href="#" className="footer-links">
            Shop
          </a>
          <a href="#" className="footer-links">
            Blogs
          </a>
          <a href="#" className="footer-links">
            Recipes
          </a>
          <a href="#" className="footer-links">
            Coupons
          </a>
        </div>
        <div className="footer-col3 me-5 mb-3">
          <p className="footer-col3-p1">Useful Links</p>
          <a href="#" className="footer-links">
            FAQ
          </a>
          <a href="#" className="footer-links">
            Contact Us
          </a>
          <a href="#" className="footer-links">
            Shipping and Delivery
          </a>
        </div>
        <div className="footer-col4 me-5 mb-3">
          <p className="footer-col4-p1">Learn About Us</p>
          <a href="#" className="footer-links">
            About Us
          </a>
          <a href="#" className="footer-links">
            Refund Policy
          </a>
          <a href="#" className="footer-links">
            Privacy Policy
          </a>
        </div>
        <div className="footer-col5 me-5 mb-3">
          <p className="footer-col5-p1">Follow Us</p>
          <div className="footer-icon">
            <a href="#" className="footer-links">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="footer-icon">
            <a href="#" className="footer-links">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="footer-icon">
            <a href="#" className="footer-links">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
