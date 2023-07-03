import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { erroroccured, saveText, successfulyDeletedComment, successfulyUpdatedComment } from "../../usedatas/datas";
import axios from "axios";
import './style.scss'

const Comment = ({el, reloadComment}) => {
    const commentText = useRef()
    const editComRef= useRef()
    const userId = JSON.parse(localStorage.getItem('userDatas'))?._id
    const userToken = JSON.parse(localStorage.getItem('userDatas'))?.token
    const config= {
        headers : {
            token : userToken
        }
    }    

    const deleteComment = async()=>{
        try {
            const {data} = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/comments/${el._id}`, config)
            if(data.success){
                toast.success(successfulyDeletedComment)
            }else{
                return toast.error(erroroccured)
            }
             reloadComment()
        } catch (error) {
            toast.error(erroroccured)
        }
    }
    const editComment = async()=>{
        if(editComRef.current.innerHTML == '<i class="fa-regular text-light fa-pen-to-square"></i>'){
            commentText.current.readOnly = false
            commentText.current.focus()
            editComRef.current.innerText = saveText
        }else{
           if(el.comment== commentText.current.value.trim()){
            commentText.current.readOnly = true
            editComRef.current.innerHTML = `<i class="fa-regular text-light fa-pen-to-square"></i>`
               return 
           }
        try {
            const {data} = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/comments/${el._id}`, {
                comment : commentText.current.value.trim()
            }, config)
            if(data.success){
                toast.success(successfulyUpdatedComment)
                reloadComment()
            }else{
                toast.error(erroroccured)
            }
        } catch (error) {
            toast.error(erroroccured)
        }
        commentText.current.readOnly = true
        editComRef.current.innerHTML = `<i class="fa-regular text-light fa-pen-to-square"></i>`
       }
    }
    return (  
        <li  className="comment-item mx-auto shadow rounded-2  d-flex align-items-center justify-content-between">
                   
        <div className="left w-25 d-flex  gap-4 ">
            <img src={el.user.img_link} className="rounded-4"  alt={el.user.username} />
            <p>{el.user.username}</p>
        </div>
        <input className="center border-0 w-50" onDoubleClick={editComment} ref={commentText}   readOnly defaultValue={el.comment}/>
        <div className="right d-flex justify-content-around  w-35 w-2 py-2">
            {el.user._id == userId &&  <div  className=" w-60  d-flex justify-content-around">
            <button className="btn btn-warning" onClick={editComment} ref={editComRef}><i class="fa-regular text-light fa-pen-to-square"></i></button>
            <button  onClick={deleteComment} className="btn btn-danger"><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>}

            <em>{new Date(el.createdAt).getFullYear()}/{new Date(el.createdAt).getMonth() + 1}/{new Date(el.createdAt).getDate()}</em>
        </div>
    </li>
    );
}
 
export default Comment;