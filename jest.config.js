export default {
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/*.test.js',
    '/__tests__/'
  ],
};
