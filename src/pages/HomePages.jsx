/**
 * src/App.jsx
 * Main application component composing layout and sections
 */
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
// import FloatingCTA from './components/layout/FloatingCTA'
import HeroSlider from '../components/sections/home/HeroSlider'
import SearchBar from '../components/sections/home/SearchBar'
import AboutStats from '../components/sections/home/AboutStats'
import Services from '../components/sections/home/Services'
import InternationalSetup from '../components/sections/home/InternationalSetup'
import OfficeLocation from '../components/sections/VirtualOffice/OfficeLocations'
import { Virtual } from 'swiper/modules'

export default function HomePages(){
  return (
    <div className="font-sans antialiased text-dark">
      {/* <Navbar /> */}
      <main className="pt-16">
        <HeroSlider />
        <div className="max-w-6xl mx-auto px-4">
          <AboutStats />
          <SearchBar />
          <Services />
          <InternationalSetup />
          <OfficeLocation />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
