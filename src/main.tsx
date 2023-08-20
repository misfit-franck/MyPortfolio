import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoExistPage from "./pages/NoExistPage.tsx";
import HomeFragment from "./pages/fragments/HomeFragment.tsx";
import { AboutFragment } from "./pages/fragments/AboutFragment.tsx";
import ContactFragment from "./pages/fragments/ContactFragment.tsx";
import { PortfolioFragment } from "./pages/fragments/PortfolioFragment.jsx";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomeFragment />} />
          <Route path="about" element={<AboutFragment />} />
          <Route path="portfolio" element={<PortfolioFragment />} />
          <Route path="contact" element={<ContactFragment />} />
        </Route>
        <Route path="*" element={<NoExistPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
