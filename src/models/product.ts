export interface SingleProductProps {
  id?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  quantity?: string | any
  image?: string
  title?: string
  price?: string
  category?: string
  description?: string
}

export interface ProductProps {
  products?: SingleProductProps[]
  singleProduct?: SingleProductProps
}
