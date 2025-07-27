import type { Meta, StoryObj } from '@storybook/vue3'
import TestResult from './index.vue'

const meta: Meta<typeof TestResult> = {
  title: 'Test/Result',
  component: TestResult,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Component for displaying detailed test results with statistics and analysis'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const mockTest: Test = {
  id: 'test-1',
  title: 'JavaScript Fundamentals',
  description: 'Test your knowledge of JavaScript basics',
  image: 'https://via.placeholder.com/300x200',
  deadline: '2024-12-31T23:59:59Z',
  timeLimit: 60,
  randomizeQuestions: true,
  randomizeAnswers: false,
  difficultyDistribution: {
    easy: 40,
    medium: 50,
    hard: 10
  },
  sections: [
    {
      id: 'section-1',
      title: 'All Questions',
      description: 'All test questions',
      questions: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5']
    }
  ],
  questions: [
    {
      id: 'question-1',
      title: 'What is the correct way to declare a variable in JavaScript?',
      description: 'Choose the proper syntax',
      difficulty: 'easy',
      points: 2,
      answers: [
        { id: 'answer-1', text: 'var x = 5;' },
        { id: 'answer-2', text: 'let x = 5;' },
        { id: 'answer-3', text: 'const x = 5;' },
        { id: 'answer-4', text: 'All of the above' }
      ],
      correctAnswerIds: ['answer-4'],
      explanation: 'All three ways are correct for declaring variables in JavaScript, each with different scoping rules.'
    },
    {
      id: 'question-2',
      title: 'Which of these are JavaScript frameworks?',
      description: 'Select all that apply',
      difficulty: 'medium',
      points: 3,
      answers: [
        { id: 'answer-5', text: 'React' },
        { id: 'answer-6', text: 'Vue' },
        { id: 'answer-7', text: 'Angular' },
        { id: 'answer-8', text: 'Django' }
      ],
      correctAnswerIds: ['answer-5', 'answer-6', 'answer-7'],
      explanation: 'React, Vue, and Angular are JavaScript frameworks. Django is a Python framework.'
    },
    {
      id: 'question-3',
      title: 'What is the time complexity of binary search?',
      description: 'Algorithm analysis question',
      difficulty: 'hard',
      points: 4,
      answers: [
        { id: 'answer-9', text: 'O(n)' },
        { id: 'answer-10', text: 'O(log n)' },
        { id: 'answer-11', text: 'O(n²)' },
        { id: 'answer-12', text: 'O(1)' }
      ],
      correctAnswerIds: ['answer-10'],
      explanation: 'Binary search has a time complexity of O(log n) as it divides the search space in half with each iteration.'
    },
    {
      id: 'question-4',
      title: 'What is the primary color?',
      description: 'Basic color theory',
      difficulty: 'easy',
      points: 1,
      answers: [
        { id: 'answer-13', text: 'Red' },
        { id: 'answer-14', text: 'Blue' },
        { id: 'answer-15', text: 'Green' }
      ],
      correctAnswerIds: ['answer-13'],
      explanation: 'Red is considered a primary color in the RGB color model.'
    },
    {
      id: 'question-5',
      title: 'Explain the concept of closures in JavaScript',
      description: 'Advanced JavaScript concept',
      difficulty: 'hard',
      points: 5,
      answers: [
        { id: 'answer-16', text: 'A function that has access to variables in its outer scope' },
        { id: 'answer-17', text: 'A way to close browser windows' },
        { id: 'answer-18', text: 'A method to end loops' },
        { id: 'answer-19', text: 'A type of variable declaration' }
      ],
      correctAnswerIds: ['answer-16'],
      explanation: 'A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.'
    }
  ],
  author: {
    id: 'user-1',
    name: 'John Doe',
    email: 'john@example.com',
    picture: 'https://via.placeholder.com/100x100',
    role: 'user'
  },
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
}

