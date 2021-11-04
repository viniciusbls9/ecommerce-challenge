import { Story, Meta } from '@storybook/react/types-6-0'
import Input from '.'

export default {
  title: 'Input',
  component: Input,
  args: {
    type: 'text'
  }
} as Meta

export const Default: Story = (args) => <Input {...args} />
