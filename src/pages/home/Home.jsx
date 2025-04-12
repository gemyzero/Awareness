import React from 'react'
import Headers from '../../Componets/header/Headers'
import About from '../../Componets/about/About'
import We from '../../Componets/we/We'
import Questions from '../../Componets/questions/Questions'
import Testimonials from '../../Componets/testimonials/Testimonials'

export default function Home() {
  return (
    <div>
      <Headers></Headers>
      <About></About>
<We></We>
<Testimonials></Testimonials>
    </div>
  )
}
