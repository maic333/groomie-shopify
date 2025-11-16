/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./theme-horizon/**/*.liquid'],
  safelist: [
    'translate-y-0', 'translate-y-full',
    'bg-secondary', 'bg-background', 'bg-primary/20', 'text-primary',
    'to-groomie-sage/5', 'bg-groomie-sage/10', 'text-groomie-sage',
    'to-groomie-terracotta/5', 'bg-groomie-terracotta/10', 'text-groomie-terracotta',
    'to-groomie-sage-dark/5', 'bg-groomie-sage-dark/10', 'text-groomie-sage-dark',
    'to-groomie-forest/5', 'bg-groomie-forest/10', 'text-groomie-forest',
  ],
  theme: {
    screens: {
      '2xs': '355px', // small phones
      xs: '480px', // phone
      sm: '576px', // small tablet
      md: '768px', // tablet
      sidenav: '920px', // sidenav breakpoint
      lg: '1024px', // laptop
      desktop: '1024px', // mobile-desktop breakpoint
      xl: '1280px', // laptop
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        groomie: {
          sage: 'hsl(var(--sage-primary))',
          'sage-dark': 'hsl(var(--sage-dark))',
          'sage-light': 'hsl(var(--sage-light))',
          cream: 'hsl(var(--cream-warm))',
          'cream-soft': 'hsl(var(--cream-soft))',
          terracotta: 'hsl(var(--terracotta))',
          forest: 'hsl(var(--forest-deep))',
        },
        gradients: {
          primary: 'var(--gradient-primary)',
          hero: 'var(--gradient-hero)',
          card: 'var(--gradient-card)',
          accent: 'var(--gradient-accent)',
        },
      },
      borderRadius: {
        none: '0',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        h1: ['1.75rem', { lineHeight: '1.5rem' }],
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        18: '72px',
      },
      maxWidth: {
        content: '1440px',
      },
      boxShadow: {
        card: '0 4px 12px rgb(0 0 0 / 0.15)',
        thin: '0 1px 2px rgb(0 0 0 / 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};

