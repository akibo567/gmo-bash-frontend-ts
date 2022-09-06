import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

import TopPage from './Pages/TopPage';
import MenuPage from './Pages/MenuPage';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/MenuPage" element={<MenuPage />} />
          </Routes>
        </BrowserRouter>      
      </div>
    </>
  );
}

export default App;
