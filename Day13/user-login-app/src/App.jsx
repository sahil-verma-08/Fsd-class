import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from './component/MainLayout';
import Register from './component/Register';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Logout from './component/Logout';

const App = () => {
  const [data,setData]=useState();
  return (
    
    <div>
      {JSON.stringify(data)}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
          <Route path='/login' element={<Login  regLogin={data}/>}/>
          <Route path='/register' element={<Register regData={setData}/>}/>
          </Route>
          <Route path='/dashboard' element={<Dashboard regDash={setData} />}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App