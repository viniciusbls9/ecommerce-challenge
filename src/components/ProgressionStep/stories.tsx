import { Story, Meta } from '@storybook/react/types-6-0'
import ProgressionStep, { StepsProgressProps } from '.'

export default {
  title: 'ProgressionStep',
  component: ProgressionStep,
  args: {
    currentStep: 1
  }
} as Meta

export const Default: Story<StepsProgressProps> = (args) => (
  <ProgressionStep {...args} />
)
