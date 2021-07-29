/*
 * File: jest.config.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 5th 2021, 11:28:00 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday July 21st 2021 8:02:27 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * Mock timezone set to GMT in Test environment
 */
process.env.TZ = 'GMT';

/**
 * https://jestjs.io/docs/en/configuration.html
 */
module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/components/**/?(*.)+(snapshot|spec|test).js?(x)',
    '**/rrsUI/**/?(*.)+(snapshot|spec|test).js?(x)',
    '**/redux/**/?(*.)+(spec|test).js?(x)',
    '**/services/**/?(*.)+(spec|test).js?(x)',
    '**/utils/**/?(*.)+(spec|test).js?(x)',
    '**/hooks/**/?(*.)+(spec|test).js?(x)',
  ],

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '**/rrsUI/**/!(*.stories)*.js?(x)',
    '**/components/**/*.js?(x)',
    '**/redux/**/*.js?(x)',
    '**/services/**/*.js?(x)',
    '**/utils/**/*.js?(x)',
    '**/hooks/**/*.js?(x)',
  ],

  // Paths to ignore coverage
  coveragePathIgnorePatterns: ['redux/actionTypes'],

  // Coverage threshold limit
  coverageThreshold: {
    global: {
      branches: 39,
      functions: 38,
      lines: 47,
      statements: 45,
    },
  },

  // A map from regular expressions to module names that allow to stub out resources,
  // - like images or styles with a single module.
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/jest/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/jest/styleMock.js',

    '@Mocks/(.*)': '<rootDir>/src/__mocks__/$1',
    '@Assets/(.*)': '<rootDir>/src/assets/$1',
    '@RRS-UI/(.*)': '<rootDir>/src/rrsUI/$1',
    '@Configs/(.*)': '<rootDir>/src/configs/$1',
    '@Hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@Libs/(.*)': '<rootDir>/src/libs/$1',
    '@Components/(.*)': '<rootDir>/src/components/$1',
    '@Redux/(.*)': '<rootDir>/src/redux/$1',
    '@Services/(.*)': '<rootDir>/src/services/$1',
    '@Utils/(.*)': '<rootDir>/src/utils/$1',
    '@App/(.*)': '<rootDir>/src/app/$1',
  },

  automock: false,
};
