import {
  getObject,
  getInteger,
  getFloat,
  getString,
  getBoolean,
  getBooleanFromString,
  getFloatFromString,
  getIntegerFromString,
  getPositiveInteger,
  getPositiveIntegerFromString,
} from '../src/index'

// Object
describe('object against', () => {
  test('object', () => {
    const input = {}
    expect(getObject(input)).toBe(input)
  })

  test('string', () => {
    expect(getObject('x')).toBe(undefined)
  })

  test('boolean - true', () => {
    expect(getObject(true)).toBe(undefined)
  })

  test('boolean - false', () => {
    expect(getObject(false)).toBe(undefined)
  })

  test('number', () => {
    expect(getObject(1)).toBe(undefined)
  })

  test('null', () => {
    expect(getObject(null)).toBe(undefined)
  })

  test('array', () => {
    expect(getObject([])).toBe(undefined)
  })
})

// String
describe('string against', () => {
  test('empty string', () => {
    expect(getString('')).toBe('')
  })

  test('string', () => {
    expect(getString('x')).toBe('x')
  })

  test('boolean - true', () => {
    expect(getString(true)).toBe(undefined)
  })

  test('boolean - false', () => {
    expect(getString(false)).toBe(undefined)
  })

  test('number', () => {
    expect(getString(1)).toBe(undefined)
  })

  test('null', () => {
    expect(getString(null)).toBe(undefined)
  })

  test('array', () => {
    expect(getString([])).toBe(undefined)
  })

  test('object', () => {
    expect(getString({})).toBe(undefined)
  })
})

// Boolean
describe('boolean against', () => {
  test('boolean - true', () => {
    expect(getBoolean(true)).toBe(true)
  })

  test('boolean - false', () => {
    expect(getBoolean(false)).toBe(false)
  })

  test('empty string', () => {
    expect(getBoolean('')).toBe(undefined)
  })

  test('string - random', () => {
    expect(getBoolean('x')).toBe(undefined)
  })

  test('string - true', () => {
    expect(getBoolean('true')).toBe(undefined)
  })

  test('string - false', () => {
    expect(getBoolean('false')).toBe(undefined)
  })

  test('null', () => {
    expect(getBoolean(null)).toBe(undefined)
  })

  test('array', () => {
    expect(getBoolean([])).toBe(undefined)
  })

  test('object', () => {
    expect(getBoolean({})).toBe(undefined)
  })

  test('integer', () => {
    expect(getBoolean(123)).toBe(undefined)
  })

  test('float', () => {
    expect(getBoolean(1.23456)).toBe(undefined)
  })

  test('NaN', () => {
    expect(getBoolean(NaN)).toBe(undefined)
  })

  test('Infinity', () => {
    expect(getBoolean(Infinity)).toBe(undefined)
  })
})

// Boolean from String
describe('boolean from string against', () => {
  test('string - true', () => {
    expect(getBooleanFromString('true')).toBe(true)
  })

  test('string - false', () => {
    expect(getBooleanFromString('false')).toBe(false)
  })

  test('empty string', () => {
    expect(getBooleanFromString('')).toBe(undefined)
  })

  test('string - random', () => {
    expect(getBooleanFromString('x')).toBe(undefined)
  })

  test('boolean - true', () => {
    expect(getBooleanFromString(true)).toBe(undefined)
  })

  test('boolean - false', () => {
    expect(getBooleanFromString(false)).toBe(undefined)
  })

  test('string - true - spaced', () => {
    expect(getBooleanFromString('  true    ')).toBe(undefined)
  })

  test('string - false - spaced', () => {
    expect(getBooleanFromString('  false    ')).toBe(undefined)
  })

  test('null', () => {
    expect(getBooleanFromString(null)).toBe(undefined)
  })

  test('array', () => {
    expect(getBooleanFromString([])).toBe(undefined)
  })

  test('object', () => {
    expect(getBooleanFromString({})).toBe(undefined)
  })

  test('integer', () => {
    expect(getBooleanFromString(123)).toBe(undefined)
  })

  test('float', () => {
    expect(getBooleanFromString(1.23456)).toBe(undefined)
  })

  test('NaN', () => {
    expect(getBooleanFromString(NaN)).toBe(undefined)
  })

  test('Infinity', () => {
    expect(getBooleanFromString(Infinity)).toBe(undefined)
  })
})

// Float
describe('float against', () => {
  test('integer', () => {
    expect(getFloat(123)).toBe(123)
  })

  test('float', () => {
    expect(getFloat(1.23456)).toBe(1.23456)
  })

  test('string - random', () => {
    expect(getFloat('x')).toBe(undefined)
  })

  test('string - float', () => {
    expect(getFloat('1.234')).toBe(undefined)
  })

  test('string - integer', () => {
    expect(getFloat('1234')).toBe(undefined)
  })

  test('null', () => {
    expect(getFloat(null)).toBe(undefined)
  })

  test('array', () => {
    expect(getFloat([])).toBe(undefined)
  })

  test('object', () => {
    expect(getFloat({})).toBe(undefined)
  })

  test('NaN', () => {
    expect(getFloat(NaN)).toBe(undefined)
  })

  test('Infinity', () => {
    expect(getFloat(Infinity)).toBe(undefined)
  })
})

