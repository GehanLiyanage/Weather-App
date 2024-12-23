module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional for custom Jest setups
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy', // Mock CSS imports
  },
  collectCoverage: true, // Optional: Enable code coverage
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'], // Adjust per project
};
