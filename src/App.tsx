import './css/App.css';
import React from 'react';
import HomePage from './pages/HomePage.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoExistPage from './pages/NoExistPage.tsx';
import HomeFragment from './pages/fragmets/HomeFragment.tsx';
import { AboutFragment } from './pages/fragmets/AboutFragment.tsx';
import { PortfolioFragment } from './pages/fragmets/PortfolioFragment.jsx';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}>
            <Route index element={<HomeFragment />} />
            <Route path='about' element={<AboutFragment />} />
            <Route path='portfolio' element={<PortfolioFragment />} />
          </Route>
          <Route path='*' element={<NoExistPage />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;