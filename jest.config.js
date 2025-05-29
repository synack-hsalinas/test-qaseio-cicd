module.exports = {
    testEnvironment: 'node',
    reporters: [
      'default',
      ['jest-junit', {
        outputDirectory: 'reports',
        outputName: 'junit.xml',
      }],
      ['jest-qase-reporter', {
        apiToken: process.env.QASE_TESTOPS_API_TOKEN,
        projectCode: process.env.QASE_TESTOPS_PROJECT,
        runId: process.env.QASE_TESTOPS_RUN_ID,
        runComplete: true,
        baseUrl: process.env.QASE_API_BASE_URL || 'https://api.qase.io/v1',
        enabled: process.env.QASE_REPORT === 'true',
      }],
    ],
  };