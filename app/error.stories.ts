import type { Meta, StoryObj } from '@storybook/vue3'
import ErrorPage from './error.vue'

const meta: Meta<typeof ErrorPage> = {
  title: 'Pages/Error',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Universal error page component with semantic colors, Nuxt UI v3 design system, and Montserrat typography.'
      }
    }
  },
  argTypes: {
    error: {
      description: 'Error object containing status code, message and stack trace',
      control: 'object'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    error: {
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Something went wrong'
    }
  }
}

export const NotFound: Story = {
  args: {
    error: {
      statusCode: 404,
      statusMessage: 'Not Found',
      message: 'The page you are looking for does not exist.'
    }
  }
}

export const Forbidden: Story = {
  args: {
    error: {
      statusCode: 403,
      statusMessage: 'Forbidden',
      message: 'You do not have permission to access this resource.'
    }
  }
}

export const ServerError: Story = {
  args: {
    error: {
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'An internal server error occurred.'
    }
  }
} 