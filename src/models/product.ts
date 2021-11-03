export interface SingleProductProps {
  id: number
  image: string
  title: string
  price: string
  category?: string
  description?: string
}

export interface ProductProps {
  products?: SingleProductProps[]
}
