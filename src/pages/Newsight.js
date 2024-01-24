import { Link } from 'react-router-dom'
const Newsight = () => {
  const skillsAndFrameworks = ['React.js', 'Tailwind CSS', 'Next,js', 'NewsAPI']

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mt-10">Newsight</h1>

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
            The idea stemmed from wanting all my news articles all in one place
            for me to go efficently scroll through. The project is
            TypeScript/React with Next.js. I selected Next.js so I could learn
            more how Next.js operates alongside challenging myself working more
            with external API's. I faced a few challenges when making my custom
            hook as I had to teach myself using Next.js useSearchParams,
            altering the api response and the general way Next.js functions.
            Overall, I am happy with how it has developed over time as it taught
            me a bunch of valuable lessons as I became a lot more familiar with
            TailwindCSS, Next.js and external APIS.{' '}
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
              src="https://www.youtube.com/embed/S7iPr-oXMdQ"
              title="Newsight - Discussion"
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

export default Newsight
