import axios from 'axios'
import { SingleProductProps } from 'models/product'

const BASE_URL = 'https://fakestoreapi.com'

export default {
  getRecommendedProducts: async (limit?: string) => {
    const req = await axios.get<SingleProductProps[]>(
      `${BASE_URL}/products?limit=${limit}`
    )
    return req.data
  },

  getProducts: async () => {
    const req = await axios.get<SingleProductProps[]>(`${BASE_URL}/products`)
    return req.data
  },

  getSingleProduct: async (id: string | string[] | undefined) => {
    const req = await axios.get<SingleProductProps[]>(
      `${BASE_URL}/products/${id}`
    )
    return req.data
  },

  getCategory: async (category: string | string[] | undefined) => {
    const req = await axios.get<SingleProductProps[]>(
      `${BASE_URL}/products/category/${category}`
    )
    return req.data
  }
}
