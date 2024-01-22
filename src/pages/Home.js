import About from '../components/About'
import Skills from '../components/Skills'
import Socials from '../components/Socials'
// import Socials from '../components/Socials'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio</h1>
        <Socials />
        <div>
          <About />
          {/* <Socials /> */}
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default Home
