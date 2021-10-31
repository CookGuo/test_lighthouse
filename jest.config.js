module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // 对如下规则的文件代码使用对应的编译器编译成可以执行单元测试的代码，一般是编译成可执行的js代码
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },

  // 别名，类似webpack的alis
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // 编译器忽视如下文件
  transformIgnorePatterns: ['/node_modules/'],

  testMatch: ['**/test/**/*.(spec|test).[jt]s?(x)', '**/__test__/**/*.(spec|test).[jt]s?(x)'],

  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverage: true,
  // coverageReporters: ['html', 'text-summary'],
  collectCoverageFrom: [
    'src/views/**/*.{ts,tsx}',  // src下所有ts/tsx文件
    '!**/node_modules/**'
  ],
}
