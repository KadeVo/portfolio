import { Link } from 'react-router-dom'
const TailoredTails = () => {
  const skillsAndFrameworks = [
    'React.js',
    'Tailwind CSS',
    'JavaScript',
    'Redux',
    'MongoDB',
    'Stripe',
    'Node.js',
  ]

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mt-10">Tailored Tails</h1>

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
            Tailored Tails was created with the goal of developing our own
            Authorization System and Cart. Collaborating with a friend, we faced
            numerous challenges throughout the process, with the most
            significant hurdle being the implementation of a robust
            Authorization system and Cart functionality. Our tech stack included
            React, TailwindCSS, TypeScript, NodeJS, Redux, Stripe, and MongoDB.
            One of the major challenges was determining the optimal approach for
            managing user items in the Cart. Initially considering a
            database-centric solution, we eventually discovered the simplicity
            and efficiency of using local storage. This adjustment significantly
            improved manageability. Throughout the project, we engaged in
            extensive research, experimenting with various approaches, and
            adapting based on trial and error. The learning curve was steep as
            we delved into Redux, MongoDB, Stripe integration, and the creation
            of a custom Login/Registration system. Despite the hurdles, the
            project provided invaluable insights into the complexities of
            everyday systems. Looking back, the experience not only enhanced our
            technical skills but also expanded our problem-solving mindset. This
            project means a lot to me as my friend and I struggled every day for
            a while, overcoming multiple hurdles and giving us more experience
            in having to tackle problems at a different angle.
          </p>
          <br></br>
          <h2 className="text-lg font-bold">Discussing the project</h2>
          <br></br>
          <div
            className="relative"
            style={{ paddingBottom: '56.25%', height: 0 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Odg_jhWpXEg"
              title="Tailored tails - Discussion"
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

export default TailoredTails
