import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import TestPage from './pages/TestPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
