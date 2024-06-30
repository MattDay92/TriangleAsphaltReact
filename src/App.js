import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './view/Home';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
