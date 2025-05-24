# Weather Project

## Outline:

>Objective
Build a well-structured, scalable, and maintainable web application that accepts a city or town and returns a ranking of how desirable it will be to visit for various activities over the next 7 days, based on weather data.
>
>Activities to Rank
Skiing
Surfing
Outdoor sightseeing
Indoor sightseeing
Open-Meteo provides all the api's required to complete this test.

## Assumptions

- I assume that the coding exercise is fully formulated.  In a real life situations i would sit with the business to clarify the following:
    
   1. What specific weather conditions are optimal for each of the activities? 
   2. Are the activities fixed, or do they intend to extend this in future?
   3. Do they want a ranking per day?  or an average rating over the 7 days?

   In the absence of this:
   1. I used Cursor AI (unsure which agent) to pick some parameters for each activity that seemed sensible
   2. I built it in an extensible way with rulesets that could be added to
   3. I provide both in the UI

- I assumed GraphQL was a requirement.  It is not a technology I have a great deal of knowledge on as a provider (much more as a consumer), so I used AI and some tutorials to help create the code, and checked and seperated, but i would not be able to answer deep questions if say, the syntax is not optimal.  Happy to learn more in this area, so feedback on the code on what is best practice is very welcome!

## Omissions

There are very many omissions in this implementation

**1. API Rate Limiting and Caching**
- Concern: The application makes direct calls to Open-Meteo API without any rate limiting or caching mechanism.
- Mitigation:
   - Implement Redis or a similar in-memory cache to store weather forecasts for frequently requested locations
   - Cache weather data with appropriate TTL (Time To Live) based on forecast update frequency
   - Add rate limiting middleware to prevent API abuse (such as graphql-rate-limit or express-rate-limit)
   - Consider implementing a circuit breaker pattern for external API calls

**2. Backend Performance**
- Concern: GraphQL calls are synchronous without optimization.
- Qualifier: this is not my field of expertise, but i built this to really be stateless that could be turned into a stateless function for imo maximal horizontal scalability.
- Mitigation (from AI):
   - Implement DataLoader pattern for batching and caching
   - Implement performance monitoring and logging

**3. Horizonal Scaling**
- Concern: The current architecture doesn't support horizontal scaling
- Qualifier - Ideally i'd build this to use stateless functions (AWS Lambda, Azure Functions, Google Cloud) - currently i'd do this via something like SST but didn't want to pick a specific technology, so wrote the code in a way that could be easily ported (obv this is a simplistic example)
- Mitigation:
   - for other methods we can have containerization (docker etc), and load balancing (nginx etc)
   - also as stated earlier performance monitoring and logging are absent
   - could even split each call as it's own service.

**4.	Security and API Protection**
- Concern: The API endpoints are currently unprotected.
- Mitigation:
   - Implement proper authentication and authorization
   - Add API key management
   
**5. Error Handling and Resilience**
- Concern: Basic error handling is in place but could be more robust.
- Mitigation:
   - Implement comprehensive error handling
   - Add retry mechanisms for failed API calls
   - Implement proper logging and monitoring
   - Add fallback mechanisms for when external services are unavailable

**6. Maintainability**
- Concern: Activity Scoring is in the frontend code
- Mitigation:
   - Could be moved to a backend service / db, where this can be updated without need for a redeployment

**7.	Monitoring and Observability**
- Concern: Limited monitoring and observability in the current implementation.
- Mitigation:
   - Implement proper logging
   - Add performance monitoring
   - Implement tracing for API calls
   - Add error tracking and reporting

**8. Configuration Management**
- Concern: Environment variables and configuration are basic.
- Mitigation:
   - Implement proper configuration management
   - Add feature flags
   - Implement A/B testing capabilities
   - Add proper secrets management

**9. Basic UI / UX**
- Concern: The UI was very basic
- Mitigation:
   - Implement fully styled and themed controls
   - Ensure Application is fully keyboard accessible
   - Add Responsive-layout for different device sizes
   - Add accessibility labels for screen readers
   - Add Storybook for easier management of UI units

**10. Quality**
- Concern: What safeguards are in place for code quality
- Mitigation: 
   - CI/CD and PR pipeline to include automated checks on package audit, type checks and linting / formatting consistency
   - Unit tests to be created - especially for key logic like scoring rules.
   - Integration tests using react testing library for components.
   - Contract tests using pact or similar
   - End to End tests using webdriver or similar


## Architectural Overview

### System Architecture

1. **Frontend (Next.js Application)**
   - Built with Next.js, React, and TypeScript - Next was chosen to quickly have a blank project with a bundled router, no other reason
   - Uses a component-based architecture following Atomic Design principles: (not my favourite, but does the job and seems to be fairly common)
     - Atoms: Basic UI components
     - Molecules: Composite components
     - Organisms: Complex components
     - Pages: Top-level components
   - State Management: Uses Zustand for state management (less boilerplate than say redux, but still some good debug tools if needed)
   - Styling: CSS Modules for component-specific styles (simplest choice)
   - GraphQL Client: Apollo Client for data fetching 

2. **Backend (Node.js + TypeScript)**
   - Built with Node.js and TypeScript
   - GraphQL API using Apollo Server v4
   - Key Services:
     - `locationService.ts`: Handles geocoding/location search
     - `forecastService.ts`: Handles weather forecast retrieval
   - Uses Zod for runtime validation
   - Integrates with Open-Meteo APIs for weather data


### Project Structure - AI Generated and modified

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

   