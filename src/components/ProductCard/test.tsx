import { renderWithTheme } from 'utils/helpers'
import { screen } from '@testing-library/react'

import ProductCard from '.'

const props = [
  {
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 'R$ 109.95'
  }
]

describe('<ProductCard />', () => {
  it('should render the productCard', () => {
    const { container } = renderWithTheme(<ProductCard products={props} />)

    expect(
      screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
