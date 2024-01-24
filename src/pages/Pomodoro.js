import { Link } from 'react-router-dom'

const Pomodoro = () => {
  const skillsAndFrameworks = [
    'React.js',
    'React Native',
    'TypeScript',
    'Expo',
    'Tailwind CSS',
  ]

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mt-10">Pomodoro</h1>

        <div className="flex flex-wrap justify-center mt-4">
          {skillsAndFrameworks.map((skill, index) => (
            <p
              key={index}
              className="bg-gray-200 text-gray-700 px-4 py-2 m-2 rounded-full"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-10 pb-10 border-b border-gray-200">
        <h2 className="text-2xl font-bold">About the Project</h2>
        <div className="mt-4">
          <p className="text-gray-600">
            This is one of my newest projects, my own pomodoro study application
            using React Native. I created it for when I was studying for the
            AZ-900 exam and it allowed me to stay focused and have a productive
            study session. It is currently a WIP and a testing ground to teach
            myself and get more familiar with React Native & Mobile Application
            development.{' '}
          </p>
          <br></br>
          <h2 className="text-lg font-bold">Disucssing the project</h2>
          <br></br>
          <div
            className="relative"
            style={{ paddingBottom: '56.25%', height: 0 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/kcDzW3ppsqk"
              title="Kadin speaking about his project"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <Link to="/">
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-md transition duration-300 hover:bg-gray-600 hover:text-gray-100">
              Go Back to Main Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Pomodoro
