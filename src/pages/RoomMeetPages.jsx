import React from 'react'
import AboutRoomMeet from '../components/sections/RoomMeet/AboutRoomMeet'
import MeetingRoomPricing from '../components/sections/RoomMeet/MeetingRoomPricing'
import MeetingRoomLocation from '../components/sections/RoomMeet/RoomMeetingLocation'
import KeuntunganMeetRoom from '../components/sections/RoomMeet/KeuntunganMeetRoom'

export default function RoomMeetPages() {
  return (
    <div>
      <AboutRoomMeet />
      <MeetingRoomPricing />
      <MeetingRoomLocation />
      <KeuntunganMeetRoom />
    </div>
  )
}
