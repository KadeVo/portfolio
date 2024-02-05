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
            I developed this website to be able to efficiently scroll through
            all of my news articles with ease. This project is TypeScript/React
            with Next.js. I selected Next.js so I could learn more about how
            Next.js operates while simultaneously challenging myself working
            more with external API's. I faced a few challenges when making my
            custom hook as I had to teach myself using Next.js useSearchParams,
            altering the API response and the general way Next.js functions.
            Overall, I am pleased with how it developed over time as it taught
            me a lot of practical lessons regarding search parmas and external
            api which was the primary goal. Additionally, I became a lot more
            familiar with TailwindCSS and Next.js.{' '}
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
          <br></br>
          <h2 className="text-lg font-bold">Code Highlights</h2>

          <div className="mt-4">
            <p className="text-gray-600 mb-4">
              My web application utilises Next.js my custom hook
              'useSearchParam' to manage and interact with search parameters in
              my project. Within the custom hook, the code initialises
              parameters such as the News API key, default news category
              ('general'), and default country ('us'). The hook also manages the
              selected country, page, and category using the useState hook. The
              available news categories are predefined, including options like
              'Business,' 'Entertainment,' 'Health,' 'Science,' 'Sports,' and
              'Technology.' The hook dynamically constructs the API URL based on
              these parameters, enabling dynamic fetching of top headlines.
              Below is the relevant code I am referring to.<br></br>{' '}
            </p>
            <pre
              className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"
              style={{ textAlign: 'left' }}
            >
              {`export const useSearchParam = () => {
  const searchParams = useSearchParams()
  const defaultCategory = 'general'
  const defaultCountry = 'us'
  const [country, setCountry] = useState(
    searchParams.get('country') || defaultCountry)
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState(
    searchParams.get('category') || defaultCategory)
    useEffect(() => {
      setCountry(searchParams.get('country') || '')
      const pageParam = parseInt(searchParams.get('page') || '1', 10)
      setPage(pageParam)}, [searchParams])
  
    const apiUrl = \`https://newsapi.org/v2/top-headlines?country=\${country}&category=\${category}&page=\${page}&apiKey=\${apiKey}\``}
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

export default Newsight
