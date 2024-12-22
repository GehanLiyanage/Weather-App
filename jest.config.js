module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // Use babel-jest for JavaScript and TypeScript files
  },
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)", // Allow Jest to process ES module syntax in Axios
  ],
};
