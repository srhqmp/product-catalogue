import axios from 'axios'
const baseUrl = 'http://localhost:5001/products'

const getAll = () => {
  return axios.get(baseUrl).then((response) => {
    return response.data
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }
