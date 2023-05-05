import axios, { AxiosInstance } from 'axios'
const axiosClient = new Map<string, AxiosInstance>()


axiosClient.set(
  'kutai',
  axios.create({
    baseURL: 'https://dev-api.kutai.co/api/v1'
  }),
)


const post = async (url: string, body = {}, headers = {}) => {
  const response = await axiosClient.get('kutai').post(url, body, { headers })
  return response.data
}
const get = async (url: string, headers = {}, params = {}) => {
  const response = await axiosClient.get('kutai').get(url, {
    headers,
    params,
  })
  return response.data
}
const put = async (url: string, headers = {}, params = {}) => {
  const response = await axiosClient.get('kutai').put(url, params, {
    headers,
  })
  return response.data
}

export default {
  get,
  post,
  put
};
