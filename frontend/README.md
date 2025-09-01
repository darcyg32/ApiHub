# Frontend - React + TypeScript + Tailwind CSS

This is a modern React application built with TypeScript and Tailwind CSS, following best practices and modern development standards.

## Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting

## Features

- ✅ **TypeScript** - Full type safety with strict configuration
- ✅ **Tailwind CSS** - Utility-first styling with custom animations
- ✅ **Dark Mode** - Automatic dark mode support
- ✅ **Modern React** - Using latest React features and patterns
- ✅ **ESLint** - Comprehensive linting rules
- ✅ **Vite** - Fast development and optimized builds
- ✅ **Best Practices** - Following React and TypeScript best practices

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable React components
├── hooks/          # Custom React hooks
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
└── index.css       # Global styles with Tailwind
```

## Configuration Files

- `vite.config.ts` - Vite configuration with React and Tailwind plugins
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `postcss.config.js` - PostCSS configuration

## Best Practices

### TypeScript

- Strict type checking enabled
- No implicit any types
- Proper type annotations for all functions
- Interface-first approach for data structures

### React

- Functional components with hooks
- Proper prop typing
- Component composition over inheritance
- Performance optimization with React.memo when needed

### Tailwind CSS

- Utility-first approach
- Custom animations and transitions
- Responsive design patterns
- Dark mode support

### Code Quality

- ESLint with TypeScript and React rules
- Consistent code formatting
- Proper error handling
- Accessibility considerations

## Development

The development server runs on `http://localhost:5173` by default.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The build output is in the `dist/` directory and can be deployed to any static hosting service.

## Contributing

1. Follow TypeScript best practices
2. Use Tailwind CSS for styling
3. Write proper component documentation
4. Ensure all code passes linting
5. Add tests for new features
