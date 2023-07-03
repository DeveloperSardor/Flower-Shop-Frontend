import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Comment from "../../components/comment";
import context from "../../context";
import './style.scss'
import MobileHeader from "../../components/mobile_header";
import Header from "../../components/header";
import { CommentsTitle, enterYourComment, erroroccured, notFoundComments, sendText, successfulyAddedComment } from "../../usedatas/datas";
import axios from "axios";

const BlogById = () => {
    const contextDatas = useContext(context);
    const currentLang = contextDatas.currentLang;
    const userDatas = localStorage.getItem('userDatas') ?JSON.parse(localStorage.getItem('userDatas'))  : null;
    const config = {
        headers : {
            token : userDatas?.token
        }
    };
    const [blog, setBlog] = useState(null)
    const commentInputRef = useRef()
    const [comments, setComments] = useState([])
    const {id} = useParams()
    const GetComms = async()=>{
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/comments?query=blog&_id=${id}`)
        setComments(data.data)
        console.log(comments);
      } catch (error) {
        toast.error(erroroccured)
      }     
    }
    const AddComment = async(e)=>{
        e.preventDefault()
        const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/comments`, {
            blog : blog?._id,
            comment : commentInputRef.current.value.trim()
        }, config)
        if(data.success){
            toast.success(successfulyAddedComment)
            GetComms()
        }else{
            return toast.error(data.message)
        }
        commentInputRef.current.value = ''
    }
    
    
    const GetBlog = async()=>{
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blogs/${id}`)
            setBlog(data.data)
        } catch (error) {
            toast.error(erroroccured)
        }
    }
    
    useEffect(()=>{
        GetBlog()
        GetComms()
    }, [])
    return ( 
        <div className="blogById-page">
           <MobileHeader/>
                <Header/>
            <section className="firstSec">
                <div className="blog mt-4  p-3 mx-auto p-1">
                {blog?.file_link.slice(-3) === "mp4" ? (
                    <video src={blog?.file_link} controls className="hm"></video>
                  ) : (
                    <img src={blog?.file_link} alt={blog?.title} className="hm" />
                  )}
                  <p className="title fs-5">{blog?.title}</p>
                  <p className="desc">{blog?.desc}</p>
                 
                </div>
                <div className="cms">
                <ul className="list-unstyled p-3 mt-4   comments d-flex flex-column gap-3">
            <h3 className="text-center">{CommentsTitle}</h3>
            {comments.length ?  comments.map((el, idx)=>(
             <Comment el={el} reloadComment={GetComms} key={idx}/>
                
            )) : <h5 className="text-center mt-2">{notFoundComments}</h5>}
            <form  onSubmit={userDatas && AddComment} className="shadow addCom rounded-3 mt-2 d-flex p-3  align-items-center justify-content-between w-60 mx-auto">
                <input type="text" ref={commentInputRef} required placeholder={enterYourComment} className="w-50 rounded-3 border-1 p-2"/>
                <button className="btn btn-primary" data-bs-toggle={userDatas ? '.' : 'modal'} data-bs-target={`${userDatas ? '.' : '#exampleModal'}`} >{sendText}</button>
            </form>
        </ul>
                </div>
            </section>
        
        </div>
     );
}
 
export default BlogById;