import type { Meta, StoryObj } from '@storybook/vue3'
import UserProfile from './profile.vue'

const meta: Meta<typeof UserProfile> = {
  title: 'User/Profile',
  component: UserProfile,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    showStats: {
      control: { type: 'boolean' },
      description: 'Показывать статистику'
    },
    editable: {
      control: { type: 'boolean' },
      description: 'Режим редактирования'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    user: {
      id: 'user-1',
      name: 'Иван Иванов',
      email: 'ivan@example.com',
      picture: 'https://i.pravatar.cc/150?img=1',
      nickname: 'ivan',
      role: 'user',
      emailVerified: true
    }
  }
}

export const Admin: Story = {
  args: {
    user: {
      id: 'admin-1',
      name: 'Администратор',
      email: 'admin@example.com',
      picture: 'https://i.pravatar.cc/150?img=2',
      nickname: 'admin',
      role: 'admin',
      emailVerified: true
    }
  }
}

export const WithStats: Story = {
  args: {
    user: {
      id: 'user-1',
      name: 'Пользователь',
      email: 'user@example.com',
      picture: 'https://i.pravatar.cc/150?img=1',
      nickname: 'user',
      role: 'user',
      emailVerified: true
    },
    showStats: true
  }
}

export const Editable: Story = {
  args: {
    user: {
      id: 'user-1',
      name: 'Редактируемый пользователь',
      email: 'editable@example.com',
      picture: 'https://i.pravatar.cc/150?img=3',
      nickname: 'editable',
      role: 'user',
      emailVerified: false
    },
    editable: true
  }
}

export const UnverifiedEmail: Story = {
  args: {
    user: {
      id: 'user-2',
      name: 'Неподтвержденный пользователь',
      email: 'unverified@example.com',
      picture: 'https://i.pravatar.cc/150?img=4',
      nickname: 'unverified',
      role: 'user',
      emailVerified: false
    }
  }
}
