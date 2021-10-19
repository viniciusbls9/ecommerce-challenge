import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo component', () => {
    render(<Logo />)

    expect(
      screen.getByRole('img', { name: /Ecommerce Logo/i })
    ).toBeInTheDocument()
  })
})
