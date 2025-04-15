import React, { useState } from 'react'
import './testimonials.css'
import New from '../../../public/images/test/3.jpg'

const testimonials = [
    {
      image: New, // استبدل بمسار الصورة الأولى
      text: 'البروفيسور سهيل مشنتف: طيب الروح وأسلوبه الممتع، هذا المدرب لديه اللمسة المدهشة في إيصال المعلومة بطريقة تروح وهي اكتشاف جديد للنفس وهي تدخل لذاتي في عوالم كيفية تملك ذي نفسي وعلاقتها بكل شيء في الكون.',
      name: 'البروفيسور سهيل مشنتف',

    },
    {
      image: New, // استبدل بمسار الصورة الثانية
      text: 'نص الشهادة الثانية هنا.',
      name: 'البروفيسور سهيل مشنتف',

    },
    {
      image: New, // استبدل بمسار الصورة الثالثة
      text: 'نص الشهادة الثالثة هنا.',
      name: 'البروفيسور سهيل مشنتف',

    },
    // يمكنك إضافة المزيد من الشهادات هنا
  ];



  





export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const prevTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
  
    const currentTestimonial = testimonials[currentIndex];
  
    return (
        <div  className=' container w-100 overflow-hidden testimonials py-5'>
        <div className="row  p-5">
        <div className="col-lg-4  title-testimonials px-lg-5">
            <h1 >قصص نجاح حقيقية من عملائنا في مجال التدريب</h1>
            <button className='' >كن انتا التالي</button>
        </div>

        <div className="col-lg-8">
         <div  className='content '>
            <div className='textContainer '>
              <h2>{currentTestimonial.  name} </h2>
              <p  className='testimonialText '>{currentTestimonial.text}</p>
            </div>
            <div  className='imageContainer'>
              <img
                src={currentTestimonial.image}
                alt="صورة العميل"
                className='image'
              />
            </div>
          </div>
          <div  className='buttonsContainer d-flex justify-content-end  mt-5  '>
            <button onClick={prevTestimonial}  className='button'>
              {'<'}
            </button>
            <button onClick={nextTestimonial}  className='button'>
              {'>'}
            </button>
          </div>
         </div>
        </div>
        </div>
      );
}
