import { renderWithTheme } from 'utils/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it.only('should render the Logo component', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
