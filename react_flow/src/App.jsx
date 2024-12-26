import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SimpleOne from './components/SimpleOne'

const App = () => {
  return (
    <main className='w-screen h-screen'>
      <Routes>
        <Route path='/' element={<SimpleOne />} />
      </Routes>
    </main>
  )
}

export default App