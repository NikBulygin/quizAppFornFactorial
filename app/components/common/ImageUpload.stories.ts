import type { Meta, StoryObj } from '@storybook/vue3'
import ImageUpload from './ImageUpload.vue'

const meta: Meta<typeof ImageUpload> = {
  title: 'Common/ImageUpload',
  component: ImageUpload,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'URL или base64 изображения'
    },
    alt: {
      control: 'text',
      description: 'Alt текст для изображения'
    },
    convertUrlToBase64: {
      control: 'boolean',
      description: 'Конвертировать URL в base64'
    },
    compressFiles: {
      control: 'boolean',
      description: 'Сжимать файлы изображений'
    },
    maxFileSize: {
      control: 'number',
      description: 'Максимальный размер файла в байтах'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: '',
    alt: 'Test image'
  }
}

export const WithImage: Story = {
  args: {
    modelValue: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    alt: 'Mountain landscape'
  }
}

export const WithBase64Image: Story = {
  args: {
    modelValue: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==',
    alt: 'Base64 placeholder'
  }
}

export const ConvertUrlToBase64: Story = {
  args: {
    modelValue: '',
    alt: 'Test image',
    convertUrlToBase64: true
  }
}

export const NoCompression: Story = {
  args: {
    modelValue: '',
    alt: 'Test image',
    compressFiles: false
  }
}

export const SmallFileSize: Story = {
  args: {
    modelValue: '',
    alt: 'Test image',
    maxFileSize: 1024 * 1024 // 1MB
  }
}

export const LargeFileSize: Story = {
  args: {
    modelValue: '',
    alt: 'Test image',
    maxFileSize: 10 * 1024 * 1024 // 10MB
  }
} 