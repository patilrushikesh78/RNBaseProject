module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // Reanimated plugin (should be first)
    ['module:react-native-dotenv'],   // Dotenv plugin
  ],
};
