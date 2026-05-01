import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Brands from './pages/Brands';
import Brands2 from './pages/Brands2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Brands />} />
        <Route path="/brands-2" element={<Brands2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
