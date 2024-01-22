import About from '../components/About'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-20">
      <div className="text-center">
        <About />

        <Skills />
      </div>
    </div>
  )
}

export default Home
