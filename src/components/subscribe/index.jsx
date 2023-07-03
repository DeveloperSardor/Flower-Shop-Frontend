import React, {useContext, useRef} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import context from "../../context";
import './style.scss'
const Subscribe = () => {
    const data = useContext(context);
    const currentLang = data.currentLang;
    const lang = data.lang;
    const sendEmailRef = useRef();
    const SendMailNotify = (e) => {
      e.preventDefault();
      if (!sendEmailRef.current.value.length) {
        return toast.error(lang == 'en' ? "Please fill the input!" : lang=='ru' ? 'Пожалуйста, заполните ввод' : 'Iltimos, kiritishni toʻldiring');
      }
      sendEmailRef.current.value = "";
      toast(lang == 'en' ?  "Thank you for your message. It has been sent." : lang=='ru' ? 'Спасибо за ваше сообщение. Оно было отправлено.' : 'Xabaringiz uchun rahmat. Yuborildi.');
    };
    return ( 
        <div className="subscribe text-center mt-5 p-3">
        <h3 className="title">
          {currentLang.sectionSeven.subscribetoweeklynewsletter}
        </h3>
        <form
          action=""
          onSubmit={SendMailNotify}
          className="d-flex mx-auto w-50"
        >
          <input
            type="email"
            ref={sendEmailRef}
            placeholder={currentLang.sectionSeven.youremail}
          />
          <button className="btn btn-dark sendMessageBtn text-uppercase">
            {currentLang.sectionSeven.sendMessage}
          </button>
          <ToastContainer />
          
        </form>
      </div>
    
    );
}
 
export default Subscribe;