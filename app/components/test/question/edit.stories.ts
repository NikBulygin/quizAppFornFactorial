import type { Meta, StoryObj } from '@storybook/vue3'
import TestQuestionEdit from './edit.vue'

const meta: Meta<typeof TestQuestionEdit> = {
  title: 'Test/Question/Edit',
  component: TestQuestionEdit,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Question editing component with single and multiple choice options'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const mockQuestion: TestQuestion = {
  id: '1',
  title: 'What is the capital of France?',
  description: 'Choose the correct answer from the options below.',
  difficulty: 'easy',
  points: 10,
  answers: [
    { id: '1', description: 'London', isCorrect: false },
    { id: '2', description: 'Paris', isCorrect: true },
    { id: '3', description: 'Berlin', isCorrect: false },
    { id: '4', description: 'Madrid', isCorrect: false }
  ],
  explanation: 'Paris is the capital and largest city of France.'
}

const mockMultipleQuestion: TestQuestion = {
  id: '2',
  title: 'Which programming languages are object-oriented?',
  description: 'Select all that apply.',
  difficulty: 'medium',
  points: 15,
  answers: [
    { id: '1', description: 'Java', isCorrect: true },
    { id: '2', description: 'Python', isCorrect: true },
    { id: '3', description: 'C++', isCorrect: true },
    { id: '4', description: 'Assembly', isCorrect: false }
  ],
  explanation: 'Java, Python, and C++ are all object-oriented programming languages.'
}

export const Create: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Creating new question'
      }
    }
  }
}

export const EditSingle: Story = {
  args: {
    question: mockQuestion
  },
  parameters: {
    docs: {
      description: {
        story: 'Editing question with single correct answer'
      }
    }
  }
}

export const EditMultiple: Story = {
  args: {
    question: mockMultipleQuestion
  },
  parameters: {
    docs: {
      description: {
        story: 'Editing question with multiple correct answers'
      }
    }
  }
}

export const Saving: Story = {
  args: {
    question: mockQuestion,
    isSaving: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Question form in saving state'
      }
    }
  }
}

export const WithImage: Story = {
  args: {
    question: {
      ...mockQuestion,
      image: 'https://example.com/paris.jpg'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Question with image'
      }
    }
  }
}

export const HardQuestion: Story = {
  args: {
    question: {
      ...mockQuestion,
      difficulty: 'hard',
      points: 25
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Hard difficulty question'
      }
    }
  }
}

export const WithExplanation: Story = {
  args: {
    question: {
      ...mockQuestion,
      explanation: 'Paris has been the capital of France since 987 CE. It is known as the "City of Light" and is famous for its culture, art, fashion, and cuisine.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Question with detailed explanation'
      }
    }
  }
} 