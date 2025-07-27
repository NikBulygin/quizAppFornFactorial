import type { Meta, StoryObj } from '@storybook/vue3'
import TestLeaderboard from './index.vue'

const meta: Meta<typeof TestLeaderboard> = {
  title: 'Test/Leaderboard',
  component: TestLeaderboard,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    loading: {
      control: { type: 'boolean' },
      description: 'Состояние загрузки'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    loading: false,
    testId: 'test-1'
  }
}

export const Loading: Story = {
  args: {
    loading: true,
    testId: 'test-1'
  }
}

export const Empty: Story = {
  args: {
    loading: false,
    testId: 'test-1',
    results: []
  }
}

export const WithResults: Story = {
  args: {
    loading: false,
    testId: 'test-1',
    results: [
      {
        id: 'result-1',
        testId: 'test-1',
        userId: 'user-1',
        answers: [],
        totalPoints: 85,
        maxPoints: 100,
        percentage: 85,
        timeSpent: 1800,
        completedAt: '2024-01-20T10:30:00Z',
        isPassed: true
      },
      {
        id: 'result-2',
        testId: 'test-1',
        userId: 'user-2',
        answers: [],
        totalPoints: 92,
        maxPoints: 100,
        percentage: 92,
        timeSpent: 2100,
        completedAt: '2024-01-20T11:15:00Z',
        isPassed: true
      },
      {
        id: 'result-3',
        testId: 'test-1',
        userId: 'user-3',
        answers: [],
        totalPoints: 78,
        maxPoints: 100,
        percentage: 78,
        timeSpent: 2400,
        completedAt: '2024-01-20T12:00:00Z',
        isPassed: false
      }
    ]
  }
} 