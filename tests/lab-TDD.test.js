//imports

const {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("../lab-TDD-starter");

const { test, describe } = require("node:test");
const assert = require("node:assert");

//suite and tests
//add function testing
describe("Lab-TDD-tests", () => {
  describe("Add function", () => {
    test("Add function should return 8 when adding 5 and 3", () => {
      assert.strictEqual(add(3, 5), 8);
    });
    test("Add function should return 0 when adding -5 and 5 ", () => {
      assert.strictEqual(add(-5, 5), 0);
    });
  });

  //division function testing
  describe("Divide function tests", () => {
    test("Divide function should return 4 when dividing 32 over 8", () => {
      assert.strictEqual(divide(32, 8), 4);
    });
    test("Zero division should throw an error", () => {
      assert.throws(() => divide(10, 0), Error);
    });
  });
});

//subtract function testing
describe("Subtract function tests", () => {
  test("Subtract function should return -4 when subtracting 5 from 1", () => {
    assert.strictEqual(subtract(1, 5), -4);
  });
  test("Subtract function should return 0 when subtracting 5 from 5", () => {
    assert.strictEqual(subtract(5, 5), 0);
  });
});

//multiply function testing
describe("Multiply function tests", () => {
  test("Multiply function should return 15 when multiplying 3 by 5", () => {
    assert.strictEqual(multiply(3, 5), 15);
  });
  test("Multiply function should return 0 when multiplying 0 by 5", () => {
    assert.strictEqual(multiply(0, 5), 0);
  });
});

//modulas function testing
describe("Modulas function tests", () => {
  test("Modulas function should return 1 when modulas 17 by 4", () => {
    assert.strictEqual(modulas(17, 4), 1);
  });
  test("Modulas function should return 0 when modulas 4 by 4", () => {
    assert.strictEqual(modulas(4, 4), 0);
  });
});

//power function testing
describe("Power function tests", () => {
  test("Power function should return 32 when 2 is raised to the power of 5", () => {
    assert.strictEqual(power(2, 5), 32);
  });
  test("Power function should return 1 when 5 is raised to the power of 0", () => {
    assert.strictEqual(power(5, 0), 1);
  });
});

//squareRoot function testing
describe("SquareRoot function tests", () => {
  test("SquareRoot function should return 5 when squareRoot of 25", () => {
    assert.strictEqual(squareRoot(25), 5);
  });
  test("SquareRoot function should throw an error when squareRoot of a negative number", () => {
    assert.throws(() => squareRoot(-25), Error);
  });
});

//floor function testing
describe("Floor function tests", () => {
  test("Floor function should return 15 when flooring 15.3", () => {
    assert.strictEqual(floor(15.3), 15);
  });
  test("Floor function should return -16 when flooring -15.3", () => {
    assert.strictEqual(floor(-15.3), -16);
  });
});

//ceiling function testing
describe("Ceiling function tests", () => {
  test("Ceiling function should return 16 when ceiling 15.3", () => {
    assert.strictEqual(ceiling(15.3), 16);
  });
  test("Ceiling function should return -15 when ceiling -15.3", () => {
    assert.strictEqual(ceiling(-15.3), -15);
  });
});
