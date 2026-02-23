import React from 'react'
import LandingPage from './pages/LandingPage'
import Form from './pages/Form'
import { Route, Routes } from 'react-router'
import Confirmation from './pages/Confirmation'
import RewindSection from './components/RewindSection'
import Rewind from './pages/Rewind'
import Summary from './pages/Summary'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/form' element={<Form />} />
        <Route path='/confirmation' element={
          <ProtectedRoute><Confirmation /></ProtectedRoute>
        } />
        <Route path='/rewind' element={
          <ProtectedRoute><Rewind /></ProtectedRoute>
        } />
        <Route path='/summary' element={
          <ProtectedRoute><Summary /></ProtectedRoute>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App