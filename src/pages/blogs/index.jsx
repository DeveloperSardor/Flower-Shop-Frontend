import { Link, useParams } from "react-router-dom";
import MobileHeader from "../../components/mobile_header";
import Header from "../../components/header";
import "./style.scss";
import { useContext, useEffect, useState } from "react";
import context from "../../context";
import {
  CommentsTitle,
  amazingFlowerArrangment,
  byAdmin,
  notFoundBlogs,
} from "../../usedatas/datas";
import Footer from "../../components/footer";
import TeamCard from "../../components/team-card";
import { toast } from "react-toastify";
import axios from "axios";

const Blogs = () => {
  const { param } = useParams();
  const contextDatas = useContext(context);
  const currentLang = contextDatas.currentLang;
  const [blogs, setBlogs] = useState([]);
  document.title = currentLang.navbar.blog.adminblog.title;

  const GetBlogs = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/blogs`
      );
      setBlogs(data.data);
    } catch (error) {
      toast.error(`Xatolik yuz berdi, iltimos keyinroq urinib ko'ring`);
    }
  };

  useEffect(() => {
    GetBlogs();
  }, []);

  return (
    <div className="blogs-page page">
      <MobileHeader />
      <section className="firstSec">
        <Header />
        <div className="main">
          <h2 className="title">{currentLang.navbar.blog.adminblog.title}</h2>
        </div>
      </section>
      <section className="secondSec">
        {blogs?.length ? (
          <>
            <div className="blogs">
              {blogs?.map((el, idx) => (
                <div className="card-blog  p-1" key={idx}>
                  {el.file_link.slice(-3) === "mp4" ? (
                    <video src={el.file_link} controls className="hm"></video>
                  ) : (
                    <img src={el.file_link} alt={el.title} className="hm" />
                  )}
                  <p className="fw-bold fs-5 title">{el.title}</p>
                  <p className="desc">{el.desc.length > 40 ? el.desc.slice(0, 40) + '...' : el.desc}</p>
                  <Link to={`/blogs/${el._id}`} className="btn btn-primary">{currentLang.readMore.title}</Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h3 className="text-center font-monospace">{notFoundBlogs}</h3>
        )}
      </section>
      <Footer/>
    </div>
  );
};

export default Blogs;
