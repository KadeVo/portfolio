import kadinImage from '../assets/images/kadin.jpg'

const About = () => {
  return (
    <div className="mx-auto p-20 flex items-center">
      <div className="flex-shrink-0 mr-8">
        <div className="h-40 w-40 overflow-hidden rounded-full">
          <img
            src={kadinImage}
            alt="kadin vo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <p className="text-base">
          I graduated with a Bachelor of Business and transitioned my career
          after uncovering my passion for software development whilst I was
          coding as a hobby. I ended up falling in love with problem solving and
          the art of creation. I decided to enroll into Dev Academy where they
          gave me hands-on experience in a team environment.This hands-on
          experience allowed me to cultivate my skills, not just as an
          individual coder, but as a collaborative team player. I took on
          challenges that mirrored real-world scenarios, honing my ability to
          solve complex problems while working seamlessly within a team. I am
          enthusiastic about creating innovative solutions and contributing to
          meaningful projects. I am not just a developer; I am a passionate
          problem solver, a team collaborator, and a lifelong learner who wants
          to make a change. I recently deployed a website named{' '}
          <a
            href="https://tailoredtails.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            Tailored Tails
          </a>{' '}
          and completed the AZ-900 Microsoft Exam. Currently learning Python and
          diving more into React Native.{' '}
        </p>
      </div>
    </div>
  )
}

export default About
