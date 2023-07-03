import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import "./style.scss";
import { flowersLimitThree, notFoundFlowers } from "../../usedatas/datas";
import Header from "../../components/header";
import MobileHeader from "../../components/mobile_header";
import { slidesArr } from "../../usedatas/datas";
import Card from "../../components/card";
import FlowerCard from "../../components/flower-card";
import StatisticCard from "../../components/statistic-card";
import TeamCard from "../../components/team-card";
import Footer from "../../components/footer";
import context from "../../context";
import { NavLink, Link } from "react-router-dom";
import SectionGift from "../../components/sectionGift";
import TeamSection from "../../components/team-section";
import Subscribe from "../../components/subscribe";
import { GetFlowers, GetUsers } from "../../api/api";
import {Swiper} from 'swiper'
import 'swiper/css'

const Home = () => {
  const swiper = new Swiper()
  const datas = useContext(context);
  const currentLang = datas.currentLang;
  const changeLang = datas.changeLang;
  const lang = datas.lang;
  const [currentState, setCurrentState] = useState(0);
  const [slideIndecator, setSlideIndecator] = useState(0);
  const [flowers, setFlowers] = useState([])
  const [employers, setEmployers] = useState([])
  const [customers, setCustomers] = useState([])

  const allSlideTestimonials = [
    currentLang.sectionFive.ourhappycustomers,
    currentLang.sectionFive.anexperiencedeliver,
    currentLang.sectionFive.theartoffresherflowers,
  ];

//  setFlowers(GetFlowers)
async function flowersData(){
  setFlowers(await GetFlowers());
} 

  const usersData = async()=>{
   setCustomers(await GetUsers())
  }
 

  useEffect(() => {
    document.title = currentLang.home.title;
    flowersData()
    usersData()
  }, []);

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
    if (currentState === slidesArr.length - 1) {
      setCurrentState(0);
    } else {
      setCurrentState(currentState + 1);
    }
  };
  const goSlideTestimonials = () => {
    if (slideIndecator === allSlideTestimonials.length - 1) {
      setSlideIndecator(0);
    } else {
      setSlideIndecator(slideIndecator + 1);
    }
  };

  const goClickedSlide = (state) => {
    setCurrentState(state);
  };

  const goClicedTestmoinals = (clicked) => setSlideIndecator(clicked);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === slidesArr.length - 1) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [currentState]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (slideIndecator == allSlideTestimonials.length - 1) {
        setSlideIndecator(0);
      } else {
        setSlideIndecator(slideIndecator + 1);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [slideIndecator]);

  return (
    <div className="p-3 home page">
      <MobileHeader />
      <section
        className="section"
        id="one"
        style={{
          backgroundImage: `url(${slidesArr[currentState].url})`,
        }}
      >
        <Header />
        <div className="main d-flex align-items-center justify-content-between px-4">
          <button className="prev" onClick={goSlide}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="linear"
            className={
              "contents mt-2 d-flex flex-column align-items-center px-3 py-5"
            }
          >
            <h3 className="welcome_txt">
              {currentLang.welcomeToRosebud.title}
            </h3>
            <h1 className="title text-uppercase">
              {slidesArr[currentState].title}
            </h1>
            <p className="desc">{currentLang.welcomeToRosebud.desc}</p>
            <div className="buttons d-flex mt-3 w-50 ms-4 justify-content-around">
              <NavLink
                to={"/elements/interactive/bloglist"}
                className="active btn text-dark bg-white text-uppercase"
              >
                {currentLang.readMore.title}
              </NavLink>
              <NavLink
                to={"/elements/interactive/bloglist"}
                className="btn btn-transparent text-light  border text-uppercase"
              >
                {currentLang.readMore.title}
              </NavLink>
            </div>
            <div className="dots d-none mt-4">
              {slidesArr.map((el, index) => (
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
      <section id="two">
        <div className="container d-flex justify-content-around align-items-center flex-wrap">
          <Card
            currentLang={currentLang}
            appropriate={currentLang.sectionTwo.first}
            img={flowersLimitThree[0].src}
          />
          <Card
            currentLang={currentLang}
            appropriate={currentLang.sectionTwo.second}
            img={flowersLimitThree[1].src}
          />
          <Card
            currentLang={currentLang}
            appropriate={currentLang.sectionTwo.third}
            img={flowersLimitThree[2].src}
          />
        </div>
      </section>
      <section id="three" className="wonderful_gift">
        <h4 className="section_txt">{currentLang.wonderfulgift.title}</h4>
        <h2 className="title text-center ">
          {currentLang.ourwonderfularrangements.title}
        </h2>
        <div className="card-wrapper mt-5 p-2  d-flex flex-wrap justify-content-evenly align-items-center ">
          {flowers.length ? flowers.map((el, idx)=>(
            <FlowerCard key={idx} data={el}/>
          )) :<h3>{notFoundFlowers}</h3>}
        </div>
      </section>
      <section id="four" className="wonderful_gift-2">
        <div className="container">
          <div className="statistic p-5 d-flex align-items-center justify-content-around text-light flex-wrap">
            {currentLang.sectionFour.categories.map((el, idx) => (
              <StatisticCard text={el} key={idx} count={statisticArr[idx].count}/>
            ))}
          </div>
          <SectionGift />
        </div>
      </section>
      <section
        id="five"
        className="testimonials text-light d-flex align-items-center justify-content-between px-4"
      >
        <button
          className="btn prev text-light fs-4"
          onClick={goSlideTestimonials}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div
        // onResize={goSlideTestimonials}
          className="main text-center"
          //  data-aos="fade-up"
          //     data-aos-duration="1500"
          //     data-aos-easing="linear"
        >
          <h4 className="heading">{currentLang.sectionFive.testimonials}</h4>
          <h2 className="font-monospace what text-uppercase">
            {allSlideTestimonials[slideIndecator].title}
          </h2>
          <p className="desc">
            Proin gravida felaso yu amerto lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Very nice ... <br /> Lorem ipsum dolor
            sit amet lorem, ipasum dolor.
          </p>
          <p className="fw-bold who text-uppercase">
            {allSlideTestimonials[slideIndecator].who}
          </p>

          <div className="dots mt-4">
            {allSlideTestimonials.map((el, idx) => (
              <span
                onClick={() => goClicedTestmoinals(idx)}
                key={idx}
                className={`dot ${idx == slideIndecator && "active"}`}
              ></span>
            ))}
          </div>
        </div>
        <button
          className="btn next text-light fs-4"
          onClick={goSlideTestimonials}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </section>
      <TeamSection title={currentLang.sectionSix.ourteamofexperts} />
      <section id="seven" className="sendEmail pb-3">
        <div className="imgs  flex-wrap d-flex align-items-center">
          <img
            src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-1.jpg"
            alt="photo"
          />
          <img
            src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-3.jpg"
            alt="photo"
          />
          <img
            src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-2.jpg"
            alt="photo"
          />
          <img
            src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-4.jpg"
            alt="photo"
          />
        </div>
        <Subscribe />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
