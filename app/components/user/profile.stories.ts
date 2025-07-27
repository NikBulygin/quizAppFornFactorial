import type { Meta, StoryObj } from '@storybook/vue3'
import UserProfile from './profile.vue'

const meta: Meta<typeof UserProfile> = {
  title: 'User/Profile',
  component: UserProfile,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'User profile component with detailed information'
      }
    }
  },
  argTypes: {
    showStats: {
      control: { type: 'boolean' }
    },
    editable: {
      control: { type: 'boolean' }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const mockUsers = {
  regular: {
    id: 'user-1',
    name: 'John Doe',
    email: 'john@example.com',
    picture: 'https://i.pravatar.cc/150?img=1',
    nickname: 'johndoe',
    role: 'user' as const,
    emailVerified: true,
    givenName: 'John',
    familyName: 'Doe',
    locale: 'en-US',
    updatedAt: '2024-01-15T10:30:00Z',
    loggedInAt: '2024-01-20T14:45:00Z'
  },
  admin: {
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@example.com',
    picture: 'https://i.pravatar.cc/150?img=2',
    nickname: 'admin',
    role: 'admin' as const,
    emailVerified: true,
    givenName: 'Admin',
    familyName: 'User',
    locale: 'en-US',
    updatedAt: '2024-01-10T09:15:00Z',
    loggedInAt: '2024-01-20T16:20:00Z'
  },
  moderator: {
    id: 'mod-1',
    name: 'Moderator User',
    email: 'mod@example.com',
    picture: 'https://i.pravatar.cc/150?img=3',
    nickname: 'moderator',
    role: 'moderator' as const,
    emailVerified: false,
    givenName: 'Moderator',
    familyName: 'User',
    locale: 'ru-RU',
    updatedAt: '2024-01-12T11:45:00Z',
    loggedInAt: '2024-01-20T13:30:00Z'
  },
  minimal: {
    id: 'user-2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    picture: 'https://i.pravatar.cc/150?img=4',
    nickname: 'janesmith',
    role: 'user' as const
  }
}

export const Default: Story = {
  args: {
    user: mockUsers.regular
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard user profile with full information'
      }
    }
  }
}

export const Admin: Story = {
  args: {
    user: mockUsers.admin
  },
  parameters: {
    docs: {
      description: {
        story: 'Admin profile with red role badge'
      }
    }
  }
}

export const Moderator: Story = {
  args: {
    user: mockUsers.moderator
  },
  parameters: {
    docs: {
      description: {
        story: 'Moderator profile with blue role badge'
      }
    }
  }
}

export const Minimal: Story = {
  args: {
    user: mockUsers.minimal
  },
  parameters: {
    docs: {
      description: {
        story: 'Profile with minimal user information'
      }
    }
  }
}

export const WithStats: Story = {
  args: {
    user: mockUsers.regular,
    showStats: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Profile with user statistics display'
      }
    }
  }
}

export const Editable: Story = {
  args: {
    user: mockUsers.regular,
    editable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Editable profile with edit button'
      }
    }
  }
}

export const FullProfile: Story = {
  args: {
    user: mockUsers.regular,
    showStats: true,
    editable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Full profile with statistics and editing capability'
      }
    }
  }
}

export const UnverifiedEmail: Story = {
  args: {
    user: mockUsers.moderator,
    showStats: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Profile with unverified email address'
      }
    }
  }
}
