import React from "react";
import "./style.scss";

const TeamCard = ({data}) => {
  return (
    <div className="box team">
      <img
        src={data.img_link}
        alt="photo"
      />
      <div className="body  text-center">
        <p className="fs-5 text-uppercase font-monospace who">{data.username}</p>
        <p className="job  text-capitalize text-secondary">{data.job.job}</p>
        <div className="socials d-flex gap-4 px-2 mx-auto text-center justify-content-center">
          <a href="" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
