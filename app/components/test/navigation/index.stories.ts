import type { Meta, StoryObj } from '@storybook/vue3'
import TestNavigation from './index.vue'

const meta: Meta<typeof TestNavigation> = {
  title: 'Test/Navigation',
  component: TestNavigation,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Test navigation component with sections, questions, progress and timer'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const mockNavigation: TestNavigation = {
  sections: [
    {
      id: 'section-1',
      title: 'Basic Questions',
      questionCount: 5,
      completedQuestions: 3,
      isCompleted: false
    },
    {
      id: 'section-2',
      title: 'Advanced Questions',
      questionCount: 8,
      completedQuestions: 8,
      isCompleted: true
    },
    {
      id: 'section-3',
      title: 'Final Questions',
      questionCount: 3,
      completedQuestions: 0,
      isCompleted: false
    }
  ],
  currentSection: 0,
  currentQuestion: 2,
  questionStatuses: {
    'question-0': 'success',
    'question-1': 'error',
    'question-2': 'primary',
    'question-3': 'outline',
    'question-4': 'outline'
  }
}

const mockTimer: TestTimer = {
  mode: 'countdown',
  deadline: '2024-12-31T23:59:59Z',
  isExpired: false
}

export const Default: Story = {
  args: {
    navigation: mockNavigation
  },
  parameters: {
    docs: {
      description: {
        story: 'Default navigation with active section highlighting and finish button in header'
      }
    }
  }
}

export const WithTimer: Story = {
  args: {
    navigation: mockNavigation,
    timer: mockTimer,
    showWarning: true,
    warningThreshold: 300
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with timer and finish button in header, active section highlighting'
      }
    }
  }
}

export const CompletedSection: Story = {
  args: {
    navigation: {
      ...mockNavigation,
      currentSection: 1
    },
    timer: mockTimer
  },
  parameters: {
    docs: {
      description: {
        story: 'Second section is active (highlighted), finish button in header'
      }
    }
  }
}

export const ExpiredTimer: Story = {
  args: {
    navigation: mockNavigation,
    timer: {
      ...mockTimer,
      isExpired: true
    }
  }
}

export const TimeLimitMode: Story = {
  args: {
    navigation: mockNavigation,
    timer: {
      mode: 'countdown',
      timeLimit: 3600,
      isExpired: false
    },
    showWarning: true,
    warningThreshold: 600
  }
}

export const CurrentTimeMode: Story = {
  args: {
    navigation: mockNavigation,
    timer: {
      mode: 'time',
      isExpired: false
    }
  }
}

export const AllQuestionsAnswered: Story = {
  args: {
    navigation: {
      ...mockNavigation,
      questionStatuses: {
        'question-0': 'success',
        'question-1': 'success',
        'question-2': 'success',
        'question-3': 'success',
        'question-4': 'success'
      }
    },
    timer: mockTimer
  },
  parameters: {
    docs: {
      description: {
        story: 'All questions answered - finish button will be primary and complete immediately'
      }
    }
  }
}

export const MixedQuestionStatuses: Story = {
  args: {
    navigation: {
      ...mockNavigation,
      questionStatuses: {
        'question-0': 'success', // Правильный ответ
        'question-1': 'error',   // Неправильный ответ
        'question-2': 'primary', // Текущий вопрос
        'question-3': 'error',   // Неправильный ответ
        'question-4': 'outline'  // Не отвечен
      }
    },
    timer: mockTimer
  },
  parameters: {
    docs: {
      description: {
        story: 'Mixed question statuses: success (green), error (red), primary (blue - current), outline (gray - not answered)'
      }
    }
  }
}

export const NoQuestionsAnswered: Story = {
  args: {
    navigation: {
      ...mockNavigation,
      questionStatuses: {}
    },
    timer: mockTimer
  },
  parameters: {
    docs: {
      description: {
        story: 'No questions answered - finish button will be outline and show confirmation dialog'
      }
    }
  }
}

