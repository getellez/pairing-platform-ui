module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|css)$": "identity-obj-proxy",
    '\\.(css|less)$': '<rootDir>/test/mocks/filemocks.js',
  }
}