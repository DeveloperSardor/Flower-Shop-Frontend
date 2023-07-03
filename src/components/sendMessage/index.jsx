import React, { useContext, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import emailjs from "@emailjs/browser";
import context from "../../context";
import "./style.scss";
import axios from "axios";
const SendMessage = () => {
  const form = useRef();

  const SendMailNotify = () => {
    toast(lang == 'en' ?  "Thank you for your message. It has been sent." : lang=='ru' ? 'Спасибо за ваше сообщение. Оно было отправлено.' : 'Xabaringiz uchun rahmat. Yuborildi.');
  };

  const seneEmail =async(e) => {
    e.preventDefault();
    try {
      let {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/messages`, )
    } catch (error) {
      
    }
    e.target.reset();
  };
  const datas = useContext(context);
  const currentLang = datas.currentLang;
  return (
    <div className="sendMessage mt-2 d-flex align-items-center gap-3">
      <div className="left w-50">
        <img
          src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-img-1.jpg"
          alt=""
        />
      </div>
      <ToastContainer />

      <form onSubmit={seneEmail} ref={form} className="right w-50">
        <p className="heading fs-5 font-monospace">
          {currentLang.writeMessage}
        </p>
        <div className="body d-flex align-items-center gap-2 flex-wrap">
          <input
          required
            type="text"
            className="name"
            placeholder={currentLang.yourname}
          />
          <input
            type="email"
            required
            className="email"
            placeholder={currentLang.youremail}
          />
          <textarea
            name=""
            required
            id=""
            cols="70"
            rows="5"
            placeholder={currentLang.writeussomething}
            className="px-1"
          ></textarea>
          <button className="sendMsg text-uppercase">
            {currentLang.sectionSeven.sendMessage}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
