import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const Calendar = () => {
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
      <NavLink to="/MenuPage">
        <p>メニュー</p>
      </NavLink>
    </>
  )
}

export default Calendar