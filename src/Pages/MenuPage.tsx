import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

import Calendar from './TopPage';

const MenuPage = () => {
  return (
    <>
      <div>Home</div>
      <div>
        <NavLink to="/">
          <p>カレンダー</p>
        </NavLink>
      </div>
    </>
  )
}

export default MenuPage