import type { Meta, StoryObj } from '@storybook/vue3'
import AddQuestionModal from './AddQuestionModal.vue'

const meta: Meta<typeof AddQuestionModal> = {
  title: 'Test/Modal/AddQuestionModal',
  component: AddQuestionModal,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
} 