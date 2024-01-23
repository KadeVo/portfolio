import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Project1Page from './pages/TailoredTails'
import TailoredTails from './pages/TailoredTails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="tailoredtails" element={<Project1Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
