import React, { useContext } from "react";
import "./style.scss";
import context from "../../context";
import { Link } from "react-router-dom";

const Offer = ({ img }) => {
  const datas = useContext(context);
  const currentLang = datas.currentLang;
  return (
    <div className="offer">
      <div className="top" style={{ backgroundImage: `url(${img})` }}>
        <h4 className="price">$195</h4>
        <p className="someting">per table</p>
      </div>
      <div className="body d-flex flex-column align-items-center">
        <h5 className="title">wedding</h5>
        <p className="desc px-2">
          Proin gravida nibh vel velit Aenean sollicitudin, loremis bibe ndum
          auctor, nisi elit velit auctor ali quet
        </p>
        <a href={'#'} className="purchase">{currentLang.purchase}</a>
      </div>
    </div>
  );
};

export default Offer;
