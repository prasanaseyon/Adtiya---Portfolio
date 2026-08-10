/* ==================================================================
   App.jsx — routes. Paths here must match the `to` values in NAV.
   ================================================================== */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./layout";
import {
  Home, About, Work, Projects, Publications,
  Awards, Volunteering, Skills, NotFound,
} from "./pages";

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
