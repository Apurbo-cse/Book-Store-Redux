import React from 'react'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Master from './components/layout/Maser';


function App() {

  return (
    <>
      <Routes>

        <Route  element={Master}>

          <Route/>

      </Routes>
    </>
  )
}

export default App
