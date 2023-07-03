import React, { useContext, useEffect } from "react";
import "./style.scss";
import MobileHeader from "../../components/mobile_header";
import Header from "../../components/header";
import context from "../../context";
import SectionGift from "../../components/sectionGift";
import TeamSection from "../../components/team-section";
import Subscribe from "../../components/subscribe";
import Footer from "../../components/footer";
import SendMessage from "../../components/sendMessage";
import GoogleMap from "../../components/maps";

const AboutUs = () => {
  const data = useContext(context);
  const currentLang = data.currentLang;
  useEffect(()=>{
    document.title = currentLang.navbar.pages.aboutus.title
  }, [])
  return (
    <div className="about-us page">
      <MobileHeader />
      <section className="firstSec">
        <Header />
        <div className="main  text-center m-5">
          <h3 className="text-uppercase">
            {currentLang.navbar.pages.aboutus.title}
          </h3>
        </div>
      </section>
      <section className="secondSec px-5">
        <SendMessage/>
        <GoogleMap/>/
      </section>
      <TeamSection title={currentLang.sectionSix.ourteamofexperts} />
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default AboutUs;
