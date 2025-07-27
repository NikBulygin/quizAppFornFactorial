import type { Meta, StoryObj } from '@storybook/vue3'
import SvgNumber from './SvgNumber.vue'

const meta: Meta<typeof SvgNumber> = {
  title: 'Common/SvgNumber',
  component: SvgNumber,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SVG number component with circle and customizable size'
      }
    }
  },
  argTypes: {
    number: {
      control: 'number',
      description: 'Number to display'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the SVG'
    },
    showCircle: {
      control: 'boolean',
      description: 'Show circle around number'
    },
    customClass: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    number: 5,
    showCircle: false
  }
}

export const Small: Story = {
  args: {
    number: 3,
    size: 'xs',
    showCircle: false
  }
}

export const Medium: Story = {
  args: {
    number: 7,
    size: 'md',
    showCircle: false
  }
}

export const Large: Story = {
  args: {
    number: 9,
    size: 'lg',
    showCircle: false
  }
}

export const WithCircle: Story = {
  args: {
    number: 5,
    showCircle: true
  }
}

export const DoubleDigit: Story = {
  args: {
    number: 25
  }
}

export const SingleDigit: Story = {
  args: {
    number: 1
  }
}

export const Zero: Story = {
  args: {
    number: 0
  }
}

export const AllSizes: Story = {
  render: () => ({
    components: { SvgNumber },
    template: `
      <div class="flex items-center gap-4">
        <SvgNumber :number="1" size="xs" :show-circle="false" />
        <SvgNumber :number="2" size="sm" :show-circle="false" />
        <SvgNumber :number="3" size="md" :show-circle="false" />
        <SvgNumber :number="4" size="lg" :show-circle="false" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available sizes without circles'
      }
    }
  }
}

export const WithCustomClass: Story = {
  args: {
    number: 5,
    customClass: 'text-red-500'
  }
} 