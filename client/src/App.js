import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login';
import Signup from './signup';
import Welcome from './welcome';
import Home from './home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/welcome" element={<Welcome></Welcome>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
