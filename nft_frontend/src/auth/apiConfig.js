import axios from 'axios'

const LOCALSTORAGE_KEY = 'token'

// Create a re-useable axios object, with our API as the baseURL
const api = axios.create({
  baseURL: 'https://project4nft-a334719477d5.herokuapp.com/',
  Authorization : `Token ${localStorage.getItem(LOCALSTORAGE_KEY)}`
})

// Interceptors are axios functionality, that allows you to intercept requests and responses
// Here we're setting the token in localstorage to the Authorization header
api.interceptors.request.use(config => {
  const token = localStorage.getItem(LOCALSTORAGE_KEY)
  config.headers.Authorization = token
  return config
})

export default api