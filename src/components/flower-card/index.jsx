import React from 'react';
import { useContext } from 'react';
import context from '../../context';
import './style.scss'
import { Link, NavLink } from 'react-router-dom';
const FlowerCard = ({data}) => {
    
    const datas = useContext(context);
    const lang = datas.lang
    const orderCart = datas.orderCart
    const addToCart = datas.addToCart
    const deleteToCart = datas.deleteToCart
    const isExists =(id)=>{ 
          if(orderCart[id]?.find(el=> el._id == id)){
            return true
          }else{
            return false
          }
    }
    return (
      <Link to={`/flowers/${data._id}`} className='text-decoration-none text-dark'>
        <div className='flower_card position-relative' >
            <img src={data.img_link} alt="flower" />
            <Link to={isExists(data._id) ? '/cart' : '#'} className='add-cart btn btn-light' onClick={()=> !isExists(data._id) && addToCart(data)}>
              {isExists(data._id) ? 'View Cart' : 'Add to cart'} 
            </Link>
            <p className="name mt-3 fs-5 text-uppercase">{data.name}</p>
            <p className='text-secondary'>{data.price} 000 {lang=='uz' ? 'so\'m' : lang == 'ru' ? "сум" : "soum"}</p>
        </div>
      </Link>
    );
}; 

export default FlowerCard;