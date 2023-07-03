import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import Header from "../../components/header";
import MobileHeader from "../../components/mobile_header";
import context from "../../context";
import AdminCard from "../../components/admin-card";
import Footer from "../../components/footer";

const Elements = () => {
    const {category, value} = useParams()
  const data = useContext(context);
  const currentLang = data.currentLang;
  const lang = currentLang.lang;
  const changeLang = data.changeLang;
  const title = currentLang.navbar.elements[category][value];

  return (
    <div className="page elements ">
      <MobileHeader />
      <section className="firstSec  text-light">
        <Header />
        <div className="main  text-center m-5">
          <h3 className="text-uppercase">{title.title}</h3>
        </div>
      </section>
      <section className="Firstcards p-3">
      <div className="contents d-flex align-items-center justify-content-around flex-wrap">
        <AdminCard img={'https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-3.jpg'}/>
        <AdminCard img={'https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-9.jpg'}/>
        <AdminCard img={'https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-1.jpg'}/>
      </div>
      </section>
      <section className="Secondcards p-3">
        <div className="contents d-flex align-items-center justify-content-around flex-wrap">
            <AdminCard img={'https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-7.jpg'}/>
            <AdminCard img={'https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-2.jpg'}/>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Elements;
