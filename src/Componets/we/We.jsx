import React from 'react'
import icon1 from '../../../public/images/1.jpg'
import icon2 from  '../../../public/images/2.jpg'
import icon5 from '../../../public/images/5.jpg'
import icon4 from '../../../public/images/4.jpg'
import './we.css'
import How from './How'
export default function We() {
  return (
    <div className='w-100 overflow-hidde container'>
      <div className="row  mt-5 pt-5 we ">
        <div className="col-lg-5 info-we py-5 px-5">
            <div><h1>استكشف خدمتنا</h1>
            <h2>نحن نقدم مجموعة متنوعة من الخدمات المصممة لمساعدتك على تطوير ذاتك وتحقيق أهدافك الشخصية والمهنية.</h2></div>
        </div>
        <div className="col-lg-7 my-2 cards-we">
<div className="row justify-content-center">
    <div className="col-lg-6  px-4  col-md-4 col-12 my-2 m-0 ">
        <div className='img-we  '>  <img   src={icon2} alt="" />        </div>
        <h3>الجلسات الفردية</h3>
        <p>استفد من جلسات فردية مخصصة تلبي احتياجاتك بشكل فريد. اعمل على تطوير ذاتك وتحقيق أهدافك بمساعدة خبرائنا المتخصصين الذين يقدمون لك الدعم والتوجيه اللازمين.</p>
    </div>
    <div className="col-lg-6  px-4  col-md-4 col-12 my-2 m-0 ">
        <div className='img-we '>  <img src={icon4} alt="" />        </div>
        <h3> الدورات التدريبية وورش العمل</h3>
<p>دورات تدريبية تفاعلية ومبتكرة تغطي العديد من المجالات لمساعدتك على اكتساب المعرفة والمهارات التي تحتاجها لتحقيق أهدافك وتطوير نفسك على الصعيدين الشخصي والمهني</p>
    </div>
    <div className="col-lg-6  px-4  col-md-4 col-12 my-2 m-0 ">
        <div className='img-we '>  <img src={icon5} alt="" />        </div>
        <h3>    الاستشارات العامة والتدريب المؤسسي</h3>
<p>استثمر في تطوير فريق عملك ومؤسستك من خلال حلول تدريبية واستشارية مخصصة. نعمل على تزويد مؤسستك بالأدوات والاستراتيجيات اللازمة لتحقيق النمو والنجاح المستدام.</p>
    </div>
    <div className="col-lg-6  px-4  col-md-4 col-12 my-2 m-0 ">
        <div className='img-we '>  <img src={icon2} alt="" />        </div>
        <h3>       المحتوى الإعلامي والتوعوي</h3>
        <p>تابع محتوانا الإعلامي القيم والمتنوع الذي يغطي مختلف جوانب التنمية الذاتية والمهنية. احصل على النصائح والأفكار الملهمة التي تساعدك على النمو والتطور المستمر.</p>
    </div>
</div>


        </div>

      </div>
      <How></How>
    </div>
  )
}
