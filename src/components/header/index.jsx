import React, { useRef, useContext, useState, useEffect } from "react";
import context from "../../context";
import { cartPage } from "../../usedatas/datas";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const data = useContext(context);
  const currentLang = data.currentLang;
  const changeLang = data.changeLang;
  const lang = data.lang;
  const orderCart = data.orderCart;
  const [currentState, setCurrentState] = useState(0);
  const [slideIndecator, setSlideIndecator] = useState(0);
  const [countOfOne, setCOuntOfOne] = useState(0);
  const deleteToCart = data.deleteToCart;
  const totalSum = localStorage.getItem("totalSum");

  const rightBar = useRef();
  const openRightBar = () => {
    rightBar.current.classList.remove("d-none");
  };
  const closeRightBar = () => {
    rightBar.current.classList.add("d-none");
  };

  const countOfOrderCart = localStorage.getItem("countCart")
    ? localStorage.getItem("countCart")
    : 0;
  const firstElements = Object.keys(orderCart).map((key) => orderCart[key][0]);
  const userDatas = JSON.parse(localStorage.getItem("userDatas"))
    ? JSON.parse(localStorage.getItem("userDatas"))
    : null;

  const noProductInTheCart =
    lang == "en"
      ? "No product in the cart."
      : lang == "ru"
      ? "Нет товаров в корзине."
      : "Savatda mahsulot yo‘q.";
  return (
    <header className="p-2">
      <div className="container d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo">
          <img
            src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/03/logo-header.png"
            alt=""
          />
        </NavLink>
        <div className="right w-50">
          <div className="links  d-flex align-items-center justify-content-around ">
            <li className="link_item">
              {currentLang.navbar.home.title}
              <ul>
                <li>
                  <Link to={currentLang.navbar.home.magnolia.link}>
                    {currentLang.navbar.home.magnolia.title}
                  </Link>
                </li>
                <li>
                  <Link to={currentLang.navbar.home.daffodil.link}>
                    {currentLang.navbar.home.daffodil.title}
                  </Link>
                </li>
                <li>
                  <Link to={currentLang.navbar.home.marigold.link}>
                    {currentLang.navbar.home.marigold.title}
                  </Link>
                </li>
                <li></li>
              </ul>
            </li>
            <li className="link_item">
              {currentLang.navbar.pages.title}
              <ul className="position-absolute">
                <li>
                  <Link to={currentLang.navbar.pages.aboutus.link}>
                    {currentLang.navbar.pages.aboutus.title}
                  </Link>
                </li>
                {/* <li>
                  <Link to={currentLang.navbar.pages.ourteam.link}>
                    {currentLang.navbar.pages.ourteam.title}
                  </Link>
                </li> */}
                <li>
                  <Link to={currentLang.navbar.pages.pricingplans.link}>
                    {currentLang.navbar.pages.pricingplans.title}
                  </Link>
                </li>

                {/* <li>
                  <Link to={currentLang.navbar.pages.contactus.link}>
                    {currentLang.navbar.pages.contactus.title}
                  </Link>
                </li> */}
              </ul>
            </li>
            <li className="link_item">
              {currentLang.navbar.portfolio.title}
              <ul>
                <li>
                  <Link to={currentLang.navbar.portfolio.standart.link}>
                    {currentLang.navbar.portfolio.standart.title}
                  </Link>
                </li>
                <li>
                  <Link to={currentLang.navbar.portfolio.gallery.link}>
                    {currentLang.navbar.portfolio.gallery.title}
                  </Link>
                </li>

                <li className="in_drop">
                  {currentLang.navbar.portfolio.porfoliolayouts.title}
                  <i className="fa-solid fa-chevron-right"></i>
                  <ul className="lists mt-6" id="portfolio_cat_list">
                    <li>
                      <Link to={"/columns/two"}>
                        {
                          currentLang.navbar.portfolio.porfoliolayouts
                            .twocolumns.title
                        }
                      </Link>
                    </li>
                    <li>
                      <Link to={"/columns/three"}>
                        {
                          currentLang.navbar.portfolio.porfoliolayouts
                            .threecolumns.title
                        }
                      </Link>
                    </li>
                    <li>
                      <Link to={"/columns/four"}>
                        {
                          currentLang.navbar.portfolio.porfoliolayouts
                            .fourcolumns.title
                        }
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="link_item">
              {currentLang.navbar.blog.title}
              <ul>
                <li>
                  <Link to={currentLang.navbar.blog.adminblog.link}>
                    {currentLang.navbar.blog.adminblog.title}
                  </Link>
                </li>
                {/* <li>
                  <Link to={currentLang.navbar.blog.leftsidebar.link}>
                    {currentLang.navbar.blog.leftsidebar.title}
                  </Link>
                </li>
                <li>
                  <Link to={currentLang.navbar.blog.withoutsidebar.link}>
                    {currentLang.navbar.blog.withoutsidebar.title}
                  </Link>
                </li> */}
              </ul>
            </li>
            <li className="link_item ">
              {currentLang.navbar.shop.title}
              <ul>
                <li>
                  <Link to={currentLang.navbar.shop.productlist.link}>
                    {currentLang.navbar.shop.productlist.title}
                  </Link>
                </li>

                <li className="in_drop">
                  {currentLang.navbar.shop.typeflowers.title}
                  <i className="fa-solid fa-chevron-right"></i>
                  <ul
                    style={{ transform: `translateX(10rem)` }}
                    id="portfolio_cat_list"
                    className="w-115 shadow"
                  >
                    <li>
                      <Link
                        to={
                          currentLang.navbar.shop.typeflowers.piece.link
                        }
                      >
                        {currentLang.navbar.shop.typeflowers.piece.title}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          currentLang.navbar.shop.typeflowers.bouquet.link
                        }
                      >
                        {currentLang.navbar.shop.typeflowers.bouquet.title}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          currentLang.navbar.shop.typeflowers.set.link
                        }
                      >
                        {currentLang.navbar.shop.typeflowers.set.title}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="in_drop">
                  {currentLang.navbar.shop.shoppages.title}
                  <i className="fa-solid fa-chevron-right"></i>
                  <ul
                    className="w-100 shadow"
                    style={{ transform: `translateX(10rem)` }}
                    id="portfolio_cat_list"
                  >
                    <li>
                      <Link
                        to={currentLang.navbar.shop.shoppages.myaccount.link}
                      >
                        {currentLang.navbar.shop.shoppages.myaccount.title}
                      </Link>
                    </li>
                    <li>
                      <Link to={currentLang.navbar.shop.shoppages.cart.link}>
                        {currentLang.navbar.shop.shoppages.cart.title}
                      </Link>
                    </li>
                    {userDatas && (
                      <li>
                        <Link
                          to={currentLang.navbar.shop.shoppages.checkout.link}
                        >
                          {currentLang.navbar.shop.shoppages.checkout.title}
                        </Link>
                      </li>
                    )}
                  </ul>
                </li>
              </ul>
            </li>
            <Link to={"/cart"} className="text-light position-relative cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="rounded-5 border  count_basket">
                {countOfOrderCart}
              </span>
              <ul className="position-absolute  bg-light orders-view py-3 px-4 text-dark rounded-2 list-unstyled">
                {Object.keys(orderCart).length == false ? (
                  <p className="mt-2">{noProductInTheCart}</p>
                ) : (
                  firstElements.map((el, idx) => (
                    <li key={idx} className="d-flex flex-column">
                      <div className="body mt-1 gap-2 w-100 d-flex align-items-center">
                        <div className="left w-50">
                          <img
                            src={el.img_link}
                            className="w-100"
                            alt="photo"
                          />
                        </div>
                        <div className="center w-50 d-flex flex-column align-items-center">
                          <p className="title">{el.name}</p>
                          <p className="onceTotal">
                            {orderCart[Object.keys(orderCart)[idx]].length}x
                            {orderCart[Object.keys(orderCart)[idx]].length *
                              el.price}
                          </p>
                        </div>
                        <div className="right">
                          <button
                            className="delete"
                            onClick={() =>
                              deleteToCart(
                                el._id,
                                orderCart[Object.keys(orderCart)[idx]].length *
                                  el.price,
                                orderCart[Object.keys(orderCart)[idx]].length
                              )
                            }
                          >
                            x
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                )}
                {Object.keys(orderCart).length ? (
                  <>
                    <p className="text-dark fs-5 totalSum">
                      Total : {totalSum} 000 {cartPage.sum}
                    </p>
                    <Link
                      to={"/cart"}
                      className="btn btn-outline-dark p-2 w-100 view-cart_btn"
                    >
                      View Cart
                    </Link>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </Link>
            <li>
              <select
                name="lang"
                className="form-select"
                id="lang"
                value={lang}
                onChange={(e) => changeLang(e.target.value)}
              >
                <option value="uz">Uzb</option>
                <option value="ru">Rus</option>
                <option value="en">Eng</option>
              </select>
            </li>
            <li>
              <i className="fa-solid fa-bars fs-5" onClick={openRightBar}></i>
            </li>
          </div>
        </div>
      </div>
      <div
        className="RightInfo d-none bg-light text-dark rounded-1 py-4 ps-5 px-4"
        ref={rightBar}
      >
        <div className="top">
          <i
            className="fas fs-5 fa-close float-end close"
            onClick={closeRightBar}
          ></i>
        </div>
        <h3 className="title mt-4 font-monospace">
          <img
            className="logo"
            src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/logo-3.png"
            alt=""
          />
        </h3>
        <p className="mt-3 desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsam
          provident quo laborum eum placeat?
        </p>
        <ul className="info d-flex flex-column list-unstyled">
          <li>Adress : Juniper Vally 17, New York</li>
          <li>Phone 1: +246/ 167 - 1468</li>
          <li>Phone 2: +246/ 569 - 42696</li>
          <li>Email : rosebud@qodeinteractive.com</li>
        </ul>
        <div className="socials  mt-5 d-flex gap-3">
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
