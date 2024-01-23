import { Link } from 'react-router-dom'

const Organisers = () => {
  const skillsAndFrameworks = [
    'React.js',
    'Tailwind CSS',
    'Agile Methodologies',
    'TypeScript',
  ]

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mt-10">Organisers</h1>

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
            This is my capstone project at Dev Academ Aotearoa. We spent 5 days
            working on it in a modern software development team environment
            under agile methodologies. I acted as the Scrum Facilitator and
            worked on the front-end styling of the initial dashboard, each
            widget styling, and worked on backend to frontend on the todo, gift
            ideas & budget calculator widgets. I got to work with multiple
            people in an intense developing situation due to the time
            constraint. I learnt how to function better as a team, reinforced
            backend knowledge, how to problem-solve with others, and improved my
            ability of being a Scrum Facilitator. One thing I think I could have
            improved on is hosting more meetings for the team. I think although
            my group met up a couple times a day, I personally felt it would
            have been nice to have everyone checked up on more and discuss
            issues as a team because everyone is learning from this project & we
            could have combined our learning.{' '}
          </p>
          <br></br>
          <h2 className="text-lg font-bold">Capstone Presenetation</h2>
          <br></br>
          <div
            className="relative"
            style={{ paddingBottom: '56.25%', height: 0 }}
          >
            <iframe
              title="YouTube Video"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/QE5OJYASifY"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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

export default Organisers
