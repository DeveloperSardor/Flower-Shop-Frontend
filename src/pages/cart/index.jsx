import Header from "../../components/header";
import { useContext, useState, useEffect } from "react";
import MobileHeader from "../../components/mobile_header";
import "./style.scss";
import context from "../../context";
import { Link } from "react-router-dom";
import { cartPage, erroroccured } from "../../usedatas/datas";
import EmptyCart from "../../components/emptycart";
import Footer from "../../components/footer";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const CartPage = () => {
  const contextData = useContext(context);
  const lang = contextData.lang;
const userDatas = contextData.userDatas;
const [deliverySum, setDeliverySum] = useState(0)
console.log(import.meta.env.VITE_BACKEND_URL);
const GetDeliverySum = async()=>{
  try {
    const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/delivery`)
    setDeliverySum(Number(data.data?.deliverySum))
  } catch (error) {
    toast.error(error.message)
  }
}

const orderCart = contextData.orderCart
  const countOfOrderCart = localStorage.getItem("countCart")
  ? localStorage.getItem("countCart")
  : 0;
  const totalSum =Number(JSON.parse(localStorage.getItem("totalSum")))
  const deleteToCart = contextData.deleteToCart;
  const addToCart = contextData.addToCart
const deleteToKeyObject = contextData.deleteToKeyObject
  const firstElements = Object.keys(orderCart).map((key) => orderCart[key][0]);
  const noProductInTheCart =
  lang == "en"
  ? "No product in the cart."
  : lang == "ru"
      ? "Нет товаров в корзине."
      : "Savatda mahsulot yo‘q.";
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
      const cart = lang == "en" ? "Cart" : lang == "ru" ? "Корзинa" : "Savat";
    document.title = cart


    useEffect(()=>{
    GetDeliverySum()
    }, [])


  return (
    <div className="page cart-page">
      <MobileHeader />
      <section className="firstSec">
        <ToastContainer/>
        <Header />
        <div className="main mx-auto w-75  text-center">
          <h3 className="text">{cart}</h3>
        </div>
      </section>
      <section className="secondSec py-5 text-dark">
        {!Object.keys(orderCart).length ? (
         <EmptyCart textOne={currentlyEmpltyCart} textTwo={returnShop}/>
        ) : (
          <div className="content-cart d-flex align-items-center justify-content-around  w-80 mx-auto">
            <div className="left">
              {firstElements.map((el, idx) => (
                <div
                key={idx}
                  className="box d-flex justify-content-between shadow mt-2 p-3"
                >
                  <div className="box_left w-75  ps-2 d-flex gap-4">
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
                      <p className="dicrement" onClick={()=> deleteToKeyObject(Object.keys(orderCart)[idx], el.price)}>-</p>
                      <p>{orderCart[Object.keys(orderCart)[idx]].length}</p>
                      <p className="increment" onClick={()=>addToCart(el) } >+</p>
                    </div>
                    <p>
                      {orderCart[Object.keys(orderCart)[idx]].length * el.price} 000 {cartPage.sum}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="right p-4 w-25 shadow rounded-3">
              <p className="all fs-4 ">{cartPage.common}</p>
              <ul className="list-unstyled d-flex flex-column">
                <li>
                  {cartPage.products}
                  <b>
                    {totalSum} 000 {cartPage.sum}
                  </b>
                </li>
                <li>
                  {cartPage.delivery}
                  <b>
                    {deliverySum} 000 {cartPage.sum}
                  </b>
                </li>
                <hr />
                <li>
                  {cartPage.toPay}
                  <b>
                    {deliverySum + totalSum} {cartPage.sum}
                  </b>
                </li>
                <Link to={userDatas ? '/checkout' : '#'}  className="btn btn-outline-dark mt-3 py-2 checkout_btn rounded-4 me-2"   data-bs-toggle={userDatas ? '.' : 'modal'} data-bs-target={`${userDatas ? '.' : '#exampleModal'}`}>
                  {cartPage.goToCheckout}
                </Link>
              </ul>
            </div>
          </div>
        )}
      </section>
      <Footer/>
    </div>
  );
};

export default CartPage;
