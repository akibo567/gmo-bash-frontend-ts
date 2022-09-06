import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Calendar from './Components/Calendar';
import ResultTable from './Components/ResultList';


const TopPage = () => {
  return (
    <>
    <div>Calendar</div>
      <Calendar></Calendar>
      <ResultTable></ResultTable>
      <NavLink to="/MenuPage">
        <p>メニュー</p>
      </NavLink>
    </>
  )
}

export default TopPage