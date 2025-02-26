import { useState } from 'react'
import './App.css'
import Header from './Pages/Header'
import Page from './Pages/Page'
import ResumeBuilder from './Pages/ResumeBuilder'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='flex flex-col'>
        <Header />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/builder" element={<ResumeBuilder />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
