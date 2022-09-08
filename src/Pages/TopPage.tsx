import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Calendar from './Components/Calendar';



const TopPage = () => {
  return (
    <>
      <Calendar></Calendar>
    </>
  )
}

export default TopPage