import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Newsight from './pages/Newsight'
import TailoredTails from './pages/TailoredTails'
import Pomodoro from './pages/Pomodoro'
import Organisers from './pages/Organisers'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="tailoredtails" element={<TailoredTails />} />
        <Route path="pomodoro" element={<Pomodoro />} />
        <Route path="Newsight" element={<Newsight />} />
        <Route path="Organisers" element={<Organisers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