// Float from String
describe('float from string against', () => {
  test('string - float', () => {
    expect(getFloatFromString('1.234')).toBe(1.234)
  })

  test('string - integer', () => {
    expect(getFloatFromString('1234')).toBe(1234)
  })

  test('string', () => {
    expect(getFloatFromString('x')).toBe(undefined)
  })

  test('null', () => {
    expect(getFloatFromString(null)).toBe(undefined)
  })

  test('array', () => {
    expect(getFloatFromString([])).toBe(undefined)
  })

  test('object', () => {
    expect(getFloatFromString({})).toBe(undefined)
  })

  test('integer', () => {
    expect(getFloatFromString(123)).toBe(undefined)
  })

  test('float', () => {
    expect(getFloatFromString(1.23456)).toBe(undefined)
  })

  test('NaN', () => {
    expect(getFloatFromString(NaN)).toBe(undefined)
  })

  test('Infinity', () => {
    expect(getFloatFromString(Infinity)).toBe(undefined)
  })
})

// Integer
describe('integer against', () => {
  test('string', () => {
    expect(getInteger('x')).toBe(undefined)
  })

  test('null', () => {
    expect(getInteger(null)).toBe(undefined)
  })

  test('array', () => {
    expect(getInteger([])).toBe(undefined)
  })

  test('object', () => {
    expect(getInteger({})).toBe(undefined)
  })

  test('integer', () => {
    expect(getInteger(123)).toBe(123)
  })

  test('float', () => {
    expect(getInteger(1.23456)).toBe(undefined)
  })

  test('NaN', () => {
    expect(getInteger(NaN)).toBe(undefined)
  })

  test('Infinity', () => {
    expect(getInteger(Infinity)).toBe(undefined)
  })
})

// Integer from String
describe('integer from string against', () => {
  test('string - integer', () => {
    expect(getIntegerFromString('1234')).toBe(1234)
  })

  test('string', () => {
    expect(getIntegerFromString('x')).toBe(undefined)
  })

  test('string - float', () => {
    expect(getIntegerFromString('1.234')).toBe(undefined)
  })

  test('null', () => {
    expect(getIntegerFromString(null)).toBe(undefined)
  })

  test('array', () => {
    expect(getIntegerFromString([])).toBe(undefined)
  })

  test('object', () => {
    expect(getIntegerFromString({})).toBe(undefined)
  })

  test('integer', () => {
    expect(getIntegerFromString(123)).toBe(undefined)
  })

  test('float', () => {
    expect(getIntegerFromString(1.23456)).toBe(undefined)
  })

  test('NaN', () => {
    expect(getIntegerFromString(NaN)).toBe(undefined)
  })

  test('Infinity', () => {
    expect(getIntegerFromString(Infinity)).toBe(undefined)
  })
})

// Positive Integer
describe('positive integer against', () => {
  test('positive integer', () => {
    expect(getPositiveInteger(123)).toBe(123)
  })

  test('string', () => {
    expect(getPositiveInteger('x')).toBe(undefined)
  })

  test('string - positive integer', () => {
    expect(getPositiveInteger('1234')).toBe(undefined)
  })

  test('string - negative integer', () => {
    expect(getPositiveInteger('-1234')).toBe(undefined)
  })

  test('null', () => {
    expect(getPositiveInteger(null)).toBe(undefined)
  })

  test('array', () => {
    expect(getPositiveInteger([])).toBe(undefined)
  })

  test('object', () => {
    expect(getPositiveInteger({})).toBe(undefined)
  })

  test('negative integer', () => {
    expect(getPositiveInteger(-123)).toBe(undefined)
  })

  test('float', () => {
    expect(getPositiveInteger(1.23456)).toBe(undefined)
  })

  test('NaN', () => {
    expect(getPositiveInteger(NaN)).toBe(undefined)
  })

  test('Infinity', () => {
    expect(getPositiveInteger(Infinity)).toBe(undefined)
  })
})

// Positive Integer from String
describe('positive integer from string against', () => {
  test('string - positive integer', () => {
    expect(getPositiveIntegerFromString('1234')).toBe(1234)
  })

  test('string', () => {
    expect(getPositiveIntegerFromString('x')).toBe(undefined)
  })

  test('string - float', () => {
    expect(getPositiveIntegerFromString('1.234')).toBe(undefined)
  })

  test('string - negative integer', () => {
    expect(getPositiveIntegerFromString('-1234')).toBe(undefined)
  })

  test('null', () => {
    expect(getPositiveIntegerFromString(null)).toBe(undefined)
  })

  test('array', () => {
    expect(getPositiveIntegerFromString([])).toBe(undefined)
  })

  test('object', () => {
    expect(getPositiveIntegerFromString({})).toBe(undefined)
  })

  test('positive integer', () => {
    expect(getPositiveIntegerFromString(123)).toBe(undefined)
  })

  test('negative integer', () => {
    expect(getPositiveIntegerFromString(-123)).toBe(undefined)
  })

  test('float', () => {
    expect(getPositiveIntegerFromString(1.23456)).toBe(undefined)
  })

  test('NaN', () => {
    expect(getPositiveIntegerFromString(NaN)).toBe(undefined)
  })

  test('Infinity', () => {
    expect(getPositiveIntegerFromString(Infinity)).toBe(undefined)
  })
})
