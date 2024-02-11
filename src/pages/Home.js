import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center p-20">
        <div className="text-center">
          <About />
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default Home
