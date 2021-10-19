import { render, screen } from '@testing-library/react'

import NavigationBar from '.'

describe('<NavigationBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<NavigationBar />)

    expect(
      screen.getByRole('heading', { name: /NavigationBar/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
