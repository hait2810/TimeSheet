import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
const HelloN = (props) => {
  const url = props
  console.log("hi");
 console.log("full path",url.url);
  return (
    <>
    
      <h2>{url.url}</h2>
    
      <FullCalendar
  plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
/>
</>
  )
}

export default HelloN