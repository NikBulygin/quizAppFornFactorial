import type { Meta, StoryObj } from '@storybook/vue3'
import EditQuestionModal from './EditQuestionModal.vue'

const meta: Meta<typeof EditQuestionModal> = {
  title: 'Test/Modal/EditQuestionModal',
  component: EditQuestionModal,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
} 