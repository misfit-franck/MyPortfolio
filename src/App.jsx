import './css/App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoExistPage from './pages/NoExistPage';
import HomeFragment from './pages/fragmets/HomeFragment';
import { AboutFragment } from './pages/fragmets/AboutFragment';
import ContactFragment from './pages/fragmets/ContactFragment';
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
            <Route path='contact' element={<ContactFragment />} />
          </Route>
          <Route path='*' element={<NoExistPage />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;