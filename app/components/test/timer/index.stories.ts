import type { Meta, StoryObj } from '@storybook/vue3'
import TestTimer from './index.vue'

const meta: Meta<typeof TestTimer> = {
  title: 'Test/Timer',
  component: TestTimer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Test timer component with countdown and current time modes'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const CountdownDeadline: Story = {
  args: {
    timer: {
      mode: 'countdown',
      deadline: '2024-12-31T23:59:59Z',
      isExpired: false
    },
    showWarning: true,
    warningThreshold: 300
  },
  parameters: {
    docs: {
      description: {
        story: 'Countdown timer with deadline (primary color)'
      }
    }
  }
}

export const CountdownTimeLimit: Story = {
  args: {
    timer: {
      mode: 'countdown',
      timeLimit: 3600, // 1 hour
      isExpired: false
    },
    showWarning: true,
    warningThreshold: 300,
    startTime: Math.floor(Date.now() / 1000) - 1800 // 30 minutes ago
  },
  parameters: {
    docs: {
      description: {
        story: 'Countdown timer with time limit (30 minutes remaining, primary color)'
      }
    }
  }
}

export const CountdownWarning: Story = {
  args: {
    timer: {
      mode: 'countdown',
      deadline: '2024-12-31T23:59:59Z',
      isExpired: false
    },
    showWarning: true,
    warningThreshold: 300
  },
  parameters: {
    docs: {
      description: {
        story: 'Countdown timer with warning threshold (warning color)'
      }
    }
  }
}

export const CountdownExpired: Story = {
  args: {
    timer: {
      mode: 'countdown',
      deadline: '2024-12-31T23:59:59Z',
      isExpired: true
    },
    showWarning: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Countdown timer with expired time (error color)'
      }
    }
  }
}

export const CurrentTime: Story = {
  args: {
    timer: {
      mode: 'time',
      isExpired: false
    },
    showWarning: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Current time display (info color)'
      }
    }
  }
}

export const NoWarning: Story = {
  args: {
    timer: {
      mode: 'countdown',
      deadline: '2024-12-31T23:59:59Z',
      isExpired: false
    },
    showWarning: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Countdown timer without warning display (primary color)'
      }
    }
  }
}

export const CustomWarningThreshold: Story = {
  args: {
    timer: {
      mode: 'countdown',
      deadline: '2024-12-31T23:59:59Z',
      isExpired: false
    },
    showWarning: true,
    warningThreshold: 900
  },
  parameters: {
    docs: {
      description: {
        story: 'Countdown timer with custom warning threshold (15 minutes, warning color)'
      }
    }
  }
}

export const TimeLimitWarning: Story = {
  args: {
    timer: {
      mode: 'countdown',
      timeLimit: 3600,
      isExpired: false
    },
    showWarning: true,
    warningThreshold: 300,
    startTime: Math.floor(Date.now() / 1000) - 3300 // 55 minutes ago
  },
  parameters: {
    docs: {
      description: {
        story: 'Time limit timer with warning active (5 minutes remaining, warning color)'
      }
    }
  }
}

export const TimeLimitExpired: Story = {
  args: {
    timer: {
      mode: 'countdown',
      timeLimit: 3600,
      isExpired: true
    },
    showWarning: false,
    startTime: Math.floor(Date.now() / 1000) - 7200 // 2 hours ago
  },
  parameters: {
    docs: {
      description: {
        story: 'Time limit timer expired (error color)'
      }
    }
  }
} 