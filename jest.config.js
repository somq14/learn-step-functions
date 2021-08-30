// eslint-disable-next-line no-undef
module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}"],
};
