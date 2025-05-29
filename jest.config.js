module.exports = {
    testEnvironment: 'node',
    reporters: [
      'default',
      ['jest-junit', {
        outputDirectory: 'reports',
        outputName: 'junit.xml',
      }],
      ['jest-qase-reporter', {
        apiToken: process.env.QASE_API_TOKEN,
        projectCode: process.env.QASE_PROJECT_CODE,
        runId: process.env.QASE_RUN_ID,
      }],
    ],
  };