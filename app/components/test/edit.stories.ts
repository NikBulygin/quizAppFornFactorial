import type { Meta, StoryObj } from '@storybook/vue3'
import TestEdit from './edit.vue'

const meta: Meta<typeof TestEdit> = {
  title: 'Test/Edit',
  component: TestEdit,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Component for creating and editing tests with question bank and sections'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const mockTest: Test = {
  id: 'test-1',
  title: 'Sample Test',
  description: 'This is a sample test for demonstration',
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
      title: 'Basic Questions',
      description: 'Fundamental concepts',
      questions: ['question-1', 'question-2', 'question-3']
    },
    {
      id: 'section-2',
      title: 'Advanced Questions',
      description: 'Complex scenarios',
      questions: ['question-4', 'question-5']
    }
  ],
  questions: [
    {
      id: 'question-1',
      title: 'What is 2 + 2?',
      description: 'Basic arithmetic',
      difficulty: 'easy',
      points: 1,
      answers: [
        { id: 'answer-1', text: '3' },
        { id: 'answer-2', text: '4' },
        { id: 'answer-3', text: '5' }
      ],
      correctAnswerIds: ['answer-2']
    },
    {
      id: 'question-2',
      title: 'Which programming languages are object-oriented?',
      description: 'Select all that apply',
      difficulty: 'medium',
      points: 2,
      answers: [
        { id: 'answer-4', text: 'Java' },
        { id: 'answer-5', text: 'Python' },
        { id: 'answer-6', text: 'C++' },
        { id: 'answer-7', text: 'Assembly' }
      ],
      correctAnswerIds: ['answer-4', 'answer-5', 'answer-6']
    },
    {
      id: 'question-3',
      title: 'What is the capital of France?',
      description: 'Geography question',
      difficulty: 'easy',
      points: 1,
      answers: [
        { id: 'answer-8', text: 'London' },
        { id: 'answer-9', text: 'Paris' },
        { id: 'answer-10', text: 'Berlin' }
      ],
      correctAnswerIds: ['answer-9']
    },
    {
      id: 'question-4',
      title: 'Explain the concept of recursion',
      description: 'Advanced programming concept',
      difficulty: 'hard',
      points: 3,
      answers: [
        { id: 'answer-11', text: 'A function calling itself' },
        { id: 'answer-12', text: 'A loop structure' },
        { id: 'answer-13', text: 'A data structure' }
      ],
      correctAnswerIds: ['answer-11']
    },
    {
      id: 'question-5',
      title: 'What is the time complexity of binary search?',
      description: 'Algorithm analysis',
      difficulty: 'hard',
      points: 2,
      answers: [
        { id: 'answer-14', text: 'O(n)' },
        { id: 'answer-15', text: 'O(log n)' },
        { id: 'answer-16', text: 'O(n²)' }
      ],
      correctAnswerIds: ['answer-15']
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

export const CreateNewTest: Story = {
  args: {
    isEditing: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Creating a new test from scratch'
      }
    }
  }
}

export const EditExistingTest: Story = {
  args: {
    test: mockTest,
    isEditing: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Editing an existing test with questions and sections'
      }
    }
  }
}

export const EmptyTest: Story = {
  args: {
    test: {
      ...mockTest,
      questions: [],
      sections: []
    },
    isEditing: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty test with no questions or sections yet'
      }
    }
  }
}

export const TestWithManyQuestions: Story = {
  args: {
    test: {
      ...mockTest,
      questions: [
        ...mockTest.questions,
        // Добавляем больше вопросов для демонстрации
        {
          id: 'question-6',
          title: 'What is the primary color?',
          description: 'Color theory',
          difficulty: 'easy',
          points: 1,
          answers: [
            { id: 'answer-17', text: 'Red' },
            { id: 'answer-18', text: 'Blue' },
            { id: 'answer-19', text: 'Green' }
          ],
          correctAnswerIds: ['answer-17']
        },
        {
          id: 'question-7',
          title: 'Which of these are JavaScript frameworks?',
          description: 'Web development',
          difficulty: 'medium',
          points: 2,
          answers: [
            { id: 'answer-20', text: 'React' },
            { id: 'answer-21', text: 'Vue' },
            { id: 'answer-22', text: 'Angular' },
            { id: 'answer-23', text: 'Django' }
          ],
          correctAnswerIds: ['answer-20', 'answer-21', 'answer-22']
        }
      ]
    },
    isEditing: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Test with many questions demonstrating question bank functionality'
      }
    }
  }
} 