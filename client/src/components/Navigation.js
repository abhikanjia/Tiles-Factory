import React from "react";
import { Link } from "react-router-dom";

import { useLogin } from './LoginContext';
export const Navigation = (props) => {
  
  const { isLoggedIn, logout } = useLogin();
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img src="/img/linumlogo.png" alt="logo" className="logo" />
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/" className="page-scroll">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="page-scroll">
                About
              </Link>
            </li>

{isLoggedIn ? (
            <li>
            <Link to="/login/admindisplay" className="page-scroll">
              Products
            </Link>
          </li> 
          ) : (
            <li>
            <Link to="/products" className="page-scroll">
              Products
            </Link>
          </li> 
          )}

            <li>
              <Link to="/contact" className="page-scroll">
                Contact Us
              </Link>
            </li>


  {isLoggedIn ? (
            <li style={{ marginTop: '10px' }}>
              <div>
                <button onClick={logout} className="btn btn-primary">
                  Logout
                </button>
                
              </div>
            </li>
          ) : (
            <li style={{ marginTop: '10px' }}>
              <div>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              </div>
            </li>
          )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
