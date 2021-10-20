import { renderWithTheme } from 'utils/helpers'
import mockNavigation from 'mocks/mock-navigation-bar.json'

import NavigationBar from '.'

describe('<NavigationBar />', () => {
  it('should render the NavigationBar for mobile', () => {
    const { container } = renderWithTheme(<NavigationBar />)

    expect(container.firstChild).toHaveStyleRule('bottom', '0')
  })

  it('should render the NavigationBar for desktop', () => {
    const { container } = renderWithTheme(<NavigationBar />)

    expect(container.firstChild).toHaveStyleRule('position', 'initial', {
      media: '(min-width: 768px)'
    })
  })

  it('should render the NavigationBar container with repeatCount prop value', () => {
    const { container } = renderWithTheme(<NavigationBar />)

    expect(
      container.querySelector('.navigation-bar-container')?.childElementCount
    ).toBe(mockNavigation.length)
  })
})
