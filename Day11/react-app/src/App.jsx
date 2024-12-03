import React from 'react'
import CounterApp from './component/CounterApp';

import ImageApp from './component/ImageApp';
import MainLayout from './component/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout/>}></Route>
      <Route path="/counter" element={<CounterApp/>}></Route>
      <Route path="/image" element={<ImageApp/>}>
      </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
};

export default App