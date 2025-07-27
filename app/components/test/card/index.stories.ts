import type { Meta, StoryObj } from '@storybook/vue3'
import TestCard from './index.vue'

const meta: Meta<typeof TestCard> = {
  title: 'Test/Card',
  component: TestCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Test card component for displaying test information'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'detailed']
    },
    showAuthor: {
      control: { type: 'boolean' }
    },
    showStats: {
      control: { type: 'boolean' }
    },
    clickable: {
      control: { type: 'boolean' }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const mockTests = {
  basic: {
    id: 'test-1',
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of JavaScript basics including variables, functions, and control structures.',
    difficulty: 'intermediate' as const,
    status: 'published' as const,
    image: 'https://picsum.photos/400/200?random=1',
    estimatedTime: 30,
    totalPoints: 100,
    deadline: '2024-12-31T23:59:59Z',
    author: {
      id: 'user-1',
      name: 'John Doe',
      email: 'john@example.com',
      picture: 'https://picsum.photos/100/100?random=1',
      role: 'admin' as const
    },
    tags: ['javascript', 'programming', 'basics'],
    sections: [],
    settings: {
      timeLimit: 30,
      deadline: '2024-12-31T23:59:59Z',
      maxAttempts: 3,
      passingScore: 70,
      allowRetake: true,
      randomizeQuestions: false,
      randomizeAnswers: true,
      showResults: true,
      isPublic: true,
      allowComments: true
    },
    metadata: {
      totalQuestions: 20,
      totalPoints: 100,
      estimatedTime: 30,
      difficulty: 'intermediate' as const,
      tags: ['javascript', 'programming', 'basics'],
      category: 'Programming',
      attempts: 0,
      averageScore: 0
    },
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-20T14:45:00Z'
  },
  advanced: {
    id: 'test-2',
    title: 'Advanced React Patterns',
    description: 'Deep dive into React advanced concepts including hooks, context, and performance optimization.',
    difficulty: 'expert' as const,
    status: 'published' as const,
    image: 'https://picsum.photos/400/200?random=2',
    estimatedTime: 60,
    totalPoints: 200,
    deadline: '2024-11-30T23:59:59Z',
    author: {
      id: 'user-2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      picture: 'https://picsum.photos/100/100?random=2',
      role: 'moderator' as const
    },
    tags: ['react', 'frontend', 'advanced'],
    sections: [],
    settings: {
      timeLimit: 60,
      deadline: '2024-11-30T23:59:59Z',
      maxAttempts: 1,
      passingScore: 80,
      allowRetake: false,
      randomizeQuestions: true,
      randomizeAnswers: true,
      showResults: false,
      isPublic: false,
      allowComments: false
    },
    metadata: {
      totalQuestions: 50,
      totalPoints: 200,
      estimatedTime: 60,
      difficulty: 'expert' as const,
      tags: ['react', 'frontend', 'advanced', 'hooks'],
      category: 'Frontend',
      attempts: 0,
      averageScore: 0
    },
    createdAt: '2024-01-10T09:15:00Z',
    updatedAt: '2024-01-18T16:20:00Z'
  },
  beginner: {
    id: 'test-3',
    title: 'HTML & CSS Basics',
    description: 'Learn the fundamentals of web development with HTML and CSS.',
    difficulty: 'beginner' as const,
    status: 'published' as const,
    image: 'https://picsum.photos/400/200?random=3',
    estimatedTime: 20,
    totalPoints: 50,
    deadline: '2024-12-31T23:59:59Z',
    author: {
      id: 'user-3',
      name: 'Bob Wilson',
      email: 'bob@example.com',
      picture: 'https://picsum.photos/100/100?random=3',
      role: 'user' as const
    },
    tags: ['html', 'css', 'basics'],
    sections: [],
    settings: {
      timeLimit: 20,
      deadline: '2024-12-31T23:59:59Z',
      maxAttempts: 5,
      passingScore: 60,
      allowRetake: true,
      randomizeQuestions: false,
      randomizeAnswers: false,
      showResults: true,
      isPublic: true,
      allowComments: true
    },
    metadata: {
      totalQuestions: 15,
      totalPoints: 50,
      estimatedTime: 20,
      difficulty: 'beginner' as const,
      tags: ['html', 'css', 'basics', 'web'],
      category: 'Web Development',
      attempts: 0,
      averageScore: 0
    },
    createdAt: '2024-01-05T08:00:00Z',
    updatedAt: '2024-01-12T11:30:00Z'
  },
  compact: {
    id: 'test-4',
    title: 'Quick Math Quiz',
    description: 'Fast-paced mathematics quiz covering basic operations.',
    difficulty: 'intermediate' as const,
    status: 'published' as const,
    image: 'https://picsum.photos/400/200?random=4',
    estimatedTime: 10,
    totalPoints: 25,
    deadline: '2024-12-31T23:59:59Z',
    author: {
      id: 'user-4',
      name: 'Alice Brown',
      email: 'alice@example.com',
      picture: 'https://picsum.photos/100/100?random=4',
      role: 'user' as const
    },
    tags: ['math', 'quiz'],
    sections: [],
    settings: {
      timeLimit: 10,
      deadline: '2024-12-31T23:59:59Z',
      maxAttempts: 3,
      passingScore: 70,
      allowRetake: true,
      randomizeQuestions: true,
      randomizeAnswers: true,
      showResults: true,
      isPublic: true,
      allowComments: false
    },
    metadata: {
      totalQuestions: 10,
      totalPoints: 25,
      estimatedTime: 10,
      difficulty: 'intermediate' as const,
      tags: ['math', 'quiz', 'quick'],
      category: 'Mathematics',
      attempts: 0,
      averageScore: 0
    },
    createdAt: '2024-01-08T14:20:00Z',
    updatedAt: '2024-01-15T09:45:00Z'
  },
  expired: {
    id: 'test-5',
    title: 'Expired Test Example',
    description: 'This test has passed its deadline and is no longer available.',
    difficulty: 'advanced' as const,
    status: 'archived' as const,
    image: 'https://picsum.photos/400/200?random=5',
    estimatedTime: 45,
    totalPoints: 150,
    deadline: '2024-01-01T00:00:00Z',
    author: {
      id: 'user-5',
      name: 'Charlie Davis',
      email: 'charlie@example.com',
      picture: 'https://picsum.photos/100/100?random=5',
      role: 'admin' as const
    },
    tags: ['expired', 'example'],
    sections: [],
    settings: {
      timeLimit: 45,
      deadline: '2024-01-01T00:00:00Z',
      maxAttempts: 1,
      passingScore: 75,
      allowRetake: false,
      randomizeQuestions: false,
      randomizeAnswers: false,
      showResults: false,
      isPublic: false,
      allowComments: false
    },
    metadata: {
      totalQuestions: 30,
      totalPoints: 150,
      estimatedTime: 45,
      difficulty: 'advanced' as const,
      tags: ['expired', 'example', 'archived'],
      category: 'Examples',
      attempts: 0,
      averageScore: 0
    },
    createdAt: '2023-12-15T10:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  noImage: {
    id: 'test-6',
    title: 'Test Without Image',
    description: 'This test demonstrates how it looks without a cover image.',
    difficulty: 'beginner' as const,
    status: 'draft' as const,
    estimatedTime: 15,
    totalPoints: 30,
    deadline: '2024-12-31T23:59:59Z',
    author: {
      id: 'user-6',
      name: 'Diana Evans',
      email: 'diana@example.com',
      picture: 'https://picsum.photos/100/100?random=6',
      role: 'user' as const
    },
    tags: ['no-image', 'example'],
    sections: [],
    settings: {
      timeLimit: 15,
      deadline: '2024-12-31T23:59:59Z',
      maxAttempts: 2,
      passingScore: 65,
      allowRetake: true,
      randomizeQuestions: false,
      randomizeAnswers: false,
      showResults: true,
      isPublic: false,
      allowComments: true
    },
    metadata: {
      totalQuestions: 12,
      totalPoints: 30,
      estimatedTime: 15,
      difficulty: 'beginner' as const,
      tags: ['no-image', 'example', 'draft'],
      category: 'Examples',
      attempts: 0,
      averageScore: 0
    },
    createdAt: '2024-01-20T16:30:00Z',
    updatedAt: '2024-01-20T16:30:00Z'
  }
}

export const Default: Story = {
  args: {
    test: mockTests.basic
  },
  parameters: {
    docs: {
      description: {
        story: 'Default test card with image and statistics'
      }
    }
  }
}

export const Compact: Story = {
  args: {
    test: mockTests.basic,
    variant: 'compact'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact version of test card'
      }
    }
  }
}

