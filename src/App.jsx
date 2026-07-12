import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePages from "./pages/HomePages";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import VirtualOfficePage from "./pages/VirtualOfficePage";
import RoomMeetPages from "./pages/RoomMeetPages";
import PodcastStudio from "./pages/PodcastStudio";
import CoworkingSpace from "./pages/CoworkingSpace";
import PembuatanPT from "./pages/PendirianPT";
import PembuatanCv from "./pages/PembuatanCv";
import PendirianFirmaPages from "./pages/PendirianFirmaPages";
import CallCenterPages from "./pages/CallCenterPages";
import PembuatanHaki from "./pages/PendaftaranHaki";
import PajakDanAkuntansi from "./pages/PajakDanAkutansi";
import PendirianPma from "./pages/PendiriPma";
import VisaBusinessPages from "./pages/VisaBusinessPages";
import KitasInvestor from "./pages/KitasInvestor";
import VisaTuris from "./pages/VisaTuris";
import InternationalSetup from "./pages/InternationalSetup";
import HubungiKami from "./pages/HubungiKami";
import VirtualOfficeDetail from "./pages/VirtualOffice/VirtualOfficeDetail";
import RoomMeetDetail from "./pages/VirtualOffice/RoomMeetDetail";
import CoworkingDetails from "./pages/VirtualOffice/CoworkingDetails";
import TentangKami from "./pages/TentangKami";
import FindLocation from "./pages/FindLocation";
import PromoPages from "./pages/PromoPages";


export default function App() {
  return (
    <BrowserRouter>
      <div >
        <Navbar />

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePages />} />
           {/* --- UBAH BAGIAN VIRTUAL OFFICE MENJADI SEPERTI INI --- */}
            <Route path="/virtual-office">
              {/* Index: Akan muncul saat URL pas di /virtual-office */}
              <Route index element={<VirtualOfficePage />} />
              
              {/* Detail: Akan muncul saat URL di /virtual-office/detail/1 */}
              <Route path="detail/:id" element={<VirtualOfficeDetail />} />
            </Route>
            {/* ----------------------------------------------------- */}


            <Route path="/Room-meet">
            <Route index element={<RoomMeetPages />} />
            <Route path="detail/:id" element={<RoomMeetDetail />} /> 
            </Route>


            <Route path="/Podcast-studio" element={<PodcastStudio />} />
            <Route path="find-location" element={<FindLocation />} />

            <Route path="/coworking-space">
              <Route index element={<CoworkingSpace />} />
              <Route path="detail/:id" element={<CoworkingDetails />} />
            </Route>

            <Route path="/pendirian-pt" element={<PembuatanPT />} />
            <Route path="/pendirian-cv" element={<PembuatanCv />} />
             <Route path="/pendirian-firma" element={<PendirianFirmaPages />} />
            <Route path="/pendaftaran-haki" element={<PembuatanHaki />} />
            <Route path="/call-answering" element={<CallCenterPages />} />
            <Route path="/pajak-akuntansi" element={<PajakDanAkuntansi />} />
            <Route path="/pendirian-pma" element={<PendirianPma />} />
             <Route path="/internasional-business" element={<InternationalSetup />} />
            <Route path="/visa-bisnis" element={<VisaBusinessPages />} />
            <Route path="/kitas-investor" element={<KitasInvestor />} />
            <Route path="/visa-turis" element={<VisaTuris/>} />
            <Route path="/hubungi-kami" element={<HubungiKami  />} />
            <Route path="/tentang-kami" element={<TentangKami />} /> 
            <Route path="/promo" element={<PromoPages />} />
            {/* Error page */}
            <Route path="*" element={<div><div class="flex flex-col items-center justify-center text-sm max-md:px-4 py-20">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              404 Not Found
             </h1>
              <div className="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
             <p className="md:text-xl text-gray-400 max-w-lg text-center">
              The page you are looking for does not exist or has been moved.
             </p>
           <a href="/" className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-all">
        Back to Home
        <svg class="group-hover:translate-x-0.5 transition" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417" stroke="#1E1E1E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
           </a>
        </div>
          </div>} />

        
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}