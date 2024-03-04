import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({ title, description, image, url, githubUrl, tech }) => (
  <div className="flex flex-col rounded-lg shadow-md p-4  w-[300px]">
    <div className="mb-4 overflow-hidden items-center">
      <a href={url}>
        {' '}
        <h3 className="font-bold text-lg mb-2">{title}</h3>
      </a>
      <a href={url}>
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
      </a>
    </div>
    <p className="text-base mb-2">{description}</p>
    <div className="mt-4">
      <strong>Technologies:</strong>
      <div className="flex flex-wrap gap-2">
        {tech.map((techItem, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-600"
          >
            {techItem}
          </div>
        ))}
      </div>
    </div>
    <div className="flex items-center mt-auto">
      <a href={githubUrl} className="inline-flex items-center mt-4 text-sm">
        <FaGithub size="2em" className="text-gray-500 hover:text-black" />
      </a>
      <a
        href={url}
        className="inline-flex items-center mt-4 text-sm font-medium text-indigo-600 hover:underline ml-2"
      >
        Read More
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  </div>
)
const Projects = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
    <h2 className="text-center text-3xl font-bold mb-8">Projects</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
)

export default Projects

const projects = [
  {
    id: 1,
    title: 'Tailored tails',
    description:
      'A E-commerce website because I love animals and thought it would be a fun way to challenge myself.',
    image: require('../assets/images/tailoredtails.PNG'),
    url: '/tailoredtails',
    githubUrl: 'https://github.com/KadeVo/tailored-tails-fullstack',
    tech: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux',
      'MongoDB',
      'Stripe',
      'Node.js',
    ],
  },
  {
    id: 2,
    title: 'Newsight',
    description:
      'A news website utilizing NewsAPI and Next.js that I wanted to create to help me keep up with current affairs.',
    image: require('../assets/images/newsight.gif'),
    url: '/newsight',
    githubUrl: 'https://github.com/KadeVo/newsight',
    tech: ['React.js', 'Tailwind CSS', 'Next.js', 'NewsAPI', 'TypeScript'],
  },
  {
    id: 3,
    title: 'The Organisers',
    description:
      'A full stack web application for capstone project at Dev Academy. Working with a group of 5 to provide everyday utilities to make life easier.',
    image: require('../assets/images/organisers.png'),
    url: '/organisers',
    githubUrl: 'https://github.com/KadeVo/capstoneproject',
    tech: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Express',
      'Knex',
      'SQLite',
    ],
  },
  {
    id: 4,
    title: 'Pomodoro',
    description:
      'A Pomodoro timer that I created in React Native to help me study for the AZ-900 exam.',
    image: require('../assets/images/pomodoro.jpg'),
    url: '/pomodoro',
    githubUrl: 'https://github.com/KadeVo/pomodoro-app',
    tech: ['React.js', 'React Native', 'Tailwind CSS', 'Expo', 'TypeScript'],
  },
]
