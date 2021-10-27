import { renderWithTheme } from 'utils/helpers'
import { screen } from '@testing-library/react'

import Input from '.'

const props = ['menor preço']

describe('<Input />', () => {
  it('should render the Input', () => {
    const { container } = renderWithTheme(<Input type="text" />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Input with select type', () => {
    renderWithTheme(<Input type="select">{props}</Input>)

    expect(screen.getByRole('option', { name: 'menor preço' }))
  })
})
