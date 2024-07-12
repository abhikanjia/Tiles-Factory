import React from "react";
import {Link} from "react-router-dom";
const MainCard=(props)=>{ 
  const {tilesMainData}=props;

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  const cardStyle = {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  };

  const contentStyle = {
    padding: '16px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };
    return ( <>

<div style={cardContainerStyle}>
      <div style={cardStyle}>
        <img
          src={tilesMainData.timage}
          alt="Card"
          style={imageStyle}
        />
        <div style={contentStyle}>
          <h3>{tilesMainData.tname}</h3>
          <Link to={"../product/"+tilesMainData._id}>
          <button style={buttonStyle}>More Info</button>
          </Link>
        </div>
      </div>
    </div>

      </>
  );
}
export default MainCard;

