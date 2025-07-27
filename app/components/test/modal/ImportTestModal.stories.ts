import type { Meta, StoryObj } from '@storybook/vue3'
import ImportTestModal from './ImportTestModal.vue'

const meta: Meta<typeof ImportTestModal> = {
  title: 'Test/Modal/ImportTestModal',
  component: ImportTestModal,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
} 