import React, { useState, useContext, useEffect } from "react";
import Footer from "../../components/footer";
import "./style.scss";
import context from "../../context";
import MobileHeader from "../../components/mobile_header";
import Header from "../../components/header";
import SendMessage from "../../components/sendMessage";
import GoogleMap from "../../components/maps";
const ContactUs = () => {
  const data = useContext(context);
  const currentLang = data.currentLang;
  useEffect(() => {
    document.title = currentLang.navbar.pages.contactus.title;
  }, []);
  return (
    <div className="contact-us page">
      <MobileHeader />
      <section className="firstSec">
        <Header />
        <div className="main  text-center m-5">
          <h3 className="text-uppercase">
            {currentLang.navbar.pages.contactus.title}
          </h3>
        </div>
      </section>
      <section className="secondSec">
        <SendMessage />
      </section>
      <section className="thirdSec">
        <GoogleMap />
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
