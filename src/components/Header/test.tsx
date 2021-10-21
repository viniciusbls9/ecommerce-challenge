import { renderWithTheme } from 'utils/helpers'
import { screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render the header', () => {
    const { container } = renderWithTheme(<Header />)

    expect(
      screen.getByRole('img', { name: /Ecommerce Logo/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
