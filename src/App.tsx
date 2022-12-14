import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import { theme } from './Setting-color';

import TopPage from './Pages/TopPage';
import MenuPage from './Pages/MenuPage';
import LoginPage from './Pages/LoginPage';
import UserSettingPage from './Pages/UserSettingPage';
import SignUpPage from './Pages/SignUpPage';

import Header from './Pages/Components/Header';

import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<TopPage />} />
              <Route path="/MenuPage" element={<MenuPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/setting" element={<UserSettingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </BrowserRouter>   
        </ThemeProvider>   
      </div>
    </Provider>
  );
}

export default App;
