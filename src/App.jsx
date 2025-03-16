import React from "react";
import Navbar from "./Component/Nav/Navbar";
import Home from "./Component/pages/Home";
import Category from "./Component/pages/Category";
import Card from "./Component/Card/Card";
import Shop from "./Component/pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Component/pages/Cart";

function App() {

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Category /> */}
      {/* <Card/> */}
      {/* <Shop /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />

        {/* <Route path="Houseplants" element={<Category2 />} /> */}
      </Routes>
    </>
  );
}

export default App;
