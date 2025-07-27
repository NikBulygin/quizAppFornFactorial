import type { Meta, StoryObj } from '@storybook/vue3'
import TestQuestion from './index.vue'

const meta: Meta<typeof TestQuestion> = {
  title: 'Test/Question',
  component: TestQuestion,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    variant: {
      control: { type: 'select', options: ['default', 'compact', 'preview'] },
      description: 'Вариант отображения'
    },
    showAnswers: {
      control: { type: 'boolean' },
      description: 'Показывать ответы'
    },
    showExplanation: {
      control: { type: 'boolean' },
      description: 'Показывать объяснение'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const SingleChoice: Story = {
  args: {
    question: {
      id: 'question-1',
      title: 'Какая столица Казахстана?',
      description: 'Выберите правильный ответ',
      difficulty: 'easy',
      points: 5,
      answers: [
        { id: 'answer-1', text: 'Алматы' },
        { id: 'answer-2', text: 'Астана' },
        { id: 'answer-3', text: 'Караганда' },
        { id: 'answer-4', text: 'Шымкент' }
      ],
      correctAnswerIds: ['answer-2'],
      explanation: 'Столица Казахстана - Астана'
    }
  }
}

export const MultipleChoice: Story = {
  args: {
    question: {
      id: 'question-2',
      title: 'Какие языки программирования являются объектно-ориентированными?',
      description: 'Выберите все правильные ответы',
      difficulty: 'medium',
      points: 10,
      answers: [
        { id: 'answer-1', text: 'Java' },
        { id: 'answer-2', text: 'C++' },
        { id: 'answer-3', text: 'Python' },
        { id: 'answer-4', text: 'Assembly' },
        { id: 'answer-5', text: 'C#' }
      ],
      correctAnswerIds: ['answer-1', 'answer-2', 'answer-3', 'answer-5'],
      explanation: 'Java, C++, Python и C# являются ООП языками'
    }
  }
}

export const WithAnswers: Story = {
  args: {
    question: {
      id: 'question-3',
      title: 'Простой вопрос',
      description: 'С правильными ответами',
      difficulty: 'easy',
      points: 2,
      answers: [
        { id: 'answer-1', text: 'Первый ответ' },
        { id: 'answer-2', text: 'Второй ответ' },
        { id: 'answer-3', text: 'Третий ответ' }
      ],
      correctAnswerIds: ['answer-2']
    },
    showAnswers: true,
    userAnswer: {
      questionId: 'question-3',
      answerIds: ['answer-2']
    }
  }
}

export const WithExplanation: Story = {
  args: {
    question: {
      id: 'question-4',
      title: 'Вопрос с объяснением',
      description: 'Показывает объяснение после ответа',
      difficulty: 'hard',
      points: 5,
      answers: [
        { id: 'answer-1', text: 'Вариант А' },
        { id: 'answer-2', text: 'Вариант Б' },
        { id: 'answer-3', text: 'Вариант В' }
      ],
      correctAnswerIds: ['answer-2'],
      explanation: 'Подробное объяснение правильного ответа с дополнительной информацией'
    },
    showExplanation: true
  }
} 