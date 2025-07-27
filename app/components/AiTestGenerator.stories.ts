import type { Meta, StoryObj } from '@storybook/vue3'
import AiTestGenerator from './AiTestGenerator.vue'

const meta: Meta<typeof AiTestGenerator> = {
  title: 'AI/AiTestGenerator',
  component: AiTestGenerator,
  parameters: {
    layout: 'padded'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
} 