import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './Componets/header/Headers'
import About from './Componets/about/About'
import We from './Componets/we/We'
import Questions from './Componets/questions/Questions'
import Footer from './Componets/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './Componets/header/Navbar'
import WePage from './pages/we/WePage'
import Call from './pages/call/Call'

function App() {

  return (
  <>

<BrowserRouter>
<Navbar></Navbar>
<Routes>

          <Route path="/">
          <Route index element={<Home/>} />
          <Route
          path="wePage"
          element={ <WePage />}
        />
        <Route
          path="call"
          element={ <Call />}
        />
          </Route>
</Routes>
<Footer></Footer>

</BrowserRouter>



  </>
  )
}

export default App
