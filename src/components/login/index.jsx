import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { erroroccured, loginPage } from "../../usedatas/datas";
import './style.scss'
import axios from "axios";

const Login = () => {
  const [phone, setPhone] = useState(0);
  const inputPhoneRef = useRef();
  const Notify = (msg) => {
    toast(msg);
  };


  const loginHandler = async(e) => {
    e.preventDefault()
    if (
      !/^\+998\d{9}$/.test(
        inputPhoneRef.current.value.replace(/ /g, '')
      )
    ) {
      toast.error(loginPage.invalidPhone);
    } else {
        try {
            let {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,{
                phone  :  inputPhoneRef.current.value.replace(/ /g, '')

            }, {})
            if(!data.success){
                throw new Error(loginPage.notfoundaccount)
            }else{
              localStorage.setItem('userDatas', JSON.stringify({...data.data, token :data.token}))
              toast.success(loginPage.successfulylogined)
                window.location.reload()
            }
        } catch (error) {
            toast.error(erroroccured)
        }
    }
  };
  return (
    <div className="login">
      <ToastContainer />
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {loginPage.login}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="modal-body" onSubmit={loginHandler}>
              <input
                type="text"
                ref={inputPhoneRef}
                defaultValue={"+998"}
                className="p-1  border-1 rounded-3"
                placeholder={loginPage.phonenumber}
              />
            <div className="modal-footer  mt-3 justify-content-between">
              <p className="text-decoration-none text-dark">
                {loginPage.donthaveanaccount} <Link data-bs-toggle={'modal'} data-bs-target={'#RegisterModal'}>{loginPage.register}</Link>
              </p>
              <button
              type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Login
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
