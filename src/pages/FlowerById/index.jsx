import { useContext, useEffect, useRef, useState } from "react";
import "./style.scss";
import { Link, useParams } from "react-router-dom";
import { GetComments, GetFlowersById } from "../../api/api";
import MobileHeader from "../../components/mobile_header";
import Header from "../../components/header";
import { CommentsTitle, FlowerByIdDatas, cartPage, enterYourComment, erroroccured, notFoundComments, notFoundFlowers, sendText, successfulyAddedComment } from "../../usedatas/datas";
import { ToastContainer , toast} from "react-toastify";
import axios from "axios";
import Comment from "../../components/comment";
import Footer from '../../components/footer'
import { useNavigate } from "react-router-dom";
import context from "../../context";

const FlowerById = () => {
  const navigate = useNavigate()
  const contextDatas = useContext(context)
  const addToCart = contextDatas.addToCart
  const userDatas = localStorage.getItem('userDatas') ?JSON.parse(localStorage.getItem('userDatas'))  : null 
    const userToken =  JSON.parse(localStorage.getItem('userDatas'))?.token;
    const userId =  JSON.parse(localStorage.getItem('userDatas'))?._id
    const config = {
        headers : {
            token : userToken
        }
    }
    const commentInputRef = useRef()
    const editCommentInputRef = useRef()
  const [flower, setFlower] = useState({});
  const [comments, setComments] = useState([])
  const { id } = useParams();
  const GetFlowerData = async () => {
    setFlower(await GetFlowersById(id));
  };
  const GetCommentsData = async()=>{
    setComments(await GetComments(id))
  }

  const  buyNowHandler = ()=>{
    addToCart(flower)
    navigate('/cart')
  }

  
  const AddComment = async(e)=>{
    e.preventDefault()
    const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/comments`, {
        flower : flower._id,
        comment : commentInputRef.current.value.trim()
    }, config)
    if(data.success){
     toast.success(successfulyAddedComment)
     window.location.reload()
    }else{
        return toast.error(data.message)
    }
    commentInputRef.current.value = ''
  }
  
  useEffect(() => {
    GetFlowerData();
    GetCommentsData()
  }, []);

  document.title = flower.name
  return (
    <div className="page flowerById">
      <MobileHeader />
      <section className="firstSec">
        <Header />
        <ToastContainer/>
        <div className="main">
          <h2 className="text">{flower.name}</h2>
        </div>
      </section>
      <section className="secondSec py-5 pt-4 mt-3 allInfoFlower">
        <div className="flower d-flex gap-5 w-75 mx-auto">
          <div className="left">
            <img src={flower.img_link} alt={flower.name} />
          </div>
          <div className="right">
            <h3 className="title">{flower.name}</h3>
            <p>
              Price: {flower.price} 000 {cartPage.sum}
            </p>
            <p>{flower.desc ? flower.desc : ""}</p>
            <button onClick={buyNowHandler} className="btn btn-dark mt-3">
              {FlowerByIdDatas.buyNow}
            </button>
          </div>
        </div>
        <ul className="list-unstyled p-3 mt-4   comments d-flex flex-column gap-3">
            <h2 className="text-center">{CommentsTitle}</h2>
            {comments.length ?  comments.map((el, idx)=>(
             <Comment el={el} reloadComment={GetCommentsData} key={idx}/>
                
            )) : <h3 className="text-center mt-2">{notFoundComments}</h3>}
            <form  onSubmit={userDatas && AddComment} className="shadow addCom rounded-3 mt-2 d-flex p-3  align-items-center justify-content-between w-60 mx-auto">
                <input type="text" ref={commentInputRef} required placeholder={enterYourComment} className="w-50 rounded-3 border-1 p-2"/>
                <button className="btn btn-primary" data-bs-toggle={userDatas ? '.' : 'modal'} data-bs-target={`${userDatas ? '.' : '#exampleModal'}`} >{sendText}</button>
            </form>
        </ul>
      </section>
      <Footer/>
    </div>
  );
};

export default FlowerById;
