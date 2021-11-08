export interface SingleProductProps {
  id?: number
  quantity?: number
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
