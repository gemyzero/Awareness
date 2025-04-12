import React from 'react'
import './howwe.css'
export default function Contact() {
  return (
   <>
    <div className='row align-items-start p-5 contact' >
    <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <iframe
    className='w-100'
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d31.23456789!3d30.01234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAxJzQ0LjIiTiAzMcKwMTQnMDQuOCJF!5e0!3m2!1sar!2seg!4v1678886400000!5m2!1sar!2seg"
    width="600"
    height="650"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6 p-3">
                        <h1>انضم الينا اليوم!</h1>
                        <p className='py-4'>إذا كنت تبحث عن التغيير والتطوير، فأنت في المكان الصحيح. دعنا نساعدك في تحقيق أهدافك وتجاوز التحديات. ابدأ رحلتك اليوم وانطلق نحو النجاح</p>
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text"  id="name" placeholder="الاسم"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="email"  id="email" placeholder="البريد الإلكتروني"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text"  id="subject" placeholder="رقم الموبايل"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea   placeholder="الرسالة"  ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-success w-100 py-3" type="submit">إرسال </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
    </div>
   
   </>
  )
}
