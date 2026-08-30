import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Portfolio from './page/Portfolio';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

