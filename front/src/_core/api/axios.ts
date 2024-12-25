import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10 * 60 * 1000,
  withCredentials: true,
})

instance.interceptors.request.use(
  async function (config) {
    const token = Cookies.get('jwtToken')

    const language = JSON.parse(localStorage.getItem('language') ?? '')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      config.headers['AG-Language'] =
        language?.language && language.language.length > 0
          ? language?.language
          : ''
    }

    config.paramsSerializer = {
      serialize: (params) => {
        return qs.stringify(params, {
          arrayFormat: 'repeat',
          skipNulls: true,
          encodeValuesOnly: true,
          indices: false,
        })
      },
    }

    return config
  },

  function (error) {
    console.log('Request error: ', error)

    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error) => {
    return Promise.reject(error)
  }
)

export { isAxiosError } from 'axios'
export default instance
