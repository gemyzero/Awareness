import React from 'react'
import { BsArrowUpRight, BsCalendar2CheckFill } from 'react-icons/bs'
import LastNav from './LastNav'
export default function Hero() {
  return (
<div className='w-100 overflow-hidden container'>
<div className='hero  p-0 m-0 row'>
 <div className='content-hero '>
 <div className="info-hero text-white   ">
         <div>
         <small><span>//</span> اهلا بك.</small>
          <h1>بسام الخوري
خبير تطوير الوعي الداتي

</h1>
<h4>مؤلف كتاب معادلة الحياة ومدرب ومحترف في التنميه البشريه</h4>
        <button className="btn bg-success px-4 text-white fw-bold" type="submit"> احجز جلستك  الان   <i className='me-3'>< BsCalendar2CheckFill /></i> </button>

         </div>
        </div>

<div>
<LastNav></LastNav>

</div>
 </div>
    </div>

</div>

  )
}
