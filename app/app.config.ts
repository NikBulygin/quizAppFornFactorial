export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'slate',
    },
    button: {
      defaultVariants: {
      },
      base: 'transition-all duration-200',
      variants: {
        outline: {
          'border-2': true,
          'border-gray-300': true,
          'dark:border-gray-600': true,
          'hover:border-gray-400': true,
          'dark:hover:border-gray-500': true,
          'hover:bg-gray-50': true,
          'dark:hover:bg-gray-800': true,
          'hover:scale-105': true,
          'active:scale-95': true
        },
        solid: {
          'hover:scale-105': true,
          'active:scale-95': true
        }
      }
    }
  }
})
