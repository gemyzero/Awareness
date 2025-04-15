import React from 'react'
import basam from '../../../public/images/basam.png'

export default function How() {
  return (
    <div className='container w-100 overflow-hidden how' style={{paddingTop:'100px'}}>
      <div className="row justify-content-center">
        <div className="mb-4 col-lg-5 info-how px-lg-5">
<div className='px-lg-5  '>
<h1>استلهم رحلتك نحو النجاح مع بسام الدوري</h1>
            <p>نصائح عملية لتطوير الذات وتحقيق النجاح.
مقتطفات من الدورات التدريبية وورش العمل.
لمحات تلفزيونية وبرنامج "معًاة الحياة" نحو استمتع بالمحتوى الثري، واستلهم رحلتك نحو النمو!</p>
<button className='btn btn-success px-5  py-1'>عرض الكل</button>
</div>

        </div>
        <div className="col-lg-6 cards-how mt-md-5 mt-sm-5 ">
       <div className=" mb-5  d-lg-flex  d-md-flex d-sm-block align-items-center">
       <div className='img-how'>
                <img src={basam} alt="" />
            </div>  
            <div className='me-lg-3 p-2'>
            <h3>كيفية تحقيق النجاح الشخصي: خطوات عملية</h3>
            <p>اكتشف استراتيجيات فعالة لتحقيق أهدافك الشخصية بثقة ونجاح.</p>
            <button className=' btn btn-success px-lg-5  py-1'>عرض مقال</button>
            </div>
       </div>
       <div className=" mb-5  d-lg-flex  d-md-flex d-sm-block align-items-center">
       <div className='img-how'>
                <img src={basam} alt="" />
            </div>  
            <div className='me-lg-3 p-2'>
            <h3>كيفية تحقيق النجاح الشخصي: خطوات عملية</h3>
            <p>اكتشف استراتيجيات فعالة لتحقيق أهدافك الشخصية بثقة ونجاح.</p>
            <button className=' btn btn-success px-lg-5  py-1'>عرض مقال</button>
            </div>
       </div>
       <div className=" mb-lg-5  d-lg-flex  d-md-flex d-sm-block align-items-center">
       <div className='img-how'>
                <img src={basam} alt="" />
            </div>  
            <div className='me-3 p-2'>
            <h3>كيفية تحقيق النجاح الشخصي: خطوات عملية</h3>
            <p>اكتشف استراتيجيات فعالة لتحقيق أهدافك الشخصية بثقة ونجاح.</p>
            <button className=' btn btn-success px-lg-5  py-1'>عرض مقال</button>
            </div>
       </div>

        </div>

      </div>
    </div>
  )
}
