import React, { useContext, useEffect, useState } from "react";
import TeamCard from "../team-card";
import "./style.scss";
import context from "../../context";
import axios from "axios";
const TeamSection = ({ title }) => {
  const data = useContext(context);
  const currentLang = data.currentLang;
  const lang = data.lang;
  const notFoundEmployer = lang == 'uz' ? 'Ishchilar topilmadi' : lang=='ru' ? 'рабочих не найдено' : 'Not Found Workers'
  const [employers, setEmployers] = useState([]);
  const GetEmployers = async () => {
    let { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/employers`);
    setEmployers(data.data);
  };
  useEffect(() => {
    GetEmployers();
  }, []);
  return (
    <div className="section team-section pt-5 px-2 pb-3">
      {/* <h4 className="heading font-monospace">
        {currentLang.sectionFour.wonderfulgift.title}
      </h4> */}
      <h2 className="title font-monospace">{title}</h2>
      <div className="team-wrp mt-3 px-2 d-flex flex-wrap align-items-center justify-content-between">
        { employers.length ?  employers.slice(0, 5).map((el, idx)=>(
        <TeamCard data={el} key={idx}/>
        )) : <h3 className="mt-2 text-center  mx-auto text-uppercase font-monospace">{notFoundEmployer}🤔</h3>}
  
      </div>
    </div>
  );
};

export default TeamSection;
