import React, { useEffect, useState } from "react";
import Features from "./Features";
import JsonData from "../data/data.json";
import AOS from "aos";
import 'aos/dist/aos.css';
export const About = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
        useEffect(() => {
          setLandingPageData(JsonData);
        }, []);
        useEffect(()=>{
          AOS.init({duration:1000});
        })
  return (<>
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p data-aos='fade-left'>{props.data &&props.data.About ? props.data.About.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul data-aos='zoom-in'>
                    {props.data &&props.data.About
                      ? props.data.About.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul data-aos='zoom-in'>
                    {props.data&&props.data.About
                      ? props.data.About.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Features data={landingPageData}/>

    <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="vision">
                        <img src="img/vision2-removebg-preview.png" alt="Vision Logo" className="logo"/>
                        <h2>Our Vision</h2>
                        <p className="content" data-aos='zoom-in'>We envision becoming a global leader in tile manufacturing, recognized for our innovative designs, exceptional quality, and commitment to sustainability. Our aim is to inspire creativity and transform spaces through our diverse range of premium tiles, catering to the evolving needs of architects, designers, and homeowners worldwide.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mission">
                        <img src="img/mission-removebg-preview.png" alt="Mission Logo" className="logo"/>
                        <h2>Our Mission</h2>
                        <p className="content" data-aos='zoom-in'>Our mission is to revolutionize the tile industry by delivering cutting-edge solutions that exceed customer expectations.We are dedicated to continuous improvement and leveraging advanced technologies to manufacture tiles that combine style with sustainability.Through innovation and collaboration,we strive to create enduring value for our customers and employees</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
