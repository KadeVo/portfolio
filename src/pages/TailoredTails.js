import { Link } from 'react-router-dom'
const TailoredTails = () => {
  const skillsAndFrameworks = [
    'React.js',
    'Tailwind CSS',
    'JavaScript',
    'Redux',
    'MongoDB',
    'Stripe',
    'Node.js',
  ]

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mt-10">Tailored Tails</h1>

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
            Tailored Tails was created to develop our own Authorisation System
            and Cart. Collaborating with a friend, we faced numerous challenges
            throughout the process, with the most significant hurdle being the
            implementation of a robust Authorisation system and Cart
            functionality. Our tech stack included React, TailwindCSS,
            TypeScript, NodeJS, Redux, Stripe, and MongoDB. Another major
            challenge we faced was determining the optimal approach for managing
            user items in the Cart. Initially considering a database-centric
            solution, we eventually discovered the simplicity and efficiency of
            using local storage. This adjustment significantly improved
            manageability. Throughout this project, we engaged in extensive
            research, experimenting with various approaches, and adapting based
            on trial and error. The learning curve was steep as we delved into
            Redux, MongoDB, Stripe integration, and the creation of a custom
            Login/Registration system. Despite the hurdles, this project
            provided invaluable insights into the complexities of everyday
            systems. Looking back, the experience not only enhanced our
            technical skills but also expanded our problem-solving mindset. This
            project holds significant value, as my friend and I persevered daily
            to overcome the numerous challenges. Building this e-commerce
            website has provided us with valuable experience in tackling
            problems from diverse angles.
          </p>
          <br></br>
          <h2 className="text-lg font-bold">Discussing the project</h2>

          <div
            className="relative"
            style={{ paddingBottom: '56.25%', height: 0 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Odg_jhWpXEg"
              title="Tailored tails - Discussion"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <br></br>
          <h2 className="text-lg font-bold">Code Highlights</h2>
          <div className="mt-4">
            <h3 className="font-bold">Item Slice</h3>
            <p className="mb-4">
              This code essentially handles the asynchronous fetch operation for
              product items and manages the corresponding state in the Redux
              store. The axios library is used to make the HTTP request, and the
              state is updated based on the different stages of the asynchronous
              operation (pending, fulfilled, rejected). The fetched product
              items are stored in the Redux state.
              <br></br>
              <br></br>I had no knowledge of Redux, Axios for handling HTTP
              requests, and the intricacies of setting initial states. Through
              this project, I gained a lot of useful information and am now able
              to understand Redux's role in state management, especially in
              asynchronous operations using Thunks. The integration of Axios
              facilitated the incorporation of external APIs, improving my skill
              set in dealing with real-world data fetching and error-handling
              scenarios.
            </p>

            <pre
              className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4"
              style={{ textAlign: 'left' }}
            >
              {`
              const initialState: ProductsState = {
                items: [],
                status: 'idle',
              }
              
              export const productsFetch = createAsyncThunk<Item[], void>(
                'products/productsFetch',
                async () => {
                  try {
                    const response = await axios.get<Item[]>(
                      'https://tailored-tails-api-05jq.onrender.com/items'
                    )
                    return response?.data
                  } catch (error) {
                    console.log(error)
                    throw error
                  }
                }
              )
              
              const productsSlice = createSlice({
                name: 'items',
                initialState,
                reducers: {},
                extraReducers: (builder) => {
                  builder
                    .addCase(productsFetch.pending, (state) => {
                      state.status = 'pending'
                    })
                    .addCase(
                      productsFetch.fulfilled,
                      (state, action: PayloadAction<Item[]>) => {
                        state.status = 'success'
                        state.items = action.payload
                      }
                    )
                    .addCase(productsFetch.rejected, (state) => {
                      state.status = 'rejected'
                    })
                },
              })
                `}
            </pre>
          </div>
          <h3 className="font-bold">Authentication</h3>
          <p>
            Through creating this authentication slice, I've been able to
            understand the key concepts in Redux and user authentication.
            Implementing the loadUser action has deepened my comprehension of
            state initialisation, utilising JSON Web Tokens (JWTs) to persist
            user data, and decoding these tokens for user authentication. The
            logoutUser action has taught me state management for user logout
            scenarios, involving the removal of sensitive information and token
            clearing from local storage. I've gained insights into handling
            various states such as pending, fulfilled, and rejected, reinforcing
            the importance of error handling and conveying meaningful feedback
            to users.
          </p>
          <pre
            className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4"
            style={{ textAlign: 'left' }}
          >
            {`
              const authSlice = createSlice({
                name: 'auth',
                initialState,
                reducers: {
                  loadUser(state): initialStateModel {
      
                  },
                  logoutUser(state): initialStateModel {
                    localStorage.removeItem('token');
                    return {
                      ...state,
                      token: '',
                      name: '',
                      email: '',
                      _id: '',
                      registerStatus: '',
                      registerError: '',
                      loginStatus: '',
                      loginError: '',
                      userLoaded: false,
                    };
                  },
                },
                extraReducers: (builder) => {
                  builder.addCase(registerUser.pending, (state) => {
                    return { ...state, registerStatus: 'pending' };
                  });
               
                  builder.addCase(loginUser.rejected, (state, action) => {
                    return {
                      ...state,
                      loginStatus: 'rejected',
                      loginError: action.payload instanceof Error ? action.payload.message : 'An error occurred',
                    };
                  });
                },
              });
                `}
          </pre>
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

export default TailoredTails
