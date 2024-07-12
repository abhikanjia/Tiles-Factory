import { useEffect, useState } from "react";
import MainCard from "./MainCard";
import AOS from "aos";
import 'aos/dist/aos.css';
const Products = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  const [mainProduct, setMainProduct] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    const data = await fetch('http://localhost:3003/products');
    const json = await data.json();
    setMainProduct(json);
    setFilteredRestaurant(json);
  };

  return (
    <>
      <div>
         <div className="sidebar">
          <ul className="sidebar-list">
            <li className="row" onClick={() => setFilteredRestaurant(mainProduct)}>
              <div>All products</div>
            </li>
            <li className="row" onClick={() => setFilteredRestaurant(mainProduct.filter((tile) => tile.tcatagory === "Wall Tiles"))}>
              <div>Wall Tiles</div>
            </li>
            <li className="row" onClick={() => setFilteredRestaurant(mainProduct.filter((tile) => tile.tcatagory === "Parking Tiles"))}>
              <div>Parking Tiles</div>
            </li>
            <li className="row" onClick={() => setFilteredRestaurant(mainProduct.filter((tile) => tile.tcatagory === "GVT"))}>
              <div>GVT</div>
            </li>
            <li className="row" onClick={() => setFilteredRestaurant(mainProduct.filter((tile) => tile.tcatagory === "Porceline Tiles"))}>
              <div>Porceline Tiles</div>
            </li>
          </ul>
        </div> 
        <div className="card-list" data-aos="zoom-in">
          {filteredRestaurant.map((card) => (
            <MainCard key={card._id} tilesMainData={card}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;


