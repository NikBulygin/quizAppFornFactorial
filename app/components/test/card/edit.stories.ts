import type { Meta, StoryObj } from '@storybook/vue3'
import TestCardEdit from './edit.vue'

const meta: Meta<typeof TestCardEdit> = {
  title: 'Test/Card/Edit',
  component: TestCardEdit,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Test card editing component with form validation'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const mockTest: Test = {
  id: 'test-1',
  title: 'JavaScript Fundamentals',
  description: 'Comprehensive test covering JavaScript basics, functions, and advanced concepts',
  difficulty: 'intermediate',
  status: 'published',
  image: 'https://picsum.photos/400/200?random=1',
  estimatedTime: 45,
  totalPoints: 100,
  deadline: '2024-12-31T23:59:59Z',
  author: {
    id: 'user-1',
    name: 'John Doe',
    email: 'john@example.com',
    picture: 'https://picsum.photos/100/100?random=1',
    role: 'admin'
  },
  tags: ['javascript', 'programming', 'basics'],
  sections: [],
  settings: {
    timeLimit: 2700,
    passingScore: 70,
    maxAttempts: 3,
    allowRetake: true,
    randomizeQuestions: false,
    randomizeAnswers: false,
    showResults: true,
    isPublic: true,
    allowComments: false
  },
  metadata: {
    totalQuestions: 0,
    totalPoints: 100,
    estimatedTime: 45,
    difficulty: 'intermediate',
    tags: ['javascript', 'programming'],
    category: 'programming',
    attempts: 0,
    averageScore: 0
  },
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-15T00:00:00Z'
}

export const Create: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Creating a new test'
      }
    }
  }
}

export const Edit: Story = {
  args: {
    test: mockTest
  },
  parameters: {
    docs: {
      description: {
        story: 'Editing an existing test'
      }
    }
  }
}

export const Saving: Story = {
  args: {
    test: mockTest,
    isSaving: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Test form in saving state'
      }
    }
  }
}

export const WithImage: Story = {
  args: {
    test: {
      ...mockTest,
      image: 'https://picsum.photos/400/200?random=10'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Test form with existing image'
      }
    }
  }
}

export const Draft: Story = {
  args: {
    test: {
      ...mockTest,
      status: 'draft'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Test form with draft status'
      }
    }
  }
}

export const Advanced: Story = {
  args: {
    test: {
      ...mockTest,
      difficulty: 'advanced',
      estimatedTime: 90,
      totalPoints: 200
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Test form with advanced difficulty and higher values'
      }
    }
  }
}

export const WithDeadline: Story = {
  args: {
    test: {
      ...mockTest,
      deadline: '2024-06-30T23:59:59Z'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Test form with deadline set'
      }
    }
  }
}

export const ManyTags: Story = {
  args: {
    test: {
      ...mockTest,
      tags: ['javascript', 'programming', 'basics', 'frontend', 'web', 'development', 'coding']
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Test form with many tags'
      }
    }
  }
} 