import { renderWithTheme } from 'utils/helpers'
import { screen } from '@testing-library/react'

import ProductCard from '.'

const props = [
  {
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95
  }
]

describe('<ProductCard />', () => {
  it('should render the productCard', () => {
    renderWithTheme(
      <ProductCard
        key={props[0].id}
        id={props[0].id}
        image={props[0].image}
        title={props[0].title}
        price={props[0].price}
      />
    )

    expect(
      screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    )
  })
})
