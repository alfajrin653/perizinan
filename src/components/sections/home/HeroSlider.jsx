/**
 * src/components/sections/HeroSlider.jsx
 * Hero slider using Swiper.js with fade effect and Ken Burns background
 */

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { slides } from '../../../data/slides';

export default function HeroSlider() {
  return (
    <section className='min-h-screen'>
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect='fade'
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='relative flex min-h-screen items-center justify-center text-center text-white overflow-hidden'>
              {/* Background */}
              <img src={slide.image} alt={slide.headline} className='absolute inset-0 h-full w-full object-cover ken-burns' />

              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-b from-primary/30 to-dark/60'></div>

              {/* Content */}
              <div className='relative z-10 max-w-3xl px-6'>
                <span className='inline-block rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur'>ONE STOP BUSINESS HUB</span>

                <h1 className='mt-6 text-4xl font-bold md:text-6xl'>{slide.headline}</h1>

                <p className='mt-4 text-lg text-white/80'>{slide.sub}</p>

                <div className='mt-8 flex flex-wrap justify-center gap-4'>
                  <a href='/' className='rounded-full bg-accent px-6 py-3 font-semibold text-dark transition hover:opacity-90'>
                    Pelajari Lebih
                  </a>

                  {/* <a href='#' className='rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur transition hover:bg-white/20'>
                    Cari Lokasi
                  </a> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
