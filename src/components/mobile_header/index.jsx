import React, { useState, useRef, useContext } from "react";
import context from "../../context";
import "./style.scss";
import { Link } from "react-router-dom";
const MobileHeader = () => {
  const data = useContext(context);
  const currentLang = data.currentLang;
  const changeLang = data.changeLang;
  const lang = data.lang;
  const orderCart = data.orderCart;
  const countOfOrderCart = localStorage.getItem("countCart")
    ? localStorage.getItem("countCart")
    : 0;
  const [currentState, setCurrentState] = useState(0);
  const [slideIndecator, setSlideIndecator] = useState(0);
  const mobileHamburgerList = useRef();
  const userDatas = JSON.parse(localStorage.getItem('userDatas')) ? JSON.parse(localStorage.getItem('userDatas')) : null

  const handleMobileHamburgerMenu = () => {
    mobileHamburgerList.current.classList.toggle("d-none");
  };
  return (
    <div className="mobile_header p-3 d-none ">
      <div className="top d-flex">
        <i
          className="fa-solid fa-bars hamburger"
          onClick={handleMobileHamburgerMenu}
        ></i>
        <Link to={'/'}>
        <img
          src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/03/logo-5.png"
          className="logo"
          alt="logo"
        />
        </Link>
       
        <select
          className="form-control w-25"
          value={lang}
          onChange={(e) => changeLang(e.target.value)}
        >
          <option value="uz">Uzb</option>
          <option value="ru">Rus</option>
          <option value="en">Eng</option>
        </select>
        <Link to={'/cart'} className="text-decoration-none text-dark list-unstyled cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="rounded-5 border  count_basket">
            {countOfOrderCart}
          </span>
        </Link>
      </div>
      <div
        className="accordion links d-none"
        ref={mobileHamburgerList}
        id="accordionExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {currentLang.navbar.home.title}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <Link to={currentLang.navbar.home.magnolia.link}>
                {currentLang.navbar.home.magnolia.title}
              </Link>
              <Link to={currentLang.navbar.home.daffodil.link}>
                {currentLang.navbar.home.daffodil.title}
              </Link>
              <Link to={currentLang.navbar.home.marigold.link}>
                {currentLang.navbar.home.marigold.title}
              </Link>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {currentLang.navbar.pages.title}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Link to={currentLang.navbar.pages.aboutus.link}>
                {currentLang.navbar.pages.aboutus.title}
              </Link>
              {/* <Link to={currentLang.navbar.pages.ourteam.link}>
                {currentLang.navbar.pages.ourteam.title}
              </Link> */}
              <Link to={currentLang.navbar.pages.pricingplans.link}>
                {currentLang.navbar.pages.pricingplans.title}
              </Link>
              {/* <Link to={currentLang.navbar.pages.contactus.link}>
                {currentLang.navbar.pages.contactus.title}
              </Link> */}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {currentLang.navbar.portfolio.title}
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Link to={currentLang.navbar.portfolio.standart.link}>
                {currentLang.navbar.portfolio.standart.title}
              </Link>
              <Link to={currentLang.navbar.portfolio.gallery.link}>
                {currentLang.navbar.portfolio.gallery.title}
              </Link>
             
              <h2 id="subAccOne">
                <button
                  style={{ paddingLeft: "0" }}
                  className="border-top accordion-button  collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#subCollapseOne"
                  aria-expanded="false"
                  aria-controls="subCollapseOne"
                >
                  {currentLang.navbar.portfolio.porfoliolayouts.title}
                </button>
              </h2>
              <div
                id="subCollapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="subAccOne"
                data-bs-parent="#accordionExample"
              >
                <div
                  className="accordion-body"
                  style={{ paddingLeft: 0, paddingTop: ".4rem" }}
                >
                  <Link
                    to={
                      currentLang.navbar.portfolio.porfoliolayouts.twocolumns
                        .link
                    }
                  >
                    {
                      currentLang.navbar.portfolio.porfoliolayouts.twocolumns
                        .title
                    }
                  </Link>
                  <Link
                    to={
                      currentLang.navbar.portfolio.porfoliolayouts.threecolumns
                        .link
                    }
                  >
                    {
                      currentLang.navbar.portfolio.porfoliolayouts.threecolumns
                        .title
                    }
                  </Link>
                  <Link
                    to={
                      currentLang.navbar.portfolio.porfoliolayouts.fourcolumns
                        .link
                    }
                  >
                    {
                      currentLang.navbar.portfolio.porfoliolayouts.fourcolumns
                        .title
                    }
                  </Link>
              
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              {currentLang.navbar.blog.title}
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <Link to={'/blogs'}>
            {currentLang.navbar.blog.title}
              </Link> 
              {/* <Link to={currentLang.navbar.blog.rightsidebar.link}>
                {currentLang.navbar.blog.rightsidebar.title}
              </Link>
              <Link to={currentLang.navbar.blog.leftsidebar.link}>
                {currentLang.navbar.blog.leftsidebar.title}
              </Link>
              <Link to={currentLang.navbar.blog.withoutsidebar.link}>
                {currentLang.navbar.blog.withoutsidebar.title}
              </Link> */}
            </div>
          </div>
        </div>

        {/* shop */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              {currentLang.navbar.shop.title}
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Link to={currentLang.navbar.shop.productlist.link}>
                {currentLang.navbar.shop.productlist.title}
              </Link>
           
              <h2 id="subAccFour">
                <button
                  style={{ paddingLeft: "0" }}
                  className="border-top accordion-button  collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#subCollapseFour"
                  aria-expanded="false"
                  aria-controls="subCollapseFour"
                >
                  {currentLang.navbar.shop.typeflowers.title}
                </button>
              </h2>
              <div
                id="subCollapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="subAccFour"
                data-bs-parent="#accordionExample"
              >
                <div
                  className="accordion-body"
                  style={{ paddingLeft: 0, paddingTop: ".4rem" }}
                >
                  <Link
                    to={currentLang.navbar.shop.typeflowers.piece.link}
                  >
                    {currentLang.navbar.shop.typeflowers.piece.title}
                  </Link>
                  <Link
                    to={currentLang.navbar.shop.typeflowers.bouquet.link}
                  >
                    {currentLang.navbar.shop.typeflowers.bouquet.title}
                  </Link>
                  <Link
                    to={currentLang.navbar.shop.typeflowers.set.link}
                  >
                    {currentLang.navbar.shop.typeflowers.set.title}
                  </Link>
                
                </div>
              </div>

              <h2 id="subAccFive">
                <button
                  style={{ paddingLeft: "0" }}
                  className="border-top accordion-button  collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#subCollapseFive"
                  aria-expanded="false"
                  aria-controls="subCollapseFive"
                >
                  {currentLang.navbar.shop.shoppages.title}
                </button>
              </h2>
              <div
                id="subCollapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="subAccFive"
                data-bs-parent="#accordionExample"
              >
                <div
                  className="accordion-body"
                  style={{ paddingLeft: 0, paddingTop: ".4rem" }}
                >
                  <Link to={currentLang.navbar.shop.shoppages.myaccount.link}>
                    {currentLang.navbar.shop.shoppages.myaccount.title}
                  </Link>
                  <Link to={currentLang.navbar.shop.shoppages.cart.link}>
                    {currentLang.navbar.shop.shoppages.cart.title}
                  </Link>
                 {userDatas &&  <Link to={currentLang.navbar.shop.shoppages.checkout.link}>
                    {currentLang.navbar.shop.shoppages.checkout.title}
                  </Link>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
