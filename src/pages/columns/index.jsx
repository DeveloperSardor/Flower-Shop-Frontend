import { Link, useParams } from "react-router-dom";
import MobileHeader from "../../components/mobile_header";
import Header from "../../components/header";
import "./style.scss";
import { allText, column, erroroccured } from "../../usedatas/datas";
import { useContext, useEffect, useState } from "react";
import context from "../../context";
import { GetCategories, GetFlowers } from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Footer from "../../components/footer";
import Loader from "../../components/loader";

const Columns = () => {

  const [categories, setCategories] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const categoriesData = async () => {
    setCategories(await GetCategories());
  };
  const FlowersData = async () => {
    setFlowers(await GetFlowers());
  };
  const { type } = useParams();
  const contextDatas = useContext(context);
  const lang = contextDatas.lang;
  const currentLang = contextDatas.currentLang;
  const orderCart = contextDatas.orderCart;
  const countOfOrderCart = localStorage.getItem("countCart")
    ? localStorage.getItem("countCart")
    : 0;
  const [isLoading, setIsLoading] = useState(false);
  document.title = currentLang.navbar.portfolio.porfoliolayouts[type + 'columns'].title
const [activeCat, setActiveCat] = useState('all')
  useEffect(() => {
    categoriesData();
    FlowersData();
  }, []);

  const filterByCategory = async (value) => {
    setActiveCat(value)
    setIsLoading(true)
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/flowers?category=${value}`
      );
      if (data.success) {
        setFlowers(data.data);
      } else {
        return toast.error(data.message);
      }
      setIsLoading(false)
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="page columns">
      <MobileHeader />
      <ToastContainer />
      <section className="firstSec">
        <Header />
        <div className="main">
          <h2 className="title">
            {
              currentLang.navbar.portfolio.porfoliolayouts[type + "columns"]
                .title
            }
          </h2>
        </div>
      </section>
      <section className="secondSec py-5 px-3 mt-2">
        <div className="categories py-2  w-75 mx-auto d-flex align-items-center flex-wrap gap-3 justify-content-center">
          <button
            onClick={() => filterByCategory("all")}
            className={`btn ${activeCat == 'all' ? 'btn-dark' : " btn-outline-dark"}`}
          >
            {allText}
          </button>
          {categories.map((el, idx) => (
            <button
              onClick={() => filterByCategory(el.category)}
              className={`btn ${activeCat == el.category ? 'btn-dark' : 'btn-outline-dark'}`}
              key={idx}
            >
              {el.category}
            </button>
          ))}
        </div>
      </section>
      <section className="threeSec">
        <div className="flowers  d-flex align-items-center justify-content-evenly flex-wrap">
          {isLoading && (
          <Loader/>
          )}
          { !isLoading && flowers.map((el, idx) => (
              <Link className="text-decoration-none" key={idx} to={`/flowers/${el._id}`}>  
            <div key={idx}>
              <div  className={`position-relative flower_box ${type == 'two' ? 'twocol' : type == 'three' ? 'threecol' : type == 'four' ? 'fourcol' : "w-50"}`}>
              <h3 className="text">{el.name}</h3>
              <img src={el.img_link} className="mt-2" alt={el.name} />
              </div>
            </div>
              </Link>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Columns;
