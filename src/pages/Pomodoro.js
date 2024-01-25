import { Link } from 'react-router-dom'

const Pomodoro = () => {
  const skillsAndFrameworks = [
    'React.js',
    'React Native',
    'TypeScript',
    'Expo',
    'Tailwind CSS',
  ]

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mt-10">Pomodoro</h1>

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
            This is one of my newest projects, my own pomodoro study application
            using React Native. I created it for when I was studying for the
            AZ-900 exam and it allowed me to stay focused and have a productive
            study session. It is currently a WIP and a testing ground to teach
            myself and get more familiar with React Native & Mobile Application
            development.{' '}
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
              src="https://www.youtube.com/embed/kcDzW3ppsqk"
              title="Kadin speaking about his project"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <br></br>
          <h2 className="text-lg font-bold">Code In-depth explaination</h2>

          <div className="mt-4">
            <h3 className="font-bold">Audio Handling</h3>
            <p className="mb-4">
              The audio has asynchronous functions ensures smooth and
              interruption-free audio playback. It integrates Expo's Audio
              module allows the ability to load and unload the audio to be
              played at the correct timing and turn off when necessary.
            </p>

            <pre
              className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4"
              style={{ textAlign: 'left' }}
            >
              {`const stopSound = async () => {
                  try {
                    if (sound) {
                      await sound.stopAsync()
                      await sound.unloadAsync()
                    }
                  } catch (error) {
                    console.error('Error stopping sound: ', error)
                  }
                }
              
                const playSound = async () => {
                  try {
                    const { sound } = await Audio.Sound.createAsync(
                      require('../assets/audio/mixkit-classic-winner-alarm-1997.wav')
                    )
                    setSound(sound)
                    await sound.playAsync()
                  } catch (error) {
                    console.error('Error playing sound: ', error)
                  }
                }
                `}
            </pre>
            <h3 className="font-bold">Timer Logic</h3>
            <p className="mb-4">
              Utilises the useEffect hook to manages intervals for updating
              study time and paused time. It also works with the Audio that
              allows the music to be played when at th end of a study session.
            </p>
            <pre
              className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"
              style={{ textAlign: 'left' }}
            >
              {` useEffect(() => {
    let studyInterval: NodeJS.Timeout
    let pauseInterval: NodeJS.Timeout

    if (isActive && studyTime > 0) {
      studyInterval = setInterval(() => {
        setStudyTime((prevStudyTime) => prevStudyTime - 1)
      }, 1000)
    } else if (studyTime === 0) {
      setIsActive(false)
    }

    if (isPaused) {
      pauseInterval = setInterval(() => {
        setPausedTime((prevPausedTime) => prevPausedTime + 1)
        stopSound()
      }, 1000)
    }
    if (studyTime <= 0 && isActive) {
      setIsActive(false)
      playSound()
    }

    return () => {
      clearInterval(studyInterval)
      clearInterval(pauseInterval)
    }
  }, [isActive, isPaused, studyTime])
                `}
            </pre>
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

export default Pomodoro
