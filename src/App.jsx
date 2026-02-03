import React from 'react'
import NavBar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import MessageSection from './sections/MessageSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  return (
    <main>
      <NavBar/>
      <HeroSection/>
      <MessageSection/>
      <div className='h-dvh'></div>
    </main>
  )
}

export default App
