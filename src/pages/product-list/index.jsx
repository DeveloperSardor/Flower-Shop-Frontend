import { ToastContainer, toast } from "react-toastify";
import Header from "../../components/header";
import MobileHeader from "../../components/mobile_header";
import { useContext, useState, useEffect, useRef } from "react";
import { GetFlowers, GetCategories } from "../../api/api";
import "./style.scss";
import axios from "axios";
import context from "../../context";
import {
  allText,
  notFoundFlowers,
  searchproducts,
  showing,
} from "../../usedatas/datas";
import FlowerCard from "../../components/flower-card";
import Loader from "../../components/loader";
import Footer from "../../components/footer";

const ProductListPage = () => {
  async function flowersData() {
    setFlowers(await GetFlowers());
  }
  const searchInpRef = useRef();
  const [flowers, setFlowers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const categoriesData = async () => {
    setCategories(await GetCategories());
  };
  const contextDatas = useContext(context);
  const currentLang = contextDatas.currentLang;
  useEffect(() => {
    document.title = currentLang.navbar.shop.productlist.title;
    flowersData();
    categoriesData();
  }, []);

  const filterByCategory = async (value) => {
    console.log(value);
    setActiveCat(value);
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/flowers?category=${value}`
      );
      if (data.success) {
        setFlowers(data.data);
      } else {
        return toast.error(data.message);
      }
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const searchFlower = async (value) => {
    setIsLoading(true);
    if (!value) {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/flowers`);
        if (data.success) {
            setFlowers(data.data);
          } else {
            return toast.error(data.message);
          }
      } catch (error) {
        toast.error(error.message);
      }
    }
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/flowers?search=${value.trim()}`);
      if (data.success) {
        setFlowers(data.data);
      } else {
        return toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="page product-list">
      <MobileHeader />
      <section className="firstSec">
        <Header />
        <ToastContainer />
        <div className="main mx-auto w-75  text-center">
          <h3 className="text">{currentLang.navbar.shop.productlist.title}</h3>
        </div>
      </section>
      <section className="secondSec py-4 px-3">
        <div className="top d-flex justify-content-between px-3 py-2 align-items-center">
          <div className="left w-25 ">
            <span>
              {showing} {flowers.length}
            </span>
          </div>
          <div className="right  w-60 justify-content-end d-flex align-items-center gap-3">
            <select
              className="w-30 p-2 text-capitalize"
              name=""
              onChange={(e) => filterByCategory(e.target.value)}
              id=""
              defaultValue={activeCat}
            >
              <option value="all" >{allText}</option>
              {categories.map((el, idx) => (
                <option className="text-capitalize" value={el.category}>
                  {el.category}
                </option>
              ))}
            </select>
            <div className="input-box d-flex gap-0 w-30 border">
              <input
                type="text"
                className="border-0 p-2 w-85"
                onInput={() => searchFlower(searchInpRef.current.value)}
                ref={searchInpRef}
                placeholder={searchproducts}
              />
              <button
                className="border-0 search_btn  p-2"
                onClick={() => searchFlower(searchInpRef.current.value)}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="threeSec py-3">
        <div className="card-wrapper px-3 py-5 d-flex flex-wrap justify-content-evenly align-items-center">
          {isLoading && <Loader />}
          {!isLoading &&
            flowers.map((el, idx) => <FlowerCard key={idx} data={el} />)}
          {!flowers.length && <h3>{notFoundFlowers}</h3>}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ProductListPage;
