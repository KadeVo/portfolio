import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
  return (
    <div className="flex justify-center mt-4 space-x-4">
      <a
        href="https://www.linkedin.com/in/kadin-vo/"
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 flex items-center hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a
        href="https://github.com/KadeVo"
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 flex items-center hover:text-gray-800"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  )
}

export default Socials
