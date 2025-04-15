import React from 'react'
import icon1 from '../../../public/images/1.jpg'
import icon2 from  '../../../public/images/2.jpg'
import icon3 from '../../../public/images/5.jpg'
import icon4 from '../../../public/images/4.jpg'

export default function LastNav() {
  return (
    <div className='w-1oo container'>
        <div className='hr mt-5 mx-auto '> </div>
<div className="row pt-5 g-5 justify-content-center">
    <div className="col-lg-2 col-md-4 mx-3 text-center text-white">
        <img className='mb-2' src={icon4} alt="" />
        <p>جلسات خاصه اودورات جماعيه</p>
    </div>
    <div className="col-lg-2 col-md-4 mx-3 text-center text-white">
        <img className='mb-2' src={icon2} alt="" />
        <p>   ورش العمل والتدريبات المتخصصه</p>
    </div>
    <div className="col-lg-2 col-md-4 mx-3 text-center text-white">
        <img className='mb-2' src={icon3} alt="" />
        <p>   تعلم منهج الحياه والتفكير الاجابي</p>
    </div>
    <div className="col-lg-2 col-md-4 mx-3 text-center text-white">
        <img className='mb-2' src={icon4} alt="" />
        <p>   ساعد نفسك لاكتشاف زاتك وتطوير وعيك</p>
    </div>
</div>
    
    </div>
  )
}
