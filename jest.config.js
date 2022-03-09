const { resolve } = require('path')
const CI = !!process.env.CI

const ROOT_DIR = __dirname
const TSCONFIG = resolve(ROOT_DIR, 'tsconfig.json')
const tsconfig = require(TSCONFIG)

module.exports = {
  testEnvironment: 'node',
  rootDir: ROOT_DIR,
  restoreMocks: true,
  reporters: ['default'],
  modulePathIgnorePatterns: ['dist'],
  moduleNameMapper: {},
  collectCoverage: true,
  cacheDirectory: resolve(ROOT_DIR, `${CI ? '' : 'node_modules/'}.cache/jest`),
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
}