const mockResult: TestResult = {
  testId: 'test-1',
  userId: 'user-1',
  answers: [
    {
      questionId: 'question-1',
      answerIds: ['answer-4'],
      isCorrect: true,
      points: 2
    },
    {
      questionId: 'question-2',
      answerIds: ['answer-5', 'answer-6'],
      isCorrect: false,
      points: 0
    },
    {
      questionId: 'question-3',
      answerIds: ['answer-10'],
      isCorrect: true,
      points: 4
    },
    {
      questionId: 'question-4',
      answerIds: ['answer-13'],
      isCorrect: true,
      points: 1
    },
    {
      questionId: 'question-5',
      answerIds: ['answer-16'],
      isCorrect: true,
      points: 5
    }
  ],
  totalPoints: 12,
  maxPoints: 15,
  percentage: 80,
  timeSpent: 1800, // 30 minutes
  completedAt: '2024-01-15T14:30:00Z',
  isPassed: true
}

export const ExcellentResult: Story = {
  args: {
    test: mockTest,
    result: {
      ...mockResult,
      totalPoints: 15,
      maxPoints: 15,
      percentage: 100,
      timeSpent: 1200, // 20 minutes
      isPassed: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Perfect score with excellent performance'
      }
    }
  }
}

export const GoodResult: Story = {
  args: {
    test: mockTest,
    result: mockResult
  },
  parameters: {
    docs: {
      description: {
        story: 'Good result with 80% score'
      }
    }
  }
}

export const AverageResult: Story = {
  args: {
    test: mockTest,
    result: {
      ...mockResult,
      totalPoints: 9,
      maxPoints: 15,
      percentage: 60,
      timeSpent: 2400, // 40 minutes
      isPassed: false,
      answers: [
        {
          questionId: 'question-1',
          answerIds: ['answer-4'],
          isCorrect: true,
          points: 2
        },
        {
          questionId: 'question-2',
          answerIds: ['answer-5'],
          isCorrect: false,
          points: 0
        },
        {
          questionId: 'question-3',
          answerIds: ['answer-9'],
          isCorrect: false,
          points: 0
        },
        {
          questionId: 'question-4',
          answerIds: ['answer-13'],
          isCorrect: true,
          points: 1
        },
        {
          questionId: 'question-5',
          answerIds: ['answer-16'],
          isCorrect: true,
          points: 5
        }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Average result with 60% score'
      }
    }
  }
}

export const FailedResult: Story = {
  args: {
    test: mockTest,
    result: {
      ...mockResult,
      totalPoints: 3,
      maxPoints: 15,
      percentage: 20,
      timeSpent: 3600, // 60 minutes
      isPassed: false,
      answers: [
        {
          questionId: 'question-1',
          answerIds: ['answer-1'],
          isCorrect: false,
          points: 0
        },
        {
          questionId: 'question-2',
          answerIds: ['answer-8'],
          isCorrect: false,
          points: 0
        },
        {
          questionId: 'question-3',
          answerIds: ['answer-9'],
          isCorrect: false,
          points: 0
        },
        {
          questionId: 'question-4',
          answerIds: ['answer-13'],
          isCorrect: true,
          points: 1
        },
        {
          questionId: 'question-5',
          answerIds: ['answer-17'],
          isCorrect: false,
          points: 0
        }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Failed result with 20% score'
      }
    }
  }
}

export const FastCompletion: Story = {
  args: {
    test: mockTest,
    result: {
      ...mockResult,
      totalPoints: 14,
      maxPoints: 15,
      percentage: 93,
      timeSpent: 600, // 10 minutes
      isPassed: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Fast completion with high score'
      }
    }
  }
}

export const SlowCompletion: Story = {
  args: {
    test: mockTest,
    result: {
      ...mockResult,
      totalPoints: 10,
      maxPoints: 15,
      percentage: 67,
      timeSpent: 3300, // 55 minutes (close to time limit)
      isPassed: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Slow completion with average score'
      }
    }
  }
}
