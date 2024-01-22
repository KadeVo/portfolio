import kadinImage from '../assets/images/kadin.jpg'
import microsoftCert from '../assets/images/AZ-900.pdf'
import bachelorCert from '../assets/images/bachelor.pdf'
import CV from '../assets/images/finalCV.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className="mx-auto p-20 flex items-center">
      <div className="flex-shrink-0 mr-8">
        <div className="h-40 w-40 md:h-50 md:w-50 lg:h-60 lg:w-60 overflow-hidden rounded-full">
          <img
            src={kadinImage}
            alt="kadin vo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-base">
          I graduated with a{' '}
          <a href={bachelorCert} className="underline text-blue-500">
            Bachelor of Business
          </a>{' '}
          and transitioned my career after uncovering my passion for software
          development whilst I was coding as a hobby. I ended up falling in love
          with problem solving and the art of creation. I decided to enroll into
          Dev Academy where they gave me hands-on experience in a team
          environment.This hands-on experience allowed me to cultivate my
          skills, not just as an individual coder, but as a collaborative team
          player. I took on challenges that mirrored real-world scenarios,
          honing my ability to solve complex problems while working seamlessly
          within a team. I am enthusiastic about creating innovative solutions
          and contributing to meaningful projects. I am not just a developer; I
          am a passionate problem solver, a team collaborator, and a lifelong
          learner who wants to make a change. I recently deployed a website
          named{' '}
          <a
            href="https://tailoredtails.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            Tailored Tails
          </a>{' '}
          and completed the
          <a href={microsoftCert} className="underline text-blue-500">
            {' '}
            AZ-900 Microsoft Exam.
          </a>{' '}
          Currently learning Python and diving more into React Native.{' '}
        </p>
        <div className="flex space-x-4 mt-4">
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

          <a href={CV} className="underline text-blue-500 flex items-center">
            <FontAwesomeIcon size="2x" /> Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
