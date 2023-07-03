import React, { useContext } from "react";
import { Link } from "react-router-dom";
import context from "../../context";
import './style.scss'
const SectionGift = () => {
  const data = useContext(context);
  const currentLang = data.currentLang;
  return <div className="gifts-sec d-flex my-2 mt-5 ">
  <div className="left w-50">
              <h4 className="heading">
                {currentLang.sectionFour.wonderfulgift.title}
              </h4>
              <h3 className="title">
                {currentLang.sectionFour.wonderfulgift.aperfectspot}
              </h3>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                sit magni maiores voluptatum dolores accusantium aliquam saepe,
                earum tempora blanditiis, aliquid debitis reprehenderit itaque
                quia. Nisi quod voluptas ipsam corrupti!
              </p>
              <button className="read-more">
                <Link to={"/about-us"} >
                  {currentLang.readMore.title}
                </Link>
              </button>
            </div>
            <img src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-img-2.png" alt="" className="bg-img_flower" />
            <div className="right w-50">
              <img
                src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-img-1.jpg"
                alt="photo"
              />
            </div>
  </div>;
};

export default SectionGift;
