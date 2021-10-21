import { renderWithTheme } from 'utils/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
