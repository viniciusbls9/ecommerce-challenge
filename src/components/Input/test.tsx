import { renderWithTheme } from 'utils/helpers'

import Input from '.'

describe('<Input />', () => {
  it('should render the Input', () => {
    const { container } = renderWithTheme(<Input />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
