import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePages from "./pages/HomePages";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import VirtualOfficePage from "./pages/VirtualOfficePage";
import RoomMeetPages from "./pages/RoomMeetPages";
import PodcastStudio from "./pages/PodcastStudio";

// import HomePages from "./pages/HomePages";
// import About from "./pages/About";
// import ServicesPage from "./pages/Services";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div >
        <Navbar />

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/virtual-office" element={<VirtualOfficePage />} />
            <Route path="/Room-meet" element={<RoomMeetPages />} />
            <Route path="/Podcast-studio" element={<PodcastStudio />} />

            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}