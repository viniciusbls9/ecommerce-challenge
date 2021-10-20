import { renderWithTheme } from 'utils/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo component', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
