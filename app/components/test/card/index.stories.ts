import type { Meta, StoryObj } from '@storybook/vue3'
import TestCard from './index.vue'

const meta: Meta<typeof TestCard> = {
  title: 'Test/Card',
  component: TestCard,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    variant: {
      control: { type: 'select', options: ['default', 'compact', 'detailed'] },
      description: 'Вариант отображения'
    },
    showAuthor: {
      control: { type: 'boolean' },
      description: 'Показывать автора'
    },
    showStats: {
      control: { type: 'boolean' },
      description: 'Показывать статистику'
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Кликабельность'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    test: {
      id: 'test-1',
      title: 'Основы JavaScript',
      description: 'Тест по основам JavaScript',
      image: 'https://picsum.photos/400/200?random=1',
      timeLimit: 30,
      deadline: '2024-12-31T23:59:59Z',
      randomizeQuestions: false,
      randomizeAnswers: true,
      difficultyDistribution: {
        easy: 30,
        medium: 50,
        hard: 20
      },
      sections: [],
      questions: [],
      questionSectionLinks: [],
      author: {
        id: 'user-1',
        name: 'Иван Иванов',
        email: 'ivan@example.com',
        picture: 'https://picsum.photos/100/100?random=1',
        role: 'user'
      },
      createdAt: '2024-01-15T10:30:00Z',
      updatedAt: '2024-01-20T14:45:00Z'
    }
  }
}

export const Compact: Story = {
  args: {
    test: {
      id: 'test-2',
      title: 'Компактный тест',
      description: 'Краткое описание',
      image: 'https://picsum.photos/400/200?random=2',
      timeLimit: 15,
      randomizeQuestions: true,
      randomizeAnswers: true,
      difficultyDistribution: {
        easy: 60,
        medium: 30,
        hard: 10
      },
      sections: [],
      questions: [],
      questionSectionLinks: [],
      author: {
        id: 'user-2',
        name: 'Мария Петрова',
        email: 'maria@example.com',
        picture: 'https://picsum.photos/100/100?random=2',
        role: 'user'
      },
      createdAt: '2024-01-10T09:00:00Z',
      updatedAt: '2024-01-15T16:30:00Z'
    },
    variant: 'compact'
  }
}

export const Detailed: Story = {
  args: {
    test: {
      id: 'test-3',
      title: 'Подробный тест с длинным названием',
      description: 'Очень подробное описание теста с множеством деталей и информации о том, что будет проверяться в данном тесте',
      image: 'https://picsum.photos/400/200?random=3',
      timeLimit: 90,
      deadline: '2024-10-31T23:59:59Z',
      randomizeQuestions: true,
      randomizeAnswers: true,
      difficultyDistribution: {
        easy: 20,
        medium: 40,
        hard: 40
      },
      sections: [],
      questions: [],
      questionSectionLinks: [],
      author: {
        id: 'user-3',
        name: 'Алексей Сидоров',
        email: 'alex@example.com',
        picture: 'https://picsum.photos/100/100?random=3',
        role: 'admin'
      },
      createdAt: '2024-01-05T08:00:00Z',
      updatedAt: '2024-01-18T12:15:00Z'
    },
    variant: 'detailed',
    showAuthor: true,
    showStats: true
  }
} 