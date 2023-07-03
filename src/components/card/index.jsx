import React from 'react';
import './style.scss'
const Card = ({currentLang,appropriate, img}) => {

    return (
        <div className="card">
       <img src={img} alt="photo" />
        <h3>{appropriate.title}</h3>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, a.</p>
        </div>
    );
};

export default Card;