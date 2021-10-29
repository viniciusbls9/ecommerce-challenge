import axios from 'axios'
import { SingleProductProps } from 'models/product'

const BASE_URL = 'https://fakestoreapi.com'

export default {
  getRecommendedProducts: async (limit?: string) => {
    const req = await axios.get<SingleProductProps[]>(
      `${BASE_URL}/products?limit=${limit}`
    )
    return req.data
  }
}
