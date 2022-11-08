import 'dotenv/config';

export default {
  name: 'hopes',
  displayName: 'Hopes',
  expo: {
    name: 'hopes',
    slug: 'hopes',
    version: '3.0.0',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      backgroundColor: '#F0F0F5',
    },
    ios: {
      bundleIdentifier: 'com.hopes.app.br',
      buildNumber: '1.0.0',
    },
    android: {
      versionCode: 3,
    },
    assetBundlePatterns: ['**/*'],
    plugins: [
      [
        'expo-notifications',
        {
          icon: './notification-icon.png',
          color: '#DEE8FF',
        },
      ],
    ],
    extra: {
      API_URL: 'https://api.hopes.app.br',
    },
  },
};
