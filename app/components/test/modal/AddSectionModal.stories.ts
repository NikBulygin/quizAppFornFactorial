import type { Meta, StoryObj } from '@storybook/vue3'
import AddSectionModal from './AddSectionModal.vue'

const meta: Meta<typeof AddSectionModal> = {
  title: 'Test/Modal/AddSectionModal',
  component: AddSectionModal,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
} 