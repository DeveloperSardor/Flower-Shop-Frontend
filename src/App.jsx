import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import ScrollToTop from "react-scroll-to-top";
import { Route, Routes, json } from "react-router-dom";
import Elements from "./pages/elements/Elements";
import langs from "./langs/datas";
import context from "./context";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import OurTeam from "./pages/ourteam";
import Pricing from "./pages/pricing";
import Daffodil from "./pages/daffodel";
import Marigold from "./pages/marigold";
import Standart from "./pages/standart";
import CartPage from "./pages/cart";
import Login from "./components/login";
import Register from "./components/register";
import Checkout from "./pages/checkout";
import FlowerById from "./pages/FlowerById";
import Gallery from "./pages/gallery";
import Columns from "./pages/columns";
import SidebarPage from "./pages/sidebar";
import Profile from "./pages/profile";
import ProductListPage from "./pages/product-list";
import FlowerByType from "./pages/flowerByType";
import Blogs from "./pages/blogs";
import BlogById from "./pages/blogById";

const App = () => {
  const lang = localStorage.getItem("lang");
  const langStorage = lang ? lang : "uz";
  const [currentLang, setCurrentLang] = useState(langs[langStorage]);

  const userDatas = localStorage.getItem("userDatas")
    ? localStorage.getItem("userDatas")
    : null;

  const changeLang = (lang) => {
    window.location.reload();
    setCurrentLang(langs[lang]);
    localStorage.setItem("lang", lang);
  };

  let orderCart = localStorage.getItem("orderCart")
    ? JSON.parse(localStorage.getItem("orderCart"))
    : {};
  let totalSum = JSON.parse(localStorage.getItem("totalSum"))
    ? JSON.parse(localStorage.getItem("totalSum"))
    : 0;

  localStorage.setItem("orderCart", JSON.stringify(orderCart));
  let countOfOrderCart = localStorage.getItem("countCart")
    ? JSON.parse(localStorage.getItem("countCart"))
    : 0;

  const addToCart = (obj) => {
    orderCart[obj._id] = orderCart[obj._id] ? orderCart[obj._id] : [];
    orderCart[obj._id].push(obj);
    totalSum += Number(obj.price);
    countOfOrderCart += 1;
    localStorage.setItem("countCart", JSON.stringify(countOfOrderCart));
    localStorage.setItem("totalSum", JSON.stringify(totalSum));
    localStorage.setItem("orderCart", JSON.stringify(orderCart));
    window.location.reload();
  };

  if (!Object.keys(orderCart)) {
    totalSum = 0;
    localStorage.setItem("totalSum", totalSum);
  }
  const deleteToCart = (keyName, minusTotal, minusCountOfOrderCart) => {
    console.log(orderCart[keyName]);
    countOfOrderCart -= minusCountOfOrderCart;
    delete orderCart[keyName];
    totalSum -= Number(minusTotal);
    localStorage.setItem("countCart", JSON.stringify(countOfOrderCart));
    localStorage.setItem("orderCart", JSON.stringify(orderCart));
    localStorage.setItem("totalSum", JSON.stringify(totalSum));
    window.location.reload();
  };

  const deleteToKeyObject = (keyName, minusPrice) => {
    orderCart[keyName].pop();
    countOfOrderCart--;
    if (!orderCart[keyName].length) {
      delete orderCart[keyName];
    }
    totalSum -= Number(minusPrice);
    localStorage.setItem("countCart", JSON.stringify(countOfOrderCart));
    localStorage.setItem("orderCart", JSON.stringify(orderCart));
    localStorage.setItem("totalSum", JSON.stringify(totalSum));
    window.location.reload();
  };

  return (
    <div>
      <context.Provider
        value={{
          currentLang,
          changeLang,
          lang,
          langStorage,
          orderCart,
          deleteToKeyObject,
          addToCart,
          countOfOrderCart,
          userDatas,
          deleteToCart,
          totalSum,
        }}
      >
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Elements />} path="/elements/:category/:value" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<OurTeam />} path="/our-team" />
          <Route element={<Pricing />} path="/pricing-plans" />
          <Route element={<ContactUs />} path="/contact-us" />
          <Route element={<Daffodil />} path="/daffodil" />
          <Route element={<Marigold />} path="/marigold" />
          <Route element={<Standart />} path="/standart" />
          <Route element={<Gallery />} path="/gallery" />
          <Route element={<CartPage />} path="/cart" />
          <Route element={<Checkout />} path="/checkout" />
          <Route element={<FlowerByType/>} path="/flower-type/:type"/>
          <Route element={<FlowerById />} path="/flowers/:id" />
          <Route element={<Columns />} path="/columns/:type" />
          <Route element={<Blogs />} path="/blogs" />
          <Route element={<BlogById />} path="/blogs/:id" />
          <Route element={<Profile />} path="/my-account" />
          <Route element={<ProductListPage />} path="/product-list" />
        </Routes>
      </context.Provider>
      <Login />
      <Register />
      <ScrollToTop smooth color="#fff" className="bg-dark" />
      <div className="btns related_buy">
        <button className="btn  text-light">
          <i className="fa-solid fa-circle-notch fa-rotate-180"></i>
        </button>
        <button className="btn  text-danger">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
