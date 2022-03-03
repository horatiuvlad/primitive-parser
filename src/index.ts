/*
 * Takes any value as input and returns it casted as `object`, if possible.
 *
 * @param value any value.
 * @returns the given value casted as object, if possible.
 */
export const getObject = (value: unknown): object | undefined =>
  typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value
    : undefined

/*
 * Takes any value as input and returns it casted as `string`, if possible.
 *
 * @param value any value.
 * @returns the given value casted as string, if possible.
 */
export const getString = (value: unknown): string | undefined =>
  typeof value === 'string' ? value : undefined

/*
 * Takes any value as input and returns it casted as `boolean`, if possible.
 *
 * @param value any value.
 * @returns the given value casted as boolean, if possible.
 */
export const getBoolean = (value: unknown): boolean | undefined =>
  typeof value === 'boolean' ? value : undefined

/*
 * Expects a `string` as input and returns it casted as `boolean`, if possible.
 *
 * @param value any value.
 * @returns the given value casted as boolean, if possible.
 */
export const getBooleanFromString = (value: unknown): boolean | undefined => {
  const stringValue = getString(value)?.toLowerCase()
  if (stringValue === 'true') {
    return true
  }
  if (stringValue === 'false') {
    return false
  }
}

/*
 * Takes any value as input and returns it casted as `number`, if float or integer.
 *
 * @param value any value.
 * @returns the given value casted as `number`, if float or integer.
 */
export const getFloat = (value: unknown): number | undefined =>
  typeof value === 'number' && !isNaN(value) && Number.isFinite(value)
    ? value
    : undefined

/*
 * Expects a `string` as input and returns it casted as `number`, if float or integer.
 *
 * @param value any value.
 * @returns the given value casted as `number`, if float or integer.
 */
export const getFloatFromString = (value: unknown): number | undefined =>
  getFloat(parseFloat(getString(value) ?? ''))

/*
 * Takes any value as input and returns it casted as `number`, if integer.
 *
 * @param value any value.
 * @returns the given value casted as `number`, if integer.
 */
export const getInteger = (value: unknown): number | undefined => {
  const parsedNumber = getFloat(value)
  return parsedNumber !== undefined && Number.isInteger(parsedNumber)
    ? parsedNumber
    : undefined
}

/*
 * Expects a `string` as input and returns it casted as `number`, if integer.
 *
 * @param value any value.
 * @returns the given value casted as number, if integer.
 */
export const getIntegerFromString = (value: unknown): number | undefined =>
  getInteger(getFloatFromString(value))

/*
 * Takes any value as input and returns it casted as `number`, if positive integer.
 *
 * @param value any value.
 * @returns the given value casted as `number`, if positive integer.
 */
export const getPositiveInteger = (value: unknown): number | undefined => {
  const parsedNumber = getInteger(value)
  return parsedNumber !== undefined && parsedNumber > 0
    ? parsedNumber
    : undefined
}

/*
 * Expects a `string` as input and returns it casted as `number`, if positive integer.
 *
 * @param value any value.
 * @returns the given value casted as number, if positive integer.
 */
export const getPositiveIntegerFromString = (
  value: unknown
): number | undefined => getPositiveInteger(getIntegerFromString(value))
