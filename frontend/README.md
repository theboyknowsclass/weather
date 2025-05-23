# Weather Forecast Application

A modern weather forecast application built with Next.js, TypeScript, and GraphQL. The application provides detailed weather forecasts with activity recommendations based on weather conditions.

## Features

- 7-day weather forecast with detailed metrics
- Activity recommendations based on weather conditions
- Activity score summary across the forecast period

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager
- Backend server running (see backend README for setup)

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4000/graphql
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

- `/src/components` - React components organized by type (atoms, molecules, organisms, pages)
- `/src/types` - TypeScript type definitions
- `/src/utils` - Utility functions and helpers
- `/src/services` - API and GraphQL related code
- `/src/store` - State management using Zustand

## Technologies Used

- Next.js
- React
- TypeScript
- Apollo Client for GraphQL
- Zustand for state management
- CSS Modules for styling

## Development

The application uses a component-based architecture with the following structure:
- Atoms: Basic UI components
- Molecules: Composite components
- Organisms: Complex components
- Pages: Top-level components

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
