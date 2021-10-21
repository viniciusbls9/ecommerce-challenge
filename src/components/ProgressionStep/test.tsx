import { renderWithTheme } from 'utils/helpers'

import ProgressionStep from '.'

describe('<ProgressionStep />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<ProgressionStep />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
