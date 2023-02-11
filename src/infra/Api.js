import axios from 'axios'
import zatacaCandidate from '@/domain/zatacaCandidate'
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
async function getZatacaCandidate() {
  const response = await axios.get(BASE_URL)
  return response.data.map((data) => zatacaCandidate(data))
  }
export default {
  getZatacaCandidate
}
  