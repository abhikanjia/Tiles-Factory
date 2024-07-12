import { useEffect, useState } from "react";
import AdminCard from "./AdminCard";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
const AdminDisplay = () => {
  
  const [mainProduct, setMainProduct] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [contactForm,setContactForm]=useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    callAPI();
  }, []);
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  const callAPI = async () => {
    const data = await fetch('http://localhost:3003/products');
    const json = await data.json();
    setMainProduct(json);
    setFilteredRestaurant(json);
  };

  useEffect(() => {
    callAPI1();
  }, []);
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  const callAPI1 = async () => {
    const data1 = await fetch('http://localhost:3003/entries');
    const json1 = await data1.json();
    setContactForm(json1);
  };

  const handleDelete=(id)=>{  
    const confirmDelete= window.confirm("are you sure you want to delete the product??");
     if(confirmDelete){
     fetch(
       "http://localhost:3003/entry/"+id,
       {
         method: "DELETE",
       }
     )
     .then((res) => {
      alert("entry delete successful")
        navigate("/");
     });
    }
    else{
     //user cancel
    }

   }
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
            <li className="row">
              <div><Link to='/product/adminadd' className="btn btn-success">Add Product</Link></div>
            </li>
          </ul>
        </div> 
        <div className="card-list"  data-aos="zoom-in">
          {filteredRestaurant.map((card) => (
            <AdminCard key={card._id} tilesMainData={card}  />
          ))}
        </div>
        <div style={{marginLeft:'200px'}}>
          <h1 style={{marginTop:'100px',marginLeft:'400px'}}>Contact US From Entry</h1>
          <table style={{ width: '90%', borderCollapse: 'collapse',marginLeft:"80px" }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', backgroundColor: '#f2f2f2', borderBottom: '1px solid #ddd' }}>Name</th>
          <th style={{  textAlign: 'left', backgroundColor: '#f2f2f2', borderBottom: '1px solid #ddd' }}>Email</th>
          <th style={{ textAlign: 'left', backgroundColor: '#f2f2f2', borderBottom: '1px solid #ddd' }}>Message</th>
          <th style={{  textAlign: 'left', backgroundColor: '#f2f2f2', borderBottom: '1px solid #ddd' }}>Actions</th>
        </tr>
      </thead>
      <tbody> 
      {contactForm.map(item => (
          <tr key="item._id" style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>{item.name}</td>
            <td style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>{item.email}</td>
            <td style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>{item.message}</td>
            <td style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>
              <button style={{  border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#f44336', color: 'white' }}
               onClick={(e)=>handleDelete(item._id)}
              >Delete</button>
            </td>
          </tr>
      ))}
      </tbody>
    </table>
        </div>
      </div>
    </>
  );
};

export default AdminDisplay;

