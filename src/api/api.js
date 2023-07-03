import axios from "axios"
export const GetFlowers = async()=>{
    let {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/flowers`)
    return data.data
  }
export const GetFlowersById = async(id)=>{
    let {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/flowers/${id}`)
    return data.data
  }


 export const GetUsers = async()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users`)
    return data.data
   }
  


   export const GetComments = async (flower_id)=>{
    const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/comments/${flower_id}`)
    return data.data
   }

   export const GetCategories = async ()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
    return data.data
   }