export const ManyQuestions: Story = {
  args: {
    navigation: {
      sections: [
        {
          id: 'section-1',
          title: 'Large Question Set',
          questionCount: 25,
          completedQuestions: 18,
          isCompleted: false
        },
        {
          id: 'section-2',
          title: 'Advanced Topics',
          questionCount: 15,
          completedQuestions: 15,
          isCompleted: true
        },
        {
          id: 'section-3',
          title: 'Final Challenge',
          questionCount: 10,
          completedQuestions: 3,
          isCompleted: false
        }
      ],
      currentSection: 0,
      currentQuestion: 5,
      questionStatuses: {
        'question-0': 'success',
        'question-1': 'success',
        'question-2': 'error',
        'question-3': 'success',
        'question-4': 'primary',
        'question-5': 'primary',
        'question-6': 'success',
        'question-7': 'error',
        'question-8': 'success',
        'question-9': 'success',
        'question-10': 'success',
        'question-11': 'error',
        'question-12': 'success',
        'question-13': 'success',
        'question-14': 'primary',
        'question-15': 'success',
        'question-16': 'success',
        'question-17': 'success',
        'question-18': 'outline',
        'question-19': 'outline',
        'question-20': 'outline',
        'question-21': 'outline',
        'question-22': 'outline',
        'question-23': 'outline',
        'question-24': 'outline'
      }
    },
    timer: mockTimer
  },
  parameters: {
    docs: {
      description: {
        story: 'Large question set (25 questions) demonstrating adaptive grid layout like GitHub contribution statistics'
      }
    }
  }
}

export const ExtraLargeQuestionSet: Story = {
  args: {
    navigation: {
      sections: [
        {
          id: 'section-1',
          title: 'Comprehensive Test',
          questionCount: 50,
          completedQuestions: 42,
          isCompleted: false
        }
      ],
      currentSection: 0,
      currentQuestion: 25,
      questionStatuses: {
        'question-0': 'success',
        'question-1': 'success',
        'question-2': 'success',
        'question-3': 'error',
        'question-4': 'success',
        'question-5': 'success',
        'question-6': 'success',
        'question-7': 'success',
        'question-8': 'error',
        'question-9': 'success',
        'question-10': 'success',
        'question-11': 'success',
        'question-12': 'success',
        'question-13': 'error',
        'question-14': 'success',
        'question-15': 'success',
        'question-16': 'success',
        'question-17': 'success',
        'question-18': 'success',
        'question-19': 'success',
        'question-20': 'success',
        'question-21': 'error',
        'question-22': 'success',
        'question-23': 'success',
        'question-24': 'success',
        'question-25': 'primary',
        'question-26': 'outline',
        'question-27': 'outline',
        'question-28': 'outline',
        'question-29': 'outline',
        'question-30': 'outline',
        'question-31': 'outline',
        'question-32': 'outline',
        'question-33': 'outline',
        'question-34': 'outline',
        'question-35': 'outline',
        'question-36': 'outline',
        'question-37': 'outline',
        'question-38': 'outline',
        'question-39': 'outline',
        'question-40': 'outline',
        'question-41': 'outline',
        'question-42': 'outline',
        'question-43': 'outline',
        'question-44': 'outline',
        'question-45': 'outline',
        'question-46': 'outline',
        'question-47': 'outline',
        'question-48': 'outline',
        'question-49': 'outline'
      }
    },
    timer: mockTimer
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large question set (50 questions) showing maximum adaptive grid capacity'
      }
    }
  }
}

export const MassiveQuestionSet: Story = {
  args: {
    navigation: {
      sections: [
        {
          id: 'section-1',
          title: 'Ultimate Challenge',
          questionCount: 100,
          completedQuestions: 87,
          isCompleted: false
        }
      ],
      currentSection: 0,
      currentQuestion: 50,
      questionStatuses: Object.fromEntries(
        Array.from({ length: 100 }, (_, i) => [
          `question-${i}`,
          i < 87 ? (i % 3 === 0 ? 'error' : 'success') : 'outline'
        ])
      )
    },
    timer: mockTimer
  },
  parameters: {
    docs: {
      description: {
        story: 'Massive question set (100 questions) demonstrating extreme adaptive grid layout like GitHub contribution heatmap'
      }
    }
  }
} 