/* eslint-disable @typescript-eslint/no-non-null-assertion */
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

      alert('produto adicionado ao seu carrinho')
    } else {
      const arrayProducts: SingleProductProps[] = JSON.parse(getProducts || '')
      const findProduct = arrayProducts.find(
        (el: SingleProductProps) => el.id === value?.id
      )

      if (findProduct !== undefined) {
        const newValue = {
          ...value,
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
          quantity: findProduct?.quantity! + 1
        }
        localStorage.setItem(key, JSON.stringify([newValue]))
        return false
      }

      arrayProducts.push({ ...value, quantity: 1 })
      localStorage.setItem(key, JSON.stringify(arrayProducts))
    }
  },
  getProductsLocalStorage: () => {
    const getKey = localStorage?.key(1)

    const getLocalStorage =
      getKey !== '' ? JSON.parse(localStorage?.getItem('products') || '') : []

    return getLocalStorage
  }
}
