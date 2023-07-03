import { useParams } from "react-router-dom";
import MobileHeader from "../../components/mobile_header";
import Header from "../../components/header";
import context from "../../context";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./style.scss";
import { erroroccured, notFoundFlowers } from "../../usedatas/datas";
import axios from "axios";
import FlowerCard from "../../components/flower-card";
import LoaderComponent from "../../components/loader";

const FlowerByType = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { type } = useParams();
  const lang = localStorage.getItem("lang");
  const [flowers, setFlowers] = useState([]);

  const GetFlowerData = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/flowers?type_f=${type}`
      );
      console.log(data);
      setFlowers(data.data);
    } catch (error) {
      toast.error(erroroccured);
    }finally{
      setIsLoading(false)
    }
  };
  const datas = useContext(context);
  const currentLang = datas.currentLang;

  useEffect(() => {
    GetFlowerData();
    console.log(flowers);
  }, [type]);
  return (
    <div className="flowerByType page">
      <MobileHeader />
      <section className="firstSec">
        <Header />
        <div className="main">
          <h2 className="text">
            {currentLang.navbar.shop.typeflowers[type].title}
          </h2>
        </div>
      </section>
      <section className="secondSec px-2 py-5">
        <h2 className="text-center prosta">
          {currentLang.navbar.shop.typeflowers[type].title}{" "}
          {lang == "en" ? "flowers" : lang == "ru" ? "цветы" : "gullar"}
        </h2>
        {flowers.length ? (
          <div className="d-flex flex-column align-items-center mt-4">
            {isLoading ? (
              <LoaderComponent />
            ) : (
              <div className="flowers-container d-flex align-items-center justify-content-between  flex-wrap">
                {flowers.map((el, idx) => (
                  <FlowerCard data={el} key={idx} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <h2 className="text-center">{notFoundFlowers} 🤔</h2>
        )}
      </section>
    </div>
  );
};

export default FlowerByType;