export const Detailed: Story = {
  args: {
    test: mockTests.basic,
    variant: 'detailed',
    showAuthor: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Detailed test card with author information'
      }
    }
  }
}

export const Advanced: Story = {
  args: {
    test: mockTests.advanced,
    showAuthor: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Advanced difficulty test card'
      }
    }
  }
}

export const Beginner: Story = {
  args: {
    test: mockTests.beginner
  },
  parameters: {
    docs: {
      description: {
        story: 'Beginner difficulty test card'
      }
    }
  }
}

export const Clickable: Story = {
  args: {
    test: mockTests.basic,
    clickable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Clickable test card with hover effects'
      }
    }
  }
}

export const NoImage: Story = {
  args: {
    test: mockTests.noImage
  },
  parameters: {
    docs: {
      description: {
        story: 'Test card without image'
      }
    }
  }
}

export const ExpiredDeadline: Story = {
  args: {
    test: mockTests.expired
  },
  parameters: {
    docs: {
      description: {
        story: 'Test card with expired deadline'
      }
    }
  }
}

export const DifficultyComparison: Story = {
  render: () => ({
    components: { TestCard },
    setup() {
      return { mockTests }
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TestCard :test="mockTests.beginner" />
        <TestCard :test="mockTests.basic" />
        <TestCard :test="mockTests.advanced" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different difficulty levels'
      }
    }
  }
} 