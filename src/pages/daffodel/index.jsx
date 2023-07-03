import React, { useContext, useState, useEffect } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import MobileHeader from "../../components/mobile_header";
import Header from "../../components/header";
import Offer from "../../components/offer";
import context from "../../context";
import FlowerCard from "../../components/flower-card";
import Footer from "../../components/footer";
import {
  daffodilFlowersBg,
  galleryofWorksImages,
  langDaffodilFlowers,
} from "../../usedatas/datas";
import SectionGift from "../../components/sectionGift";
import StatisticCard from "../../components/statistic-card";
import TeamSection from "../../components/team-section";
import Subscribe from "../../components/subscribe";
import axios from "axios";
import { GetFlowers, GetUsers } from "../../api/api";

const Daffodil = () => {
  const datas = useContext(context);
  const lang = datas.lang;
  const langStorage = datas.lang;
  const [flowers, setFlowers] = useState([]);
 const [customers, setCustomers] = useState([])
 const localSLang = localStorage.getItem('lang') ?  localStorage.getItem('lang') : 'uz' 
  const FlowersData = async () => {
     setFlowers(await GetFlowers());
  };
  const usersData = async()=>{
    setCustomers(await GetUsers())
   }
  

   const statisticArr = [
    {
    count : 86
    },
    {
      count : customers?.length
    },
    {
      count : 75
    },
    {
      count : flowers?.length
    }
  ]

  const goSlide = () => {
    if (currentState === daffodilFlowersBg.length - 1) {
      setCurrentState(0);
    } else {
      setCurrentState(currentState + 1);
    } 
  };
  const goClickedSlide = (state) => {
    setCurrentState(state);
  };
  const currentLang = datas.currentLang;
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    document.title = currentLang.navbar.home.daffodil.title
    FlowersData();
    usersData()
    console.log(flowers);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === daffodilFlowersBg.length - 1) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [currentState]);

   const notFoundFlower = lang =='uz' ? 'Gullar topilmadi' : lang == 'ru' ? 'цветы не найдены' : 'Not Found Flowers'


  return (
    <div className="page daffodil">
      <MobileHeader />
      <section
        className="firstSec"
        style={{
          backgroundImage: `url(${daffodilFlowersBg[currentState].src})`,
        }}
      >
        <Header />
        <div className="main  d-flex align-items-center justify-content-between px-4 text-center m-5">
          <button className="prev" onClick={goSlide}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div
            className="contents mt-2 d-flex flex-column align-items-start px-3 py-5"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="linear"
          >
            <h3 className="heading text-capitalize">
              {currentLang.flowerarrangement}
            </h3>
            <h1 className="title text-uppercase">
              {langDaffodilFlowers[localSLang][currentState]}
            </h1>
            <div className="buttons d-flex mt-3 w-50 ms-4 justify-content-start">
              <NavLink
                to={"/elements/interactive/bloglist"}
                className=" btn  text-uppercase"
              >
                {currentLang.readMore.title}
              </NavLink>
            </div>
            <div className="dots d-none mt-4">
              {daffodilFlowersBg.map((el, index) => (
                <span
                  key={index}
                  onClick={() => goClickedSlide(index)}
                  className={` bg-white rounded dot ms-2 ${
                    currentState == index ? "active" : ""
                  }`}
                ></span>
              ))}
            </div>
          </div>
          <button className="next" onClick={goSlide}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>
      <section className="secondSec px-5">
        <SectionGift />
      </section>
      <section className="thirdSec p-4">
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
      <section className="section fourthSec">
        <div className="statistic p-5 d-flex align-items-center justify-content-around text-light flex-wrap">
          {currentLang.sectionFour.categories.map((el, idx) => (
              <StatisticCard text={el} key={idx} count={statisticArr[idx].count}/>
              ))}
        </div>
      </section>
      <section className="fiveSec wonderful_gift">
        <h4 className="section_txt">{currentLang.wonderfulgift.title}</h4>
        <h2 className="heading_title">
          {currentLang.ourwonderfularrangements.title}
        </h2>
        <div className="card-wrapper mt-5 p-2  d-flex flex-wrap justify-content-between align-items-center ">
          {flowers.length ?  flowers.map((el, idx)=>(
           <FlowerCard data={el} key={idx}/> 
          )) : <h3 className="text-center mx-auto">{notFoundFlower}</h3>}
        </div>
      </section>
      <TeamSection title={currentLang.ourwonderfularrangements.title} />
      <Subscribe />
      <section className="sixSec">
        <h3 className="heading">{currentLang.wonderfulgift.title}</h3>
        <h3 className="title">{currentLang.galeryofwork}</h3>
        <div className="imgs d-flex mx-auto align-items-center justify-content-around flex-wrap">
          {galleryofWorksImages.map((el, idx) => (
            <img src={el.src} key={idx} className="flower-img" />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Daffodil;
