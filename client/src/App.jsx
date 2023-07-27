import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Signup from './components/Signup'
import Button from "@mui/material/Button";
import Home from './components/Home';
import Login from './components/Login';


function App() {
  


  return (


    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
