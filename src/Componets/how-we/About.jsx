import React from 'react'
import about from '../../../public/images/how/about.png'
import './howwe.css'
export default function About() {
  return (
    <div className='about-page py-5 mb-5'>
      <div className="row gap-5 px-5">
        <div className="col-lg-4">
            <div className="images">
                <img src={about} className='w-100' alt="" />
            </div>
        </div>


        <div className="col-lg-6">
            <div className="info">
<h1><span>//</span>من نحن</h1>
<h3>مرحباً بك في عالم التغيير والتطوير الذاتي، نحن فريق متمرس لمساعدتك على تحقيق أقصى إمكاناتك، سواء في حياتك الشخصية أو المهنية، من خلال أحدث التقنيات التدريبية الفعالة لتعزيز وعيك وتفكيرك وتحقيق النجاح. </h3>
            </div>
        </div>
      </div>

    </div>
  )
}
