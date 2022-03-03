![This is an image](./assets/heading.svg)

<p align="center">⭐ Master your input data like a pro! ⭐</p>

<p align="center">
  ✔️ Node.js & browser ✔️ Only 1kb! ✔️ Fully typed ✔️ No dependencies  
</p>

<p align="center">
  <img src="https://img.shields.io/bundlephobia/min/primitive-parser" />
  <img src="https://img.shields.io/github/license/horatiuvlad/primitive-parser" />
  <img src="https://img.shields.io/npm/v/primitive-parser?color=green&label=version" />
</p>

<p align="center">
  <img src="https://github.com/horatiuvlad/primitive-parser/actions/workflows/test.yml/badge.svg" />
  <img src="https://github.com/horatiuvlad/primitive-parser/actions/workflows/publish.yml/badge.svg" />
  <img src="https://img.shields.io/codecov/c/github/horatiuvlad/primitive-parser" />
</p>

<br />

**Simple helper library which allows you to ensure the integrity and type safety of your app's input data.**

It works by exposing a number of functions which check wether an unknown value is either a `string`, `boolean`, `float`, `integer` or `object`. You can also turn `string`s into `number`s or `boolean`s.

## :rocket: Getting started

### npm

    $ npm i primitive-parser

### yarn

    $ yarn add primitive-parser

## :bulb: Examples

### 🕵 Make sure nasty user inputs do not reach your app.

```ts
// ...

import express from 'express'
import { getPositiveInteger } from 'primitive-parser'

// ...

app.get('/:user/:id', function (req, res) {
  const id = getPositiveInteger(req.params.id)
  if (!id) {
    return res.status(400)
  }

  // At this point, "id" is infered as "number".
  showUser(req, res, id)
})

// ...
```

### 🧛 Unsure about external events? No more.

```tsx
import { getObject, getString } from 'primitive-parser'
import { useState } from 'react'
import SketchyInput from 'unknown-source'

const SafeInput = () => {
  const [value, setValue] = useState<string>('')

  const onValueChange = (sketchyEvent: any) => {
    const safeValue = getString(getObject(sketchyEvent)?.value)

    // Important over "!safeValue" since the latter returns "false" on valid empty strings.
    if (safeValue !== undefined) {
      // "safeValue" is inferred as "string" inside this block scope.
      setValue(safeValue)
    } else {
      // Error handling
    }
  }

  return <SketchyInput onValueChange={onValueChange} value={value} />
}
```

## :beer: Full helper list

Check out the [tests file](./test/index.test.ts) for a full behavioural overview.

## String

```ts
const getString = (value: unknown): string | undefined
```

```ts
getString('foo') // "foo"
getObject({ foo: 'bar' }) // undefined
```

## Boolean

```ts
const getBoolean = (value: unknown): boolean | undefined
```

```ts
getBoolean('true') // undefined
getBoolean(true) // true
```

## Boolean from String

```ts
const getBooleanFromString = (value: unknown): boolean | undefined
```

```ts
getBoolean('true') // true
getBoolean(true) // undefined
```

## Float

```ts
const getFloat = (value: unknown): number | undefined
```

```ts
getFloat('12.34') // undefined
getFloat(12.34) // 12.34
```

## Float from String

```ts
const getFloatFromString = (value: unknown): number | undefined
```

```ts
getFloat('12.34') // 12.34
getFloat(Infinity) // undefined
getFloat(12.34) // undefined
```

## Integer

```ts
const getInteger = (value: unknown): number | undefined
```

```ts
getInteger('1234') // undefined
getInteger(12.34) // undefined
getFloat(1234) // 1234
```

## Integer from string

```ts
const getIntegerFromString = (value: unknown): number | undefined
```

```ts
getIntegerFromString('1234') // 1234
getIntegerFromString(1234)) // undefined
getIntegerFromString(12.34) // undefined
```

## Positive Integer

```ts
const getPositiveInteger = (value: unknown): number | undefined
```

```ts
getPositiveInteger('1') // undefined
getPositiveInteger(0) // undefined
getPositiveInteger(-1) // undefined
getPositiveInteger(1) // 1
```

## Positive Integer from String

```ts
const getPositiveInteger = (value: unknown): number | undefined
```

```ts
getPositiveInteger('1') // undefined
getPositiveInteger(1) // 1
getPositiveInteger(-1) // undefined
```

## Object (general)

```ts
const getObject = (value: unknown): object | undefined
```

```ts
getObject('foo')) // undefined
getObject({ foo: 'bar' }) // { foo: "bar" }
```
