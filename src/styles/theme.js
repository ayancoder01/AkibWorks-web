// Minimalist Theme Configuration - Black & White
export const theme = {
  colors: {
    // Black and white only palette
    primary: '#000000',      // Pure black for primary elements
    secondary: '#666666',     // Medium gray for secondary text
    accent: '#000000',       // Black for links and CTAs
    
    // Neutral grays - black to white spectrum only
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717'
    },
    
    // Background colors
    background: {
      primary: '#FFFFFF',
      secondary: '#FAFAFA',
      dark: '#000000'
    },
    
    // Text colors
    text: {
      primary: '#000000',
      secondary: '#666666',
      light: '#999999',
      inverse: '#FFFFFF'
    }
  },
  
  // Simplified shadows
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 4px 6px rgba(0, 0, 0, 0.07)',
    xl: '0 8px 16px rgba(0, 0, 0, 0.08)'
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'
    }
  }
}
