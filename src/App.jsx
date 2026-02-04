import React from 'react'
import NavBar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  return (
    <main>
      <NavBar/>
      <HeroSection/>
      <MessageSection/>
      <FlavorSection/>
      <div className='h-dvh'></div>
    </main>
  )
}

export default App
