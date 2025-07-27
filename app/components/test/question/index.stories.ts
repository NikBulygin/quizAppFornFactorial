import type { Meta, StoryObj } from '@storybook/vue3'
import TestQuestion from './index.vue'

const meta: Meta<typeof TestQuestion> = {
  title: 'Test/Question',
  component: TestQuestion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Test question component with single and multiple choice answers'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const mockQuestion: TestQuestion = {
  id: 'question-1',
  title: 'Какая столица Казахстана?',
  description: 'Выберите правильный ответ из предложенных вариантов',
  difficulty: 'easy',
  points: 5,
  answers: [
    { id: 'answer-1', description: 'Алматы' },
    { id: 'answer-2', description: 'Астана' },
    { id: 'answer-3', description: 'Караганда' },
    { id: 'answer-4', description: 'Шымкент' }
  ],
  correctAnswerIds: ['answer-2'],
  explanation: 'Столица Казахстана - Астана (с 2019 года переименована в Нур-Султан, но в 2022 году вернули название Астана)'
}

const mockMultipleQuestion: TestQuestion = {
  id: 'question-2',
  title: 'Какие языки программирования являются объектно-ориентированными?',
  description: 'Выберите все правильные ответы',
  difficulty: 'medium',
  points: 10,
  answers: [
    { id: 'answer-1', description: 'Java' },
    { id: 'answer-2', description: 'C++' },
    { id: 'answer-3', description: 'Python' },
    { id: 'answer-4', description: 'Assembly' },
    { id: 'answer-5', description: 'C#' }
  ],
  correctAnswerIds: ['answer-1', 'answer-2', 'answer-3', 'answer-5'],
  explanation: 'Java, C++, Python и C# являются объектно-ориентированными языками программирования. Assembly - это язык низкого уровня.'
}

export const SingleChoice: Story = {
  args: {
    question: mockQuestion
  },
  parameters: {
    docs: {
      description: {
        story: 'Question with single correct answer'
      }
    }
  }
}

export const MultipleChoice: Story = {
  args: {
    question: mockMultipleQuestion
  },
  parameters: {
    docs: {
      description: {
        story: 'Question with multiple correct answers'
      }
    }
  }
}

export const WithAnswers: Story = {
  args: {
    question: mockQuestion,
    showAnswers: true,
    userAnswer: {
      questionId: '1',
      answerIds: ['2'],
      timeSpent: 30
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Question with correct answers shown'
      }
    }
  }
}

export const WithExplanation: Story = {
  args: {
    question: mockQuestion,
    showExplanation: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Question with explanation displayed'
      }
    }
  }
}

export const Preview: Story = {
  args: {
    question: mockQuestion,
    variant: 'preview',
    showAnswers: true,
    showExplanation: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Question in preview mode (read-only)'
      }
    }
  }
}

export const Compact: Story = {
  args: {
    question: mockQuestion,
    variant: 'compact'
  },
  parameters: {
    docs: {
      description: {
        story: 'Question in compact mode'
      }
    }
  }
}

export const NoImage: Story = {
  args: {
    question: {
      ...mockQuestion,
      image: undefined
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Question without image'
      }
    }
  }
}

export const HardQuestion: Story = {
  args: {
    question: {
      ...mockQuestion,
      difficulty: 'hard',
      points: 25,
      title: 'Complex mathematical problem with multiple steps'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Hard difficulty question with more points'
      }
    }
  }
}

export const QuestionTypes: Story = {
  render: () => ({
    components: { TestQuestion },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Single Correct Answer</h3>
          <TestQuestion :question="singleQuestion" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Multiple Correct Answers</h3>
          <TestQuestion :question="multipleQuestion" />
        </div>
      </div>
    `,
    setup() {
      return {
        singleQuestion: mockQuestion,
        multipleQuestion: mockMultipleQuestion
      }
    }
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of questions with single and multiple correct answers'
      }
    }
  }
} 