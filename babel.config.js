module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      'inline-dotenv',
      'transform-inline-environment-variables',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json',
            '.svg',
            '.png',
          ],
          alias: {
            '@components': './src/components',
            '@config': './src/config',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@utils': './src/utils',
            '@errors': './src/errors',
            '@services': './src/services',
            '@dtos': './src/dtos',
          },
        },
      ],
    ]
  };
};
