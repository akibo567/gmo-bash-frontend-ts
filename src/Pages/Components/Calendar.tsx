import React from 'react'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const Calendar = () => {
  let menuList = [];
  return (
    <>
    <div>Calendar</div>
    <div>
    <FullCalendar
      plugins={[dayGridPlugin]} // pluginsにdayGridPluginを設定する
      headerToolbar={{
        right: 'dayGridMonth,dayGridWeek',
      }}
      initialView="dayGridMonth" // 初期表示のモードを設定する
      events={'https://fullcalendar.io/api/demo-feeds/events.json'}
    />
    </div>
    </>
  )
}

export default Calendar