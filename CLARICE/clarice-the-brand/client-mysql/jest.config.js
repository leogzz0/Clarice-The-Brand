module.exports = {
  setupFileAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns : ['/node_modules/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '^.+\\.module\\.(css|sass|scss)$',
    '/node_modules/(?!axios).+\\.js$'
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
};