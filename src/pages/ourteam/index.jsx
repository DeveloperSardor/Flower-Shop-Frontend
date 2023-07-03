import React, { useContext, useEffect } from "react";
import "./style.scss";
import MobileHeader from "../../components/mobile_header";
import Header from "../../components/header";
import context from "../../context";
import TeamSection from "../../components/team-section";
import Subscribe from "../../components/subscribe";
import Footer from "../../components/footer";

const OurTeam = () => {
  const data = useContext(context);
  const currentLang = data.currentLang;
  useEffect(()=>{
    document.title = currentLang.navbar.pages.ourteam.title
  }, [])
  return (
    <div className="our-team page">
      <MobileHeader />
      <section className="firstSec">
        <Header />
        <div className="main  text-center m-5">
          <h3 className="text-uppercase">
            {currentLang.navbar.pages.ourteam.title}
          </h3>
        </div>
      </section>
      <TeamSection title={currentLang.ourwonderfularrangements.title}/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default OurTeam;
