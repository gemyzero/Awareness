import React from 'react'
import vision from '../../../public/images/how/Vision1.png'

export default function Vision() {
  return (
    <div className='vision py-5'>
      
      <div className="row my-5 bg-white p-5 mx-5 ">
        <div className="col-lg-10 info-Vision p-4" >
<div>
    <h1 className='mb-5'><span>//</span> رؤيتنا </h1>
<h3 className='me-5'>نؤمن بأن كل إنسان لديه القدرة على تحقيق أهدافه وبناء حياة متوازنة مليئة بالإنجازات. رسالتنا هي تمكين الأفراد من اتخاذ خطوات واثقة نحو مستقبل أكثر إشراقًا من خلال التدريب والتوجيه الفعال.</h3>
</div>
        </div>
        <div className="col-lg-2">
            <div>
                <img src={vision} alt="" />
            </div>
        </div>
      </div>
      <div className="row my-5 bg-white p-5 mx-5 ">
      <div className="col-lg-2">
            <div>
                <img src={vision} alt="" />
            </div>
        </div>
        <div className="col-lg-10 info-Vision p-4" >
<div style={{direction:'ltr'}}>
    <h1 className='mb-5'>مهمتنا  <span>//</span></h1>
<h3 className='mt-3'>نهدف إلى تقديم تدريب متخصص يساعدك في اكتشاف ذاتك وتحسين مهاراتك وتطوير استراتيجيات عملية لتحقيق النجاح. نستخدم منهجيات حديثة تعتمد على التفكير الإبداعي والتخطيط الاستراتيجي والتوجيه الشخصي لنضمن لك رحلة تطور متكاملة.</h3>
</div>
        </div>
        
      </div>
    </div>
  )
}
