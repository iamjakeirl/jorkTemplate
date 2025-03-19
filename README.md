# React Native Template with Development Stack

A modern React Native template using Expo's app router, featuring a complete development stack for building production-ready mobile applications. I reccomend a .cursorrules and some mcp setup if you use this with cursor. 

## Key Features

- 🚀 **Navigation**: Expo Router for file-based routing
- 🔐 **Authentication**: Supabase with Expo Secure Store for secure authentication
- 📝 **Form Management**: React Hook Form for easy form handling
- 📦 **State Management**: Zustand for global state and TanStack Query for server state
- 🎨 **UI Components**: React Native Paper with Vector Icons for a rich UI experience
- 🧪 **Testing**: Jest and React Testing Library for unit tests, Detox for E2E testing
- 🚀 **Build/Deployment**: EAS (Expo Application Services) for streamlined builds and deployment
- 🐛 **Error Monitoring**: Sentry integration for error tracking
- 🌍 **Internationalization**: i18next with Expo Localization for multi-language support
- 📱 **Push Notifications**: Expo Notifications for handling push notifications

## Project Structure

```
src/
├── components/     # Reusable UI components
├── config/         # Configuration files (Supabase, Sentry, etc.)
├── constants/      # App-wide constants
├── hooks/          # Custom React hooks
├── i18n/           # Internationalization files
├── navigation/     # Navigation configuration
├── screens/        # Screen components
├── services/       # API and external service integrations
├── stores/         # Zustand stores
├── theme/          # Theme configuration
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SENTRY_DSN=your_sentry_dsn
```

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Configure services:
   - Create a Supabase project and add credentials to `.env`
   - Set up Sentry project and add DSN to `.env`
   - Configure EAS for builds and deployment
4. Start the development server: `npm start`

## Available Scripts

- `npm start` - Start the Expo development server
- `npm test` - Run Jest tests
- `npm run android` - Start the Android emulator
- `npm run ios` - Start the iOS simulator
- `npm run web` - Start the web version of the app
- `npm run lint` - Lint the codebase
- `npm run format` - Format the codebase using Prettier
- `npm run format:check` - Check the code formatting
- `npm run lint-format` - Run both linting and formatting

## Learn More

To learn more about the tools and libraries used in this template:

- [Expo Documentation](https://docs.expo.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [TanStack Query Documentation](https://tanstack.com/query)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Native Paper Documentation](https://callstack.github.io/react-native-paper/)
- [Detox Documentation](https://wix.github.io/Detox/)
- [Sentry React Native Documentation](https://docs.sentry.io/platforms/react-native/)
- [i18next Documentation](https://www.i18next.com/)

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## MCP Servers

This project typically requires the following MCP servers:

- **Perplexity**: For advanced search capabilities.
- **Brave Search**: For general search and information gathering.
- **Supabase (Alexander Zuev)**: For database operations and management.
- **Sequential Thinking**: For debugging, troubleshooting, and complex problem-solving.

Additionally, the project includes the **Magic MCP** for React components, although it is not strictly necessary.

