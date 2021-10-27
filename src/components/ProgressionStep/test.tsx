import { renderWithTheme } from 'utils/helpers'

import ProgressionStep from '.'

describe('<ProgressionStep />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<ProgressionStep currentStep={1} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
