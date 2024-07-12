import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header id="header" data-aos="zoom-out">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">      
                <h1 data-aos="fade-up">
                  {props.data && props.data.Header ? props.data.Header.title : "Loading"}
                  <span></span>
                </h1>
                <p data-aos="fade-up">{props.data && props.data.Header? props.data.Header.paragraph : "Loading"}</p>
                <Link to='about'
                  className="btn btn-custom btn-lg page-scroll"
                  data-aos="fade-up"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};
export default Header;