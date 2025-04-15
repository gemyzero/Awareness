import React from 'react'
import { TiSocialFacebook, TiSocialFacebookCircular } from 'react-icons/ti'
import './footer.css'
import { SlSocialFacebook } from 'react-icons/sl'
import { TfiTwitter } from 'react-icons/tfi'
import { BsInstagram } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { RiTiktokLine } from 'react-icons/ri'
import { FaFacebookF, FaInstagram, FaSnapchat } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='bg-dark text-white py-5 footer mx-auto container  '  >
      <div className="row justify-content-center   top-footer">
        <div className="card-1  col-lg-4 col-md-6 col-12 d-flex justify-content-lg-center justify-content-md-center justify-content-sm-center">
          <div>
          <h1>نحن نطور</h1>
          <h2>ونبني مستقبلا ناجحا</h2>
          </div>
        </div>
 
        <div className="card-2  col-lg-3 col-md-6 col-12 d-flex justify-content-lg-center justify-content-md-center justify-content-sm-start ">
      <div>
      <h1 className='mb-4'>العنوان</h1>
      <p>طريق النصر, القاهره , مصر</p>
      </div>
        </div>

        <div className="card-3  col-lg-4     col-md-6 col-12 d-flex justify-content-lg-center justify-content-md-center justify-content-sm-center  ">
           <div >
           <h1 className='mb-4'>تواصل معنا</h1>
            <p>bassam.alkhouri1971@gmail.com</p>
            <p> 01555600306</p>
            <ul >
            <li>
  <span className="icon-container">
  <a><TfiTwitter  style={{ borderRadius: '50%' , border:'3px solid white' }}  /></a>
  </span>
</li>

<li>
  <a><FaInstagram   style={{ borderRadius: '50%' , border:'3px solid white' }}  /></a>
</li>
<li>
  <a><CiLinkedin   style={{ borderRadius: '50%' , border:'3px solid white' }}  /></a>
</li>
<li>
  <a><RiTiktokLine   style={{ borderRadius: '50%' , border:'3px solid white' }}  /></a>
</li>
<li>
  <a><FaFacebookF   style={{ borderRadius: '50%' , border:'3px solid white' }}  /></a>
</li>
<li>
  <a><FaSnapchat   style={{ borderRadius: '50%' , border:'3px solid white' }}  /></a>
</li>

   </ul>
           </div>
        </div>


      </div>

      <div className="hr w-100"></div>
      <div className="row  px-5  mt-5 py-2">
        <div className="col-lg-5 me-5 ">
            <div className=' w-50 d-flex justify-content-between'>
                <h4 className='me-3'>خدماتنا</h4>
                <h4 className=''>الاتصل بنا</h4>
            </div>
        </div>
        <div className="col-lg-6  d-flex justify-content-lg-end">
            <div>
                <h4>Copyright © ٢٠٢٥ جميع الحقوق محفوظ</h4>
            </div>
        </div>

      </div>
    </div>
  )
}
