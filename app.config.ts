import { ExpoConfig, ConfigContext } from 'expo/config';

// Load environment variables
import 'dotenv/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  // Get the app variant from environment variable
  const appVariant = process.env.EXPO_PUBLIC_APP_VARIANT || 'development';

  return {
    ...config,
    name: appVariant === 'production' ? 'Your App Name' : `Your App Name (${appVariant})`,
    slug: 'your-app-slug',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.yourcompany.yourapp'
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.yourcompany.yourapp'
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      // Environment variables
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      // Add any other environment variables here
      eas: {
        projectId: process.env.EAS_PROJECT_ID
      }
    },
    plugins: [
      // Add any required Expo plugins here
    ]
  };
}; 