import React from 'react'
import qu from '../../../public/images/qu.png'
import SectionWithToggle from './SectionWithToggle'
import "./questions.css"
export default function Questions() {
  return (
    <div className='we p-5 container'>
      <div className="row p-lg-5   justify-content-center">
   
        <div className="col-lg-6 col-md-12 info-questions">
            <h1 className='mb-2'><span>//  </span > الاسئله الشائعه</h1>
            <h4 className='mb-5'>اجابات بسيطه علي استفسارات حول التدريب</h4>
            <div className="img-questions  mt-5">
                <img src={qu} className='  w-100 ' alt="Questions" />
            </div>
        </div>
        <div className="col-lg-6 col-md-12 mt-md-5 all-questions">
<SectionWithToggle></SectionWithToggle>
        </div>
      </div>
    </div>
  )
}
