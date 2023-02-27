import SectionMessage from '@atlaskit/section-message';
import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function HelloWorld() {
  const [excitementLevel, setExcitementLevel] = React.useState(0);
  return   <FullCalendar
  plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
/>
}
