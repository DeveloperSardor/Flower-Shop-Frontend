import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";
import "./style.scss";
import { loginPage, registerPage } from "../../usedatas/datas";
import axios from "axios";
const Register = () => {
  const inputUsernameRef = useRef();
  const inputEmailRef = useRef();
  const inputPhoneRef = useRef();
  const registerHandler = async () => {
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
      username: inputUsernameRef.current.value,
      phone: inputPhoneRef.current.value.replace(/ /g, ""),
      email: inputEmailRef.current.value,
    });

    if (data.success) {
      localStorage.setItem(
        "userDatas",
        JSON.stringify({ ...data.data, token: data.token })
      );
      window.location.reload();
      toast.success(registerPage.successfulyregistered);
    } else {
         return toast.error(registerPage.erroroccured)
    }
  };
  return (
    <>
      <div className="register">
        <ToastContainer />
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="RegisterModal"
          tabIndex="-1"
          aria-labelledby="RegisterModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="RegisterModalLabel">
                  {registerPage.register}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex flex-column align-items-center gap-3">
                <input
                  type="text"
                  ref={inputUsernameRef}
                  className="border-1 rounded-3 p-1"
                  placeholder={registerPage.enteryourname}
                />
                <input
                  type="email"
                  ref={inputEmailRef}
                  className="border-1 rounded-3 p-1"
                  placeholder={registerPage.enteryouremail}
                />
                <input
                  type="text"
                  ref={inputPhoneRef}
                  defaultValue={"+998"}
                  className="p-1  border-1 rounded-3"
                />
              </div>
              <div className="modal-footer justify-content-between">
                <p className="text-decoration-none text-dark"></p>
                <button
                  type="button"
                  onClick={registerHandler}
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  {registerPage.register}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
