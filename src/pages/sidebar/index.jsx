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
} from "../../usedatas/datas";
import Footer from "../../components/footer";
import TeamCard from "../../components/team-card";
import { toast } from "react-toastify";
import axios from "axios";

const SidebarPage = () => {
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
    <div className="page sidebar-page">
      <MobileHeader />
      <section className="firstSec">
        <Header />
        <div className="main">
          <h2 className="title">{currentLang.navbar.blog.adminblog.title}</h2>
        </div>
      </section>
      <section
        className={`secondSec  d-flex gap-3 ${
          param == "left"
            ? "leftside"
            : param == "without"
            ? "withoutside"
            : "rightside"
        }`}
      >
        <div className="left_box  d-flex flex-column  pb-3 px-2">
          <img
            src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-1.jpg"
            alt="photo"
          />
          <span className="mt-2">
            {byAdmin} 12.02.2018, 2 {CommentsTitle}
          </span>
          <h4 className="text-uppercase title">{amazingFlowerArrangment}</h4>
          <p className="desc">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibe ndum auctor, nisi elit conse quat ipsu. Proin
            gravida nibh vel velit auctor ali quet. Aen ean sol lici tudin.
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibe ndum auctor, nisi elit conse quat ipsu. Proin
            gravida{" "}
          </p>
          <Link
            to={"/elements/interactive/bloglist"}
            className="text-decoration-none text-dark fw-bold font-monospace text-uppercase"
          >
            {currentLang.readMore.title}
          </Link>
          <blockquote className="mt-4 p-3 px-1 d-flex align-items-center  firstBlockquote">
            <div className="left w-10 text-center">
              <p className="vergul fw-bold">,,</p>
            </div>
            <div className="right  w-75 ">
              <h4 className="block_text ">
                "Proin garvida asude vel velit auctor alique. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Suscipit eaque repellat
                expedita? Eveniet et fuga"
              </h4>
              <p className="whom">-Holden Caulfied</p>
            </div>
          </blockquote>
          <video
            src="https://media.istockphoto.com/id/1419973653/video/blue-purple-inflorescenses-nature-wild-violet-blooming-plants-enjoying-violet-flower-field.mp4?s=mp4-640x640-is&k=20&c=CB4tQ5YIMJVW80janF_MeOWn1IORX3QSm88MNYUJlKQ="
            controls
          ></video>
          <span className="mt-2">
            {byAdmin} 12.02.2018, 2 {CommentsTitle}
          </span>
          <h4 className="text-uppercase">{amazingFlowerArrangment}</h4>
          <p className="desc">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibe ndum auctor, nisi elit conse quat ipsu. Proin
            gravida nibh vel velit auctor ali quet. Aen ean sol lici tudin.
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibe ndum auctor, nisi elit conse quat ipsu. Proin
            gravida
          </p>
          <Link
            to={"/elements/interactive/bloglist"}
            className="text-decoration-none text-dark fw-bold font-monospace text-uppercase"
          >
            {currentLang.readMore.title}
          </Link>
          <blockquote className="mt-4 p-1 px-1 p-2 d-flex align-items-center  firstBlockquote">
            <div className="left  w-10  text-left px-4">
              <p className="fs-2 fw-bold">
                <i class="fa-solid fa-link"></i>
              </p>
            </div>
            <div className="right ">
              <h4 className="block_text">
                At vero eos et accusamus et iusto odio dignissimos ducimus.
              </h4>
            </div>
          </blockquote>
        </div>
        <div className="right_box ">
          <div className="user_box border py-3 d-flex flex-column align-items-center text-center border-2">
            <img
              src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/team-2-150x150.jpg"
              alt="photo"
            />
            <div className="body mt-2">
              <p className="fs-5 text-uppercase">PETRA WILSON</p>
              <p className="desc px-2">
                Quis bibe ndum auctor, nisi elit <br /> dum auctor
              </p>
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SidebarPage;
