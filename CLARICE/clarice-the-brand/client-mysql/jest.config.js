export const setupFileAfterEnv = ['@testing-library/jest-dom/extend-expect'];
export const testPathIgnorePatterns = ['/node_modules/'];
export const testEnvironment = 'jsdom';
export const transform = {
  '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
};
export const transformIgnorePatterns = [
  '/node_modules/',
  '^.+\\.module\\.(css|sass|scss)$',
];
export const moduleNameMapper = {
  '^react-native$': 'react-native-web',
  '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
};