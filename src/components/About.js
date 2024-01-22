import kadinImage from '../assets/images/kadin.jpg'
import microsoftCert from '../assets/images/AZ-900.pdf'
import bachelorCert from '../assets/images/bachelor.pdf'
import Socials from './Socials'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around my-10">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">
          Kadin Vo - Full Stack Software Developer
        </h2>

        <p className="text-lg">
          I graduated with a{' '}
          <a href={bachelorCert} className="underline text-blue-500">
            Bachelor of Business
          </a>{' '}
          and transitioned my career after uncovering my passion for software
          development whilst I was coding as a hobby. I ended up falling in love
          with problem solving and the art of creation. I decided to enroll into
          Dev Academy where they gave me hands-on experience in a team
          environment. This hands-on experience allowed me to cultivate my
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
        <Socials />
      </div>

      <div className="w-50 h-60 shadow-md">
        <img
          src={kadinImage}
          alt="Kadin, Full Stack Software Developer"
          className="w-full h-full object-cover rounded-lg shadow-lg "
        />
      </div>
    </div>
  )
}

export default About
