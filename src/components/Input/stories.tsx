import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { InputProps } from '.'

export default {
  title: 'Input',
  component: Input,
  args: {
    type: 'text'
  }
} as Meta

export const Default: Story = (args) => <Input {...args} />

const props = ['menor preço']

export const WithTypeSelect: Story<InputProps> = () => (
  <Input type="select">{props}</Input>
)
