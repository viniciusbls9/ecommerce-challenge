import NavigationBar from 'components/NavigationBar'
import { renderWithTheme } from 'utils/helpers'

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/'
  })
}))

describe('<NavigationBar />', () => {
  it('should render the NavigationBar', () => {
    const { container } = renderWithTheme(<NavigationBar />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
