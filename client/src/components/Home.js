import { useEffect, useState } from "react";
import Header from "./Header";
import Services from "./Services";
import JsonData from "../data/data.json";
import HomeIntro from "./HomeIntro";
import AOS from "aos";
import 'aos/dist/aos.css';
const Home = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  return (
    <div className="home">

      <Header data={landingPageData}/>
      <HomeIntro data={landingPageData} />
      <Services data={landingPageData} />
      <div id="homeIntro">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <video
                loop
                muted
                autoPlay
                src="video/linum.mp4"
                style={{ maxWidth: "100%", height: "350px" }}
                data-aos="fade-right"
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="homeIntro-text">
                <h2 data-aos="fade-down">Our Global Presence</h2>
                <p data-aos="fade-up">
                  At Linum Ceramic, we believe in producing highest quality
                  tiles and exporting them for the people who are in need of
                  them. As of now, our tiles are being exported to over 35
                  different countries out there in the world, including
                  countries in Middle East, South America, Africa, and Asia. As
                  a tile exporter, we believe in manufacturing the best quality
                  tiles at all times.
                </p>
                <p data-aos="fade-up">
                  You can get the same export quality tiles from us as well. The
                  exclusive collection of tiles we offer include soluble salt
                  tiles, glazed vitrified tiles, polished vitrified tiles,
                  double cost tiles, ceramic tiles, and range digital tiles.
                  Start browsing through our collection and pick the best tiles
                  we offer!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
