/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SingleProductProps } from '@/models/product'

export default {
  addProductCart: (key: string, value: SingleProductProps | undefined) => {
    const getProducts = localStorage.getItem(key)

    if (getProducts === null) {
      // cria o produto em localStorage passando a quantidade
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
        // atualiza o produto em localStorage passando a quantidade
        const newValue = {
          ...value,
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
          quantity: parseInt(findProduct?.quantity!) + 1
        }

        // busca o index do produto em especifico
        const index = arrayProducts.findIndex(
          (product) => product.id === value?.id
        )

        // deleta o produto "antigo", e adiciona o novo com a nova quantidade
        arrayProducts.splice(index, 1, newValue)
        localStorage.setItem(key, JSON.stringify(arrayProducts))
        return false
      }

      arrayProducts.push({ ...value, quantity: 1 })
      localStorage.setItem(key, JSON.stringify(arrayProducts))
    }
  },
  getProductsLocalStorage: (keyIndex: number, key: string) => {
    const getKey = localStorage?.key(keyIndex)

    const getLocalStorage =
      getKey !== '' ? JSON.parse(localStorage?.getItem(key) || '[]') : []

    return getLocalStorage
  }
}
