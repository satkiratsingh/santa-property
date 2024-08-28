// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="*" element={<FallbackScreen />} />
      </Routes>
    </Router>
  );
}

export default App;

const FallbackScreen = () => (
  <div className="flex flex-col items-center justify-center w-full h-screen">
    <h1 className="text-[48px]">404 Page Not Found!</h1>
    <a
      href="/"
      className="mt-4 bg-[#00985B] border-2 border-[#00985B] hover:border-white hover:shadow-[0_0_14px_1px_gray] text-white font-bold px-8 py-4"
    >
      Go Home
    </a>
  </div>
);
