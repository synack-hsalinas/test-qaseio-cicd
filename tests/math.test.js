const { add, subtract } = require('../src/math');

describe('Math Functions', () => {
  test('should add two numbers correctly', () => {
    // Qase test case ID: 1
    expect(add(2, 3)).toBe(5);
  });

  test('should subtract two numbers correctly', () => {
    // Qase test case ID: 2
    expect(subtract(5, 3)).toBe(2);
  });

  test('should fail on incorrect subtraction', () => {
    // Qase test case ID: 3 (intentionally failing for demonstration)
    expect(subtract(5, 3)).toBe(1); // Will fail
  });
});