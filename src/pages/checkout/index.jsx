import { useContext, useRef, useState } from "react";
import Header from "../../components/header";
import MobileHeader from "../../components/mobile_header";
import { checkOutPageDatas, erroroccured, loginPage, registerPage } from "../../usedatas/datas";
import "./style.scss";
import EmptyCart from "../../components/emptycart";
import { cartPage } from "../../usedatas/datas";

import context from "../../context";
import Footer from "../../components/footer";
import GoogleMap from "../../components/maps";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
const Checkout = () => {
  const contextData = useContext(context);
  const currentLang = contextData.currentLang
  const [deliverySum, setDeliverySum] = useState(0)
  const lang = contextData.lang;
  const userDatas = JSON.parse(localStorage.getItem("userDatas"));
  const orderCart = contextData.orderCart;
  const totalSum = localStorage.getItem("totalSum");
  const deleteToCart = contextData.deleteToCart;
  const addToCart = contextData.addToCart;
  const deleteToKeyObject = contextData.deleteToKeyObject;
  const firstElements = Object.keys(orderCart).map((key) => orderCart[key][0]);
  const userToken = JSON.parse(localStorage.getItem('userDatas')).token
  
  let config = {
    headers : {
        token : userToken,
        'Content-Type': 'application/json'
    }
  }
  document.title = checkOutPageDatas.setorder;
  const [activePayment, setActivePayment] = useState("spot");


  const changeActivePayment = (val) => {
    setActivePayment(val);
  }


  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const commentInputRef = useRef();
  const phoneInputRef = useRef();

  function flattenObjectValues(obj) {
    return Object.values(obj)
      .flat()
      .map((orchid) => orchid._id);
  }
 

  const checkOutHandler = async() => {
    if (
      !nameInputRef.current.value.trim().length ||
      !addressInputRef.current.value.trim().length ||
      !phoneInputRef.current.value.trim().length
    ) {
        return toast.error(checkOutPageDatas.requiredNameAndAddressAndPhone)
    }
    if(! /^\+998\d{9}$/.test(phoneInputRef.current.value.replace(/ /g, ""))){
        return toast.error(loginPage.invalidPhone)
    }
    const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/orders`, {
      flowers : flattenObjectValues(orderCart),
      phone : phoneInputRef.current.value.trim(),
      sumprice : Number(totalSum) + deliverySum,
      address : addressInputRef.current.value.trim(),
      comment : commentInputRef.current.value.trim(),
      typePayment : activePayment,
      name : nameInputRef.current.value.trim()
    }, config)
   
    if(data.success){
        toast.success(checkOutPageDatas.successCheckouted, {duration : 5000})
    }
    else{
      return toast.error(data.message)
    }
     
  };

  const noProductInTheCart =
    lang == "en"
      ? "No product."
      : lang == "ru"
      ? "Нет товаров ."
      : "Mahsulot yo‘q.";
  const returnShop =
    lang == "en"
      ? "return to shop"
      : lang == "ru"
      ? "вернуться в магазин"
      : "do'konga qaytish";
  const currentlyEmpltyCart =
    lang == "en"
      ? "Your cart is currently empty.      "
      : lang == "ru"
      ? "Ваша корзина на данный момент пуста."
      : "Sizning savatingiz hozircha boʻsh.";


    const GetDeliverySum =async ()=>{
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/delivery`)
        setDeliverySum(Number(data.data?.deliverySum))
      } catch (error) {
        toast.error(erroroccured)
      }
    }
      useEffect(()=>{
     GetDeliverySum()
      }, [])
  
  return (
    <div className="checkout page">
      <MobileHeader />
      <ToastContainer/>
      <section className="firstSec">
        <Header />
        <div className="main mx-auto w-75  text-center">
          <h3 className="text">{checkOutPageDatas.setorder}</h3>
        </div>
      </section>
      <section
        className="secondSec"
        style={{
          minHeight: `${!Object.keys(orderCart).length ? "53vh" : "170vh"}`,
        }}
      >
        {!Object.keys(orderCart).length ? (
          <EmptyCart textOne={currentlyEmpltyCart} textTwo={returnShop} />
        ) : (
          <div className="row py-5">
            <div className="col  col-lg-7 col-8  d-flex flex-column align-items-center gap-3">
              <div className="personal_data_box shadow rounded-3 px-4  w-80 bg-white  py-4">
                <h3>{checkOutPageDatas.personalInformation}</h3>
                <div className="body mt-4 d-flex align-items-center gap-2">
                  <input
                    type="text"
                    ref={nameInputRef}
                    className="rounded-3 border-1 w-50 p-2"
                    defaultValue={userDatas.username}
                  />
                  <input
                    type="text"
                    ref={phoneInputRef}
                    className="rounded-3 border-1 w-50 p-2"
                    defaultValue={userDatas.phone}
                  />
                </div>
              </div>
              <div className="CartWrapper shadow rounded-3 bg-white d-flex flex-column align-items-center w-80  ">
                {firstElements.map((el, idx) => (
                  <div
                    key={idx}
                    className="box  d-flex justify-content-between  mt-4 p-1"
                  >
                    <div className="box_left w-75  d-flex  gap-4 ">
                      <img src={el.img_link} alt={el.name} />
                      <div>
                        <p className="fs-5">{el.name}</p>
                        <p>
                          {orderCart[Object.keys(orderCart)[idx]].length}x
                          {el.price} 000 {cartPage.sum}
                        </p>
                      </div>
                    </div>
                    <div className="box_right d-flex   justify-content-around w-50">
                      <div className="rounded-4 btn  count_btn  d-flex px-3 btn-light text-dark">
                        <p
                          className="dicrement"
                          onClick={() =>
                            deleteToKeyObject(
                              Object.keys(orderCart)[idx],
                              el.price
                            )
                          }
                        >
                          -
                        </p>
                        <p>{orderCart[Object.keys(orderCart)[idx]].length}</p>
                        <p className="increment" onClick={() => addToCart(el)}>
                          +
                        </p>
                      </div>
                      <p>
                        {orderCart[Object.keys(orderCart)[idx]].length *
                          el.price}{" "}
                        000 {cartPage.sum}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="address rounded-3 bg-white w-80 shadow py-3 px-4">
                <h3>{checkOutPageDatas.deliveryaddress}</h3>
                <div className="body d-flex flex-column align-items-center mt-3 gap-2">
                  <input
                    type="text"
                    ref={addressInputRef}
                    placeholder={checkOutPageDatas.address}
                    className="w-100 p-2 rounded-3 border-1"
                  />
                  <input
                    type="text"
                    ref={commentInputRef}
                    placeholder={checkOutPageDatas.comment}
                    className="w-100 p-2 rounded-3 border-1"
                  />
                  <GoogleMap />
                </div>
              </div>
              <div className="payment bg-white w-80 shadow py-3 rounded-3 px-4">
                <h3>{checkOutPageDatas.payment}</h3>
                <div className="body d-flex justify-content-around  align-items-center mt-4 gap-2">
                  {checkOutPageDatas.options.map((el, idx) => (
                    <div
                      onClick={() => changeActivePayment(el.type)}
                      key={idx}
                      className={`d-flex rounded-3 border item_payment w-50 p-2 justify-content-between align-items-center ${
                        el.type == activePayment ? "bg-success text-light" : ""
                      }`}
                    >
                      <div className="left d-flex  gap-2">
                        <img
                          className="logo"
                          src={
                            el.type == "spot"
                              ? "https://avatars.mds.yandex.net/i?id=fe6b997be463464ceb599b6c83a8f5f87e7c4fd9-9123151-images-thumbs&n=13"
                              : "https://www.evos.uz/images/payme.png"
                          }
                          alt=""
                        />
                        <p>{el.text}</p>
                      </div>
                      <div className="right">
                        <input type="radio" defaultChecked={false} name={idx} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col col-4 col-sm-12 col-lg-4">
              <div className="acceptOrder p-3 rounded-2 bg-white">
                <h3>{checkOutPageDatas.total}</h3>
                <ul className="d-flex flex-column gap-2 list-unstyled">
                  <li className="d-flex align-items-center justify-content-between">
                    {checkOutPageDatas.orderPrice}{" "}
                    <b>
                      {totalSum} 000 {cartPage.sum}
                    </b>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    {checkOutPageDatas.deliveryPrice}
                    <b>
                      {deliverySum} 000 {cartPage.sum}
                    </b>
                  </li>
                  <hr />
                  <li className="fs-5">
                    {checkOutPageDatas.totalPrice} &nbsp;
                    <b className="text-primary">
                      {Number(totalSum)  + deliverySum} 000 {cartPage.sum}
                    </b>
                  </li>
                  <button
                    onClick={checkOutHandler}
                    className="w-100 bg-primary p-2 py-3 text-light border-0 rounded-3"
                  >
                    {checkOutPageDatas.acccept}
                  </button>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Checkout;
