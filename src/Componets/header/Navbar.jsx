import React, { useEffect, useState } from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { BsArrowUpRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [scrollY, setScrollY] = useState(0);
    const  Navigate  = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY ){

        }
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
 console.log(scrollY)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  } , [window.scrollY]);

  const [activeLinkIndex, setActiveLinkIndex] = useState(0); // نفترض إن "الرئيسية" هو النشط في البداية

  const handleLinkClick = (index) => {
    setActiveLinkIndex(index);
  };
  return (
    <div className={`container-fluid n p-2 ${scrollY > 1 ?  'bg-white ' : ''}`}>
    <nav className="navbar  navbar-expand-lg  text-white  px-4">
      <div className="container-fluid ">
    <div className='logo ' >
    <a className={`  navbar-brand ${scrollY > 1 ?  'text-success ' : ''}`}>بسام الخوري</a>
    <p  className={`${scrollY > 1 ?  'text-success ' : ''}`}>خبير تطوير الوي الداتي</p>
    
    </div>    
        <button  className="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent"style={{}} >
          <ul className="navbar-nav e-auto mb-2 mb-lg-0  w-100">
            <li className="nav-item mx-3">
            <a className={`nav-link ${scrollY > 1 ?  'text-black ' : 'text-white'} ${activeLinkIndex === 0 ? 'active' : ''} `} onClick={() => {handleLinkClick(0)
                Navigate('/')
            }}  href="#"> الرئيسية</a>

            </li>
            <li className="nav-item mx-3 ">
              <a className={`nav-link  ${scrollY > 1 ?  'text-black ' : 'text-white'} ${activeLinkIndex === 1 ? 'active' : ''}`} onClick={() => { handleLinkClick(1) 
                Navigate('/wePage')}} href="#">من نحن</a>
            </li>
            <li  className="nav-item mx-3 ">
              <a className={`nav-link  ${scrollY > 1 ?  'text-black ' : 'text-white'} ${activeLinkIndex === 2 ? 'active' : ''}`} onClick={() => {handleLinkClick(2)
                Navigate('/call')
              }} >اتصل بنا</a>
            </li>
       
         
          </ul>
          <form className="d-flex w-100 justify-content-end text-start align-items-center gap-4">
            <div>
                <h5 className={`w-100 ${scrollY > 1 ?  'text-success ' : ''}`}> 965 65 123 456+ <FaPhoneVolume /></h5>
            </div>
            <button className="btn btn-outline-success px-4" type="submit"><BsArrowUpRight />تواصل معنا الان</button>
          </form>
        </div>
      </div>
    
    </nav>
    <div className="hr mx-auto d-block"></div>
    
    </div>
  )
}
