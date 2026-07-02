import React from 'react'
import AboutPodcastStudio from '../components/sections/PodcastStudio/AboutPodcastStudio'
import PricePodcastStudio from '../components/sections/PodcastStudio/PricePodcastStudio'
import PodcastFacilities from '../components/sections/PodcastStudio/PodcastFacilities'


export default function PodcastStudio() {
  return (
    <div>
      <AboutPodcastStudio />
      <PodcastFacilities/>
      <PricePodcastStudio />
    </div>
  )
}
