import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaMobileAlt,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
// import azureLogo from 'public/images/azure.png'

const Skills = () => {
  const skillsList = [
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#e34f26' },
    { name: 'CSS', icon: <FaCss3 />, color: '#1572b6' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38b2ac' },
    { name: 'React', icon: <FaReact />, color: '#61dafb' },
    { name: 'React Native', icon: <FaMobileAlt />, color: '#61dafb' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#8cc84b' },
    { name: 'MongoDB', icon: <FaDatabase />, color: '#4db33d' },
    { name: 'Redux', icon: <span>Redux</span>, color: '#764abc' },
    { name: 'Git', icon: <FaGit />, color: '#f05032' },
    // {
    //   name: 'Azure Fundamentals',
    //   icon: <img src={azureLogo} alt="Azure Logo" />,
    //   color: '#0089d6',
    // },
  ]

  return (
    <div>
      <h2>Technical Skills</h2>
      <div className="grid grid-cols-3 gap-4">
        {skillsList.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="text-2xl mr-2" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
