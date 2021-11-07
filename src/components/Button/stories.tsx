import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    width: '100%',
    maxWidth: '100px',
    height: '56',
    background: 'rgb(36, 201, 43)',
    backgroundHover: 'rgb(9, 159, 15)',
    label: 'Button',
    onClick: () => console.log('fui clicado'),
    color: '#fff',
    fontSize: '18px'
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
