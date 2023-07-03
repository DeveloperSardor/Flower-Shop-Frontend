import { useContext, useRef, useState } from "react";
import Header from "../../components/header";
import MobileHeader from "../../components/mobile_header";
import context from "../../context";
import "./style.scss";
import {
  cancel,
  erroroccured,
  loginPage,
  registerPage,
  successfulyupdated,
  updateImage,
  updateText,
} from "../../usedatas/datas";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

const Profile = () => {
    
    const contextDatas = useContext(context);
    const [loginState, setLoginState] = useState(true);
    const [registerState, setRegisterState] = useState(false);
    const userDatas = localStorage.getItem("userDatas")
    ? JSON.parse(localStorage.getItem("userDatas"))
    : null;
    
    const currentLang = contextDatas.currentLang;
    const [avatarPath, setAvatarPath] = useState(userDatas?.img_link);
    const [loaderUpload, setLoaderUpload] = useState(false);
    const inputUsernameRef = useRef();
    const inputLoginPhoneRef = useRef();
    const inputEmailRef = useRef();
    const inputPhoneRef = useRef();
    const inputWebRef = useRef();
    const inputMainUsernameRef = useRef();
    const inputMainPhoneRef = useRef();
    const inputMainEmailRef = useRef();
    const inputMainWebsiteRef = useRef();
    
    document.title = currentLang.navbar.shop.shoppages.myaccount.title
    const config = {
    headers: {
      token: JSON.parse(localStorage.getItem('userDatas'))?.token,
    },
  };

  const uploadAva = (pics) => {
    setLoaderUpload(true);
    let type = pics.type.substring(pics.type.length - 3);
    if (pics && type == "mp4") {
      return toast.error(registerPage.invalidmp4);
    }
    if (pics && (type == "png" || "jpg" || "svg")) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      fetch("https://api.cloudinary.com/v1_1/roadsidecoder/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setAvatarPath(data.url);
          toast.success(registerPage.imageuploaded);
          setLoaderUpload(false);
        })
        .catch((err) => {
          toast.error(`${err.message}`);
          setLoaderUpload(false);
        });
    }
    if (pics && pics.type.split("/")[0] != "image") {
      setLoaderUpload(false);
      return toast.error(registerPage.invalidfile);
    }
  };
  const toggleAuthorization = () => {
    if (loginState) {
      setLoginState(false);
      setRegisterState(true);
    } else {
      setLoginState(true);
      setRegisterState(false);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (
      !/^\+998\d{9}$/.test(inputLoginPhoneRef.current.value.replace(/ /g, ""))
    ) {
      toast.error(loginPage.invalidPhone);
    } else {
      try {
        let { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
          phone: inputLoginPhoneRef.current.value.replace(/ /g, ""),
        });
        if (!data.success) {
          throw new Error(loginPage.notfoundaccount);
        } else {
          toast.success(loginPage.successfulylogined);
          localStorage.setItem(
            "userDatas",
            JSON.stringify({ ...data.data, token: data.token })
          );
          window.location.reload();
        }
      } catch (error) {
        toast.error(erroroccured);
      }
    }
  };

  const updateHandler = async () => {
    if (
      !inputMainEmailRef.current.value.trim().length ||
      !inputMainPhoneRef.current.value.trim().length
    ) {
      return toast.error(registerPage.requiredNameAndPhone);
    }
    if (
      inputMainEmailRef.current.value &&
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        inputMainEmailRef.current.value.trim()
      )
    ) {
      return toast.error(registerPage.invalidemail);
    }
    if (
      !/^\+998\d{9}$/.test(inputMainPhoneRef.current.value.replace(/ /g, ""))
    ) {
      return toast.error(loginPage.invalidPhone);
    }
    const { data } = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/profile`,
      {
        username: inputMainUsernameRef.current.value.trim(),
        email: inputMainEmailRef.current.value.trim(),
        phone: inputMainPhoneRef.current.value.trim(),
        website: inputMainWebsiteRef.current.value.trim(),
        img_link: avatarPath,
      },
      config
    );

    if (data.success) {
      toast.success(successfulyupdated);
      localStorage.setItem(
        "userDatas",
        JSON.stringify({ ...data.data, token: data.token })
      );
      window.location.reload();
    } else {
      toast.error(data.message);
    }
  };

  const UpdateHandler = async (e) => {
    e.preventDefault();
    if (
      !inputPhoneRef.current.value.trim().length ||
      !inputUsernameRef.current.value.trim().length
    ) {
      return toast.error(registerPage.requiredNameAndPhone);
    }
    if (
      inputEmailRef.current.value &&
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        inputEmailRef.current.value
      )
    ) {
      return toast.error(registerPage.invalidemail);
    }
    if (!/^\+998\d{9}$/.test(inputPhoneRef.current.value.replace(/ /g, ""))) {
      return toast.error(loginPage.invalidPhone);
    }
    const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
      username: inputUsernameRef.current.value.trim(),
      phone: inputPhoneRef.current.value.replace(/ /g, ""),
      email: inputEmailRef.current.value.trim(),
      website: inputWebRef.current.value.trim(),
      img_link: avatarPath,
    });
    if (data.success) {
      localStorage.setItem(
        "userDatas",
        JSON.stringify({ ...data.data, token: data.token })
      );
      window.location.reload();

      toast.success(registerPage.successfulyregistered);
    } else {
      return toast.error(registerPage.erroroccured);
    }
  };

  return (
    <div className="page profile">
      <MobileHeader />
      <section className="firstSec">
        <Header />
        <ToastContainer />
        <div className="main mx-auto w-75  text-center">
          <h3 className="text">
            {currentLang.navbar.shop.shoppages.myaccount.title}
          </h3>
        </div>
      </section>
      <section className="p-3 py-5 secondSec">
        {!userDatas && loginState ? (
          <div className="login-component">
            <h2 className="title">{loginPage.login}</h2>
            <form
              className="flex-column py-2 px-3 gap-5  d-flex"
              onSubmit={loginHandler}
            >
              <input
                type="text"
                className="form-control"
                required
                ref={inputLoginPhoneRef}
                placeholder={loginPage.phonenumber + `  Ex: +998901234567`}
              />
              <div className="d-flex gap-5 align-items-center">
                <button className="btn  btn-dark text-light">
                  {loginPage.login}
                </button>
                <span className="dontaccount">
                  {loginPage.donthaveanaccount}? &nbsp;{" "}
                  <b className="toRegister" onClick={toggleAuthorization}>
                    {registerPage.register}
                  </b>
                </span>
              </div>
            </form>
          </div>
        ) : !userDatas && registerState ? (
          <div className="register-component px-4 py-2">
            <h2 className="title">{registerPage.register}</h2>
            <form
              className="gap-3 mt-4 d-flex flex-column"
              onSubmit={UpdateHandler}
            >
              <input
                type="text"
                className="form-control"
                placeholder={registerPage.enteryourname}
                ref={inputUsernameRef}
                required
              />
              <input
                type="email"
                className="form-control"
                placeholder={registerPage.enteryouremail}
                ref={inputEmailRef}
              />
              <input
                type="text"
                className="form-control"
                placeholder={registerPage.enteryourphone}
                ref={inputPhoneRef}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder={registerPage.enteryourwebsite}
                ref={inputWebRef}
              />
              <label className="custom-upload">
                <span className="file-name rounded-3 p-3 px-4 border text-center">
                  <i className="fa-solid fa-paperclip"></i>
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => uploadAva(e.target.files[0])}
                />
                <b className="ms-2">{registerPage.uploadphoto}</b>
              </label>
              <div className="d-flex mt-3 gap-5 align-items-center">
                <button className="btn  btn-dark text-light">
                  {loaderUpload ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <>{registerPage.register}</>
                  )}
                </button>
                <span className="haveaccount">
                  {registerPage.doyouhaveanaccount}? &nbsp;
                  <b className="toRegister" onClick={toggleAuthorization}>
                    {loginPage.login}
                  </b>
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="main mx-auto">
            <div className="box w-75 mx-auto shadow py-3 px-3">
              <div className="body mt-5 p-3  d-flex">
                <div className="left">
                  <img src={userDatas.img_link} alt={userDatas.username} />
                  <label className="custom-upload change border mt-2 p-2 w-75">
                    <span className="file-name rounded-3 p-1 px-3 border text-center">
                      <i className="fa-solid fa-paperclip"></i>
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => uploadAva(e.target.files[0])}
                    />
                    <b className="ms-2">{updateImage}</b>
                  </label>
                </div>
                <div className="right d-flex flex-column gap-3">
                  <input
                    type="text"
                    ref={inputMainUsernameRef}
                    required
                    defaultValue={userDatas.username}
                    placeholder={registerPage.enteryourname}
                  />
                  <input
                    type="text"
                    ref={inputMainPhoneRef}
                    required
                    defaultValue={userDatas.phone}
                    placeholder={registerPage.enteryourphone}
                  />
                  <input
                    type="email"
                    ref={inputMainEmailRef}
                    defaultValue={userDatas.email ? userDatas.email : ""}
                    placeholder={registerPage.enteryouremail}
                  />
                  <input
                    type="text"
                    ref={inputMainWebsiteRef}
                    defaultValue={userDatas.website ? userDatas.website : ""}
                    placeholder={registerPage.enteryourwebsite}
                  />
                </div>
              </div>
              <div className="footer d-flex px-2 justify-content-between align-items-center">
                <Link
                  to={"/"}
                  className="text-decoration-none btn btn-secondary"
                >
                  {cancel}
                </Link>
                <button className="btn btn-primary" onClick={updateHandler}>
                  {loaderUpload ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <>{updateText}</>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer/>
    </div>
  );
};

export default Profile;
