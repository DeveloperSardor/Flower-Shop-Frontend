import React, {useContext} from "react";
import context from "../../context";
import './style.scss'

const AdminCard = ({img}) => {
    const data = useContext(context);
    const currentLang = data.currentLang;
    const lang = currentLang.lang
  return(
   <div className="box">
    <img src={img} alt="rasm"/>
    <div className="body">
    <p className="when">By admin 12.02.2018 in Garden, Velvet</p>
    <h3 className="font-monospace text-uppercase text">Beautiful flowers</h3>
    <p className="desc">Proin gravida nibh vel velit auctor aliquet. Aenean <br /> sollicitudin, lorem quis</p>
    <a href="" className="text-dark readMore">{currentLang.readMore.title}</a>
    </div>

  </div>
  )
};

export default AdminCard;
