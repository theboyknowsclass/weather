# Weather Project

## Outline:

Objective
Build a well-structured, scalable, and maintainable web application that accepts a city or town and returns a ranking of how desirable it will be to visit for various activities over the next 7 days, based on weather data.

Activities to Rank
Skiing
Surfing
Outdoor sightseeing
Indoor sightseeing
Open-Meteo provides all the api's required to complete this test.

## Architectural Overview

### System Architecture

1. **Frontend (Next.js Application)**
   - Built with Next.js, React, and TypeScript
   - Uses a component-based architecture following Atomic Design principles:
     - Atoms: Basic UI components
     - Molecules: Composite components
     - Organisms: Complex components
     - Pages: Top-level components
   - State Management: Uses Zustand for state management
   - Styling: CSS Modules for component-specific styles
   - GraphQL Client: Apollo Client for data fetching

2. **Backend (Node.js + TypeScript)**
   - Built with Node.js and TypeScript
   - GraphQL API using Apollo Server v4
   - Key Services:
     - `locationService.ts`: Handles geocoding/location search
     - `forecastService.ts`: Handles weather forecast retrieval
   - Uses Zod for runtime validation
   - Integrates with Open-Meteo APIs for weather data


### Project Structure

**Frontend Structure:**
```
frontend/
├── src/
│   ├── components/     # React components (atoms, molecules, organisms, pages)
│   ├── types/         # TypeScript type definitions
│   ├── utils/         # Utility functions
│   ├── services/      # API and GraphQL related code
│   ├── store/         # State management
│   └── styles/        # Global styles and CSS modules
```

**Backend Structure:**
```
backend/
├── src/
│   ├── services/      # Business logic services
│   ├── resolvers/     # GraphQL resolvers
│   ├── schema/        # GraphQL schema definitions
│   └── index.ts       # Server entry point
```

### Technical Stack

1. **Frontend Technologies:**
   - Next.js 
   - React 
   - TypeScript
   - Apollo Client
   - Zustand
   - CSS Modules

2. **Backend Technologies:**
   - Node.js
   - TypeScript
   - Apollo Server v4
   - Zod

3. **External APIs:**
   - Open-Meteo API for weather data
   - Open-Meteo Geocoding API for location search

   