import type { Meta, StoryObj } from '@storybook/vue3'
import TestTimerEdit from './edit.vue'

const meta: Meta<typeof TestTimerEdit> = {
  title: 'Test/Timer/Edit',
  component: TestTimerEdit,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Timer editing component with configuration options'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Create: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Creating new timer settings'
      }
    }
  }
}

export const EditCountdownDeadline: Story = {
  args: {
    timer: {
      mode: 'countdown',
      deadline: '2024-12-31T23:59:59Z',
      isExpired: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Editing countdown timer with deadline (primary color)'
      }
    }
  }
}

export const EditCountdownTimeLimit: Story = {
  args: {
    timer: {
      mode: 'countdown',
      timeLimit: 3600, // 1 hour
      isExpired: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Editing countdown timer with time limit (primary color)'
      }
    }
  }
}

export const EditTime: Story = {
  args: {
    timer: {
      mode: 'time',
      isExpired: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Editing current time timer settings (info color)'
      }
    }
  }
}

export const Saving: Story = {
  args: {
    timer: {
      mode: 'countdown',
      deadline: '2024-12-31T23:59:59Z',
      isExpired: false
    },
    isSaving: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Timer form in saving state (success color for save button)'
      }
    }
  }
}

export const WithDeadline: Story = {
  args: {
    timer: {
      mode: 'countdown',
      deadline: '2024-06-30T23:59:59Z',
      isExpired: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Timer with deadline set (primary color)'
      }
    }
  }
}

export const ExpiredTimer: Story = {
  args: {
    timer: {
      mode: 'countdown',
      deadline: '2024-12-31T23:59:59Z',
      isExpired: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Timer that has expired (error color)'
      }
    }
  }
} 