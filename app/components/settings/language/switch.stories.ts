import type { Meta, StoryObj } from '@storybook/vue3'
import LanguageSwitch from './switch.vue'

const meta: Meta<typeof LanguageSwitch> = {
  title: 'Settings/Language/Switch',
  component: LanguageSwitch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент для переключения языков с модальным окном и флагами'
      }
    }
  },
  argTypes: {
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default state of the language switch component'
      }
    }
  }
}
