import type { Meta, StoryObj } from '@storybook/vue3'
import EditSectionModal from './EditSectionModal.vue'

const meta: Meta<typeof EditSectionModal> = {
  title: 'Test/Modal/EditSectionModal',
  component: EditSectionModal,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
} 