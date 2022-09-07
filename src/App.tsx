import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

import TopPage from './Pages/TopPage';
import MenuPage from './Pages/MenuPage';
import Header from './Pages/Components/Header';

import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/MenuPage" element={<MenuPage />} />
          </Routes>
        </BrowserRouter>      
      </div>
    </Provider>
  );
}

export default App;
