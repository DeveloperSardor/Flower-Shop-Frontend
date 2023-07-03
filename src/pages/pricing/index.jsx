import React, { useContext, useEffect } from "react";
import "./style.scss";
import context from "../../context";
import MobileHeader from "../../components/mobile_header";
import Header from "../../components/header";
import Offer from "../../components/offer";
import Subscribe from "../../components/subscribe";
import Footer from "../../components/footer";

const Pricing = () => {
  const data = useContext(context);
  const currentLang = data.currentLang;
  useEffect(() => {
    document.title = currentLang.navbar.pages.pricingplans.title;
  }, []);
  return (
    <div className="pricing page">
      <MobileHeader />
      <section className="firstSec">
        <Header />
        <div className="main  text-center m-5">
          <h3 className="text-uppercase">
            {currentLang.navbar.pages.pricingplans.title}
          </h3>
        </div>
      </section>
      <section className="secondSec p-4">
        <h4 className="heading">{currentLang.wonderfulgift.title}</h4>
        <h2 className="title">{currentLang.ourpricingoffers}</h2>
        <div className="offers px-3 w-75 mx-auto mt-2 d-flex align-items-center justify-content-between flex-wrap">
          <Offer
            img={
              "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-pricing-background-img-1.jpg"
            }
          />
          <Offer
            img={
              "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-pricing-background-img-2.jpg"
            }
          />
          <Offer
            img={
              "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-pricing-background-img-3.jpg"
            }
          />
        </div>
      </section>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Pricing;
