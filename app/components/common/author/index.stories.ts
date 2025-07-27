import type { Meta, StoryObj } from '@storybook/vue3'
import AuthorComponent from './index.vue'

const meta: Meta<typeof AuthorComponent> = {
  title: 'Common/Author',
  component: AuthorComponent,
  parameters: {
    layout: 'padded'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
