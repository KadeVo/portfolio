import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import CV from '../assets/images/finalCV.pdf'

const Socials = () => {
  return (
    <div className="flex justify-center mt-4 space-x-4">
      <a
        href="https://www.linkedin.com/in/kadin-vo/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 flex items-center"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a
        href="https://github.com/KadeVo"
        target="_blank"
        rel="noreferrer"
        className="text-gray-800 flex items-center"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a
        href={CV}
        className="inline-flex items-center px-4 py-2 border border-blue-500 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </div>
  )
}

export default Socials
