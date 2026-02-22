import React from 'react'
import LandingPage from './pages/LandingPage'
import Form from './pages/Form'
import { Route, Routes } from 'react-router'
import Confirmation from './pages/Confirmation'
import RewindSection from './components/RewindSection'
import Rewind from './pages/Rewind'
import Summary from './pages/Summary'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/form' element={<Form />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/rewind' element={<Rewind />} />
        <Route path='/summary' element={<Summary />} />
      </Routes>


    </div>
  )
}

export default App