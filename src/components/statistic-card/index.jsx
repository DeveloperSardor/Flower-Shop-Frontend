import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./style.scss";

const StatisticCard = ({ text, count }) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
    className='box p-3 px-2 boxm'
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
        <div className="count">
          <h4 className="number">
           {counterOn && <CountUp start={0} end={count} duration={2} delay={0} />} 
          </h4>
        </div>
        <p className="text">{text}</p>
    </ScrollTrigger>
  );
};

export default StatisticCard;
