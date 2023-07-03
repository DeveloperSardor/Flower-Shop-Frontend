import React, { useContext, useState, useEffect } from "react";
import context from "../../context";
import FlowerCard from "../../components/flower-card";
import MobileHeader from "../../components/mobile_header";
import Header from "../../components/header";
import './style.scss'
import { GetFlowers } from "../../api/api";
import Footer from "../../components/footer";
import { notFoundFlowers } from "../../usedatas/datas";


const Standart = () => {
    async function flowersData(){
        setFlowers(await GetFlowers());
      } 
    const [flowers, setFlowers] = useState([])

    const datas = useContext(context);
    const currentLang = datas.currentLang;
    useEffect(()=>{
         document.title = currentLang.navbar.portfolio.standart.title
         flowersData()
    },[])
    return ( 
        <div className="page standart">
           <MobileHeader/>
           <section className="firstSec">
            <Header/>
            <div className="main">
                <h2 className="text">{currentLang.navbar.portfolio.standart.title}</h2>
            </div>
           </section>  
           <section className="secondSec py-5 pt-5 mt-3">
           <div className="flowers-container d-flex flex-wrap justify-content-evenly align-items-center">
           {flowers.length ? flowers.map((el, idx)=>(
            <FlowerCard key={idx} data={el}/>
          )) :<h3>{notFoundFlowers}</h3>}
           </div>
           </section>
           <Footer/>
        </div>
     );
}
 
export default Standart;