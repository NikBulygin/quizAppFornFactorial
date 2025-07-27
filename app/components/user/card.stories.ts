import type { Meta, StoryObj } from '@storybook/vue3'
import UserCard from './card.vue'

const meta: Meta<typeof UserCard> = {
  title: 'User/Card',
  component: UserCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'User card component with compact and full view modes'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['compact', 'full']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    showRole: {
      control: { type: 'boolean' }
    },
    clickable: {
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
    role: 'user' as const
  },
  admin: {
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@example.com',
    picture: 'https://i.pravatar.cc/150?img=2',
    nickname: 'admin',
    role: 'admin' as const
  },
  moderator: {
    id: 'mod-1',
    name: 'Moderator User',
    email: 'mod@example.com',
    picture: 'https://i.pravatar.cc/150?img=3',
    nickname: 'moderator',
    role: 'moderator' as const
  },
  noPicture: {
    id: 'user-2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    nickname: 'janesmith',
    role: 'user' as const
  }
}

export const Compact: Story = {
  args: {
    user: mockUsers.regular,
    variant: 'compact'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact view showing only avatar'
      }
    }
  }
}

export const Full: Story = {
  args: {
    user: mockUsers.regular,
    variant: 'full'
  },
  parameters: {
    docs: {
      description: {
        story: 'Full view showing avatar, name, email and role'
      }
    }
  }
}

export const Admin: Story = {
  args: {
    user: mockUsers.admin,
    variant: 'full',
    showRole: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Admin user with red border and badge'
      }
    }
  }
}

export const Moderator: Story = {
  args: {
    user: mockUsers.moderator,
    variant: 'full',
    showRole: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Moderator user with blue border and badge'
      }
    }
  }
}

export const Sizes: Story = {
  render: () => ({
    components: { UserCard },
    setup() {
      return { mockUsers }
    },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Small Size</h3>
          <UserCard :user="mockUsers.regular" variant="full" size="sm" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Medium Size (Default)</h3>
          <UserCard :user="mockUsers.regular" variant="full" size="md" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Large Size</h3>
          <UserCard :user="mockUsers.regular" variant="full" size="lg" />
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Different avatar sizes comparison'
      }
    }
  }
}

export const Clickable: Story = {
  args: {
    user: mockUsers.regular,
    variant: 'full',
    clickable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Clickable card with hover effects'
      }
    }
  }
}

export const NoPicture: Story = {
  args: {
    user: mockUsers.noPicture,
    variant: 'full'
  },
  parameters: {
    docs: {
      description: {
        story: 'User without profile picture'
      }
    }
  }
}

export const RoleComparison: Story = {
  render: () => ({
    components: { UserCard },
    setup() {
      return { mockUsers }
    },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Regular User</h3>
          <UserCard :user="mockUsers.regular" variant="full" show-role />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Admin User</h3>
          <UserCard :user="mockUsers.admin" variant="full" show-role />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Moderator User</h3>
          <UserCard :user="mockUsers.moderator" variant="full" show-role />
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different user roles with their respective styling'
      }
    }
  }
}
