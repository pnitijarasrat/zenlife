import React from 'react';
import HomePage from './Component/Home/Home';
import MainPage from './MainPage';
import Bio from './Component/Bio/Bio'
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <HomePage />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/bio' element={<Bio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
