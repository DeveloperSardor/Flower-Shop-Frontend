import React,{useContext} from "react";
import context from "../../context";
import "./style.scss";
const Footer = () => {
    const data = useContext(context);
     const currentLang  = data.currentLang;
  return (
    <footer className="bg-dark py-5">
      <div className="container d-flex flex-wrap gap-3 align-items-start">
        <div className="one item">
          <img
            src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/logo-footer.png"
            alt="photo"
            className="logo"
          />
          <p className="desc">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitu din,
            lorem quistix bibendum auctoris
          </p>
          <div className="socials d-flex gap-3 align-items-center">
            <a href="" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="two item">
          <h4 className="heading">{currentLang.footer.workinghours}</h4>
          <ul className="wk_hours d-flex flex-column list-unstyled">
            <li>Monday : 10AM - 9PM</li>
            <li>Tuesday : 10AM - 9PM</li>
            <li>Wednesday : 10AM - 9PM</li>
            <li>Thursday : 10AM - 9PM</li>
            <li>Friday : 10AM - 9PM</li>
            <li>Saturday : 10AM - 5PM</li>
            <li>Sunday : Closed</li>
          </ul>
        </div>
        <div className="three item">
          <h4 className="heading">{currentLang.footer.wheretofindus}</h4>
          <ul className="findus d-flex flex-column list-unstyled">
            <li>Address : Juniper Vally 17, New York</li>
            <li>Address : J2: 831 Elm St, New York</li>
            <li>Phone 1: +246/ 167 – 1468k</li>
            <li>Phone 2: +246/ 569-42696</li>
            <li>E-mail : rosebud@qodeinteractive.com</li>
          </ul>
        </div>
        <div className="four item">
          <h4 className="heading">{currentLang.footer.followourinstagram}</h4>
         <span className="d-flex">
         Instagram: &nbsp;  <a href="https://www.instagram.com/rosebudthemes/" target="_blank">Link</a>
            </span>   
        </div>
      </div>
      <p className="text-center reserve">{currentLang.footer.reserve}</p>
    </footer>
  );
};

export default Footer;
