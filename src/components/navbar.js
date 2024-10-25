import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import "../css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          FISH BOX
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="fa-solid fa-bars text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-link nav-line ms-2 text-light">
              <Link to="/" className="text-light">
                HOME
              </Link>
            </li>
            <li className="nav-link nav-line ms-2 text-light">
              <Link to="/shop" className="text-light">
                SHOP
              </Link>
            </li>
            <li className="nav-link nav-line ms-2 text-light">
              <Link to="/about" className="text-light">
                ABOUT
              </Link>
            </li>
            <li className="nav-link nav-line ms-2 text-light">
              <Link to="/recipes" className="text-light">
                RECIPES
              </Link>
            </li>
            <li className="nav-link nav-line ms-2 text-light">
              <Link to="/blogs" className="text-light">
                BLOGS
              </Link>
            </li>
            <li className="nav-link nav-line ms-2 text-light">
              <Link to="/contact" className="text-light">
                CONTACT
              </Link>
            </li>
            <li className="nav-link ms-2">
              <Link to="/profile">
                <i className="fa-regular fa-user profile-i text-light"></i>
              </Link>
            </li>
            <li className="nav-link ms-2">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping cart-i text-light"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
