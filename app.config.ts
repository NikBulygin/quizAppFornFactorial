// @ts-expect-error defineAppConfig is auto-imported by Nuxt
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      secondary: 'blue', 
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red',
      neutral: 'slate'
    },
    // Component theme customizations
    button: {
      slots: {
        base: 'font-semibold transition-colors duration-200'
      }
    },
    card: {
      slots: {
        root: 'shadow-lg hover:shadow-xl transition-shadow duration-300'
      }
    },
    container: {
      base: 'font-sans'
    }
  }
}) 