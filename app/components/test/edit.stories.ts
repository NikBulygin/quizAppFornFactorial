import type { Meta, StoryObj } from '@storybook/vue3'
import TestEdit from './edit.vue'

const meta: Meta<typeof TestEdit> = {
  title: 'Test/Edit',
  component: TestEdit,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    isEditing: {
      control: { type: 'boolean' },
      description: 'Режим редактирования'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const CreateNewTest: Story = {
  args: {
    isEditing: false
  }
}

export const EditExistingTest: Story = {
  args: {
    isEditing: true
  }
}

export const WithTestData: Story = {
  args: {
    isEditing: true,
    test: {
      id: 'test-1',
      title: 'Пример теста',
      description: 'Описание теста для демонстрации',
      timeLimit: 30,
      randomizeQuestions: true,
      randomizeAnswers: false,
      difficultyDistribution: {
        easy: 40,
        medium: 50,
        hard: 10
      },
      questions: [],
      sections: [],
      author: {
        id: 'user-1',
        name: 'Пользователь',
        email: 'user@example.com',
        picture: 'https://via.placeholder.com/100x100',
        role: 'user'
      },
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z'
    }
  }
} 