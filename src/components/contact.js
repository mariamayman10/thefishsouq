import React from "react";
import "../css/contact.css";
import img from "../media/Fish5.png";
const Contact = () => {
  return (
    <>
      <section>
        <div className="contact__section1 col-12">
          <div className="contact__section1-container">
            <img src={img} alt="" />
            <div className="contact__section1-txt">
              <p className="contact__section1-p1 m-3">contact</p>
              <p className="contact__section1-p2 m-2">
                <a href="#">HOME</a>
                <span className="m-2">|</span>
                <a href="#">contactS</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="contact__section2">
          <div className="contact__section2-container">
            <div className="contact__section2-d">
              <i className="fas fa-home icon"></i>
              <p className="contact__section2-d1">ADDRESS</p>
              <p className="contact__section2-d2">6562 Orange Street</p>
              <p className="contact__section2-d3">Leominster, MA 01453</p>
            </div>
            <div className="contact__section2-d">
              <i className="fas fa-phone icon"></i>
              <p className="contact__section2-d1">PHONE</p>
              <a href="#" className="contact__section2-d2">
                +123 456 789
              </a>
            </div>
            <div className="contact__section2-d">
              <i className="fas fa-envelope icon"></i>
              <p className="contact__section2-d1">EMAIL</p>
              <a href="#" className="contact__section2-d2">
                info@yoursite.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="contact__section3">
          <div className="contact__section3-container">
            <div className="contact__section3-msg">
              <p>message</p>
            </div>
            <div className="contact__section3-p1">
              <p>DROP A LINE</p>
            </div>
            <div className="contact__section3-box">
              <div className="contact__section3-box1">
                <input placeholder="Enter your name*" />
                <input placeholder="Enter your email*" />
              </div>
              <div className="contact__section3-box2">
                <input placeholder="Enter your message*" />
              </div>
            </div>
            <div className="contact__section3-btn">
              <button>SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="contact__section4">
          <div className="contact__section4-container">
            <div className="contact__section4-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218360.43204088387!2d29.789730931926467!3d31.224005332319674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1696161532617!5m2!1sen!2seg"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact__section4-content">
              <div className="contact__section4-p1">
                <p>Consider the Source</p>
              </div>
              <div className="contact__section4-p2">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
              <div className="contact__section4-btn">
                <button>VIEW SOURCING MAP</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
