import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Fovourites from "../pages/Fovourites/Fovourites";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Error from "../pages/Error/Error";
import Savat from "../pages/Savat/Savat";
import Contact from "../pages/Contact/Contact";
import Service from "../pages/Service/Service";
import Buyurtma from "../pages/Buyurtma/Buyurtma";

const Routers = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fovourites" element={<Fovourites />} />
        <Route path="/single/:id" element={<SingleProduct />} />
        <Route path="/savat" element={<Savat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/buyurtma" element={<Buyurtma />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Routers;
