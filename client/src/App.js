import React, { useEffect, useState } from "react";
import SmoothScroll from 'smooth-scroll';
import "./App.css";
import { Contact } from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import { About } from "./components/About";
import JsonData from "./data/data.json";
import AdminDisplay from "./components/AdminDisplay";
import TileInfo from "./components/TileInfo";
import AdminTileInfo from "./components/AdminTileInfo";
import AdminAdd from "./components/AdminAdd";
import AdminEdit from "./components/AdminEdit";
import Login from "./components/Login";
import { LoginProvider } from "./components/LoginContext";
import Protected from "./components/Protected";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <BrowserRouter>
    <LoginProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About data={landingPageData}/>}></Route>
        <Route path="/contact" element={<Contact data={landingPageData}/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/login/admindisplay" element={<Protected><AdminDisplay/></Protected>}></Route>         
         <Route path="/product/:id" element={<TileInfo/>}></Route>
         <Route path="/product/admin/:id" element={<Protected><AdminTileInfo/></Protected>}></Route>
         <Route path="/product/adminadd" element={<Protected><AdminAdd/></Protected>}></Route> 
         <Route path="/product/edit/:id" element={<Protected><AdminEdit /></Protected>}></Route>
      </Route>
      <Route path="/login" index element={<Login/>}></Route>
    </Routes>
    </LoginProvider>
  </BrowserRouter>
  );
};

export default App;
