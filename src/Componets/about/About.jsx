import React, { useEffect, useState } from 'react';
import { BsArrowUpLeft, BsArrowUpRight, BsCheck, BsCheck2 } from 'react-icons/bs';
import './about.css'; // تأكد إن عندك ملف CSS اسمه about.css
import 'animate.css';
export default function About() {
     const [scrollY, setScrollY] = useState(0);
 
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
  return (
    <div className='container about mt-5 py-5 overflow-hidden'>
      <div className="row align-items-center px-md-5">
        {/* استخدمنا الكلاسات هنا لتطبيق الانيميشن */}
        <div className={`col-lg-6  $ `}  >
          <div className={`${scrollY >=200 ?  'animate__backInLeft visible ' : 'visually-hidden'}`}  style={{animationDuration:'4S'}}></div>
          <img className={`w-100 `} src='../../../public/images/about.png' alt="" />
        </div>
        <div className={`col-lg-6 overflow-hidden`}  >
          <div className={`  info-about py-5 pe-5   ${scrollY >=200 ?  'animate__backInLeft visible ' : 'visually-hidden'}`}  style={{animationDuration:'4S'}}>
            <h1 className={``}> <span>// </span> من هو بسام الخوري؟ </h1>
            <p className='pt-2'>بسام الدوري هو مدرب محترف معتمد في تطوير الوعي الذاتي والتنمية البشرية، لديه شغف للعمل لأكثر من 15 عامًا في تقديم الدورات التدريبية والاستشارات التي تساعد الأفراد على تحقيق التغيير الإيجابي في حياتهم.</p>
            <div className='p-0 m-0'>
              <li><h5><span><BsCheck /></span>مدرب معتمد من قبل المؤسس إدوارد دي بونو في "تقنيات الستة للتفكير" و "الكورت للتفكير". </h5></li>
              <li><h5><span><BsCheck /></span>مساعد الخبير إبراهيم الفقي في دورة المدرب المحترف المعتمد منذ عام 2006.</h5></li>
              <li><h5><span><BsCheck /></span>مصمم برنامج تدريبي شامل لتنمية الوعي في المجتمع المصري.</h5></li>
              <li><h5><span><BsCheck /></span>محاضر معتمد من وزارة الشباب والرياضة.</h5></li>
              <li><h5><span><BsCheck /></span>قدم برنامج "معًاة الحياة" على قناة "الحدث اليوم" الفضائية.</h5></li>
            </div>
            <button className='mt-4 btn btn-success px-4 text-white fw-bold py-2 px-2 '>معلومات اكتر <i className='me-1'><BsArrowUpLeft /></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}
