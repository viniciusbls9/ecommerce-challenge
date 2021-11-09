import { Story, Meta } from '@storybook/react/types-6-0'

import ProductCard from '.'
import { ProductProps } from 'models/product'

export default {
  title: 'ProductCard',
  component: ProductCard
} as Meta

const props = [
  {
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 'R$ 109.95'
  }
]

export const Default: Story<ProductProps> = () => (
  <div>
    {props.map((items) => (
      <ProductCard
        key={items.id}
        id={items.id}
        image={items.image}
        title={items.title}
        price={items.price}
      />
    ))}
  </div>
)
