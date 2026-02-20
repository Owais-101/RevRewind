import React from 'react'
import LandingPage from './pages/LandingPage'
import Form from './pages/Form'
import { Route, Routes } from 'react-router'
import Confirmation from './pages/Confirmation'


const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/form' element={<Form />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>


    </div>
  )
}

export default App