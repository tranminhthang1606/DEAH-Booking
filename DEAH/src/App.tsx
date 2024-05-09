import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={HomePage}/>
      </Routes>
    </>
  )
}

export default App
