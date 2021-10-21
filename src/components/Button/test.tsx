import { renderWithTheme } from 'utils/helpers'
import { screen } from '@testing-library/react'

import Button from '.'

const props = {
  width: '100%',
  maxWidth: '100px',
  height: '56',
  background: 'rgb(36, 201, 43)',
  label: 'Button',
  onClick: () => console.log('fui clicado'),
  color: '#fff',
  fontSize: '18px'
}

describe('<Button />', () => {
  it('should render the button', () => {
    renderWithTheme(<Button {...props} />)

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument()
  })
})
