import { SingleProductProps } from '@/models/product'

export default {
  addProductCart: (key: string, value: SingleProductProps | undefined) => {
    const getProducts = localStorage.getItem(key)

    if (getProducts === null) {
      const newValue = {
        ...value,
        quantity: 1
      }
      localStorage.setItem(key, JSON.stringify([newValue]))
    } else {
      const arrayProducts: [] = JSON.parse(getProducts || '')

      arrayProducts.push({ ...value, quantity: 1 })
      localStorage.setItem(key, JSON.stringify(arrayProducts))
    }
  }
}
