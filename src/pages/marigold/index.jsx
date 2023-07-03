import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';
import context from '../../context';
import './style.scss'
import MobileHeader from '../../components/mobile_header';
import SectionGift from '../../components/sectionGift';
import { fakeMarigoldsFlower } from '../../usedatas/datas';
import Footer from '../../components/footer';


const Marigold = () => {
    const datas = useContext(context);
    const currentLang = datas.currentLang;
    useEffect(()=>{
      document.title = currentLang.navbar.home.marigold.title

    }, [])
    return ( 
       <div className='marigold'>
        <MobileHeader/>
         <section className="firstSec">
            <Header/>
             <div className="main d-flex align-items-center">
                 <h2 className="heading">{currentLang.flowerslovers}</h2>
                 <h3 className="title">{currentLang.everythingyouneed}</h3>
                 <p className="desc">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibe <br /> ndum auctor, nisi elit conse quat ipsu. Proin gravida nibh vel velit auctor ali quet. <br /> Aen ean sol lici tudin, lorem quis biben dum.</p>
                 <button className='readMore'>{currentLang.readMore.title}</button>
             </div>
         </section>
         <section className="secondSec px-5">
        <SectionGift />
      </section>
      <section  className="secondSec">
        <h3 className="heading text-center">{currentLang.navbar.home.marigold.title}</h3>
        <div className="flowers d-flex align-items-center justify-content-between">
             {fakeMarigoldsFlower.map((el)=>(
                <img src={el.url} alt='photo' width={'35%'}/>
             ))}
        </div>
      </section>
      <Footer/>
       </div>
     );
}
 
export default Marigold;