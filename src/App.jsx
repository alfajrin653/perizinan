/**
 * src/App.jsx
 * Main application component composing layout and sections
 */
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/layout/FloatingCTA';
import HeroSlider from './components/sections/HeroSlider';
import SearchBar from './components/sections/SearchBar';
import AboutStats from './components/sections/AboutStats';
import Services from './components/sections/Services';
import InternationalSetup from './components/sections/InternationalSetup';
import OfficeLocations from './components/sections/OfficeLocations';

export default function App() {
  return (
    <div className='font-sans antialiased text-dark'>
      <Navbar />
      <main className='pt-16'>
        <HeroSlider />
        <div className='max-w-6xl mx-auto px-4'>
          <SearchBar />
          <AboutStats />
          <Services />
          <InternationalSetup />
          <OfficeLocations />
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
