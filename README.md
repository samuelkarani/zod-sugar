# zod-sugar

Creates a zod schema from a javascript value. Basically zod in reverse or zod backwards.

Built with Typescript for Node.js or the Browser.

<!-- const object = {
   foo: "bar",
   bar: 1,
   baz: [1, 2, 3],
   qux: { foo: "bar" },
}
const schema = createZod(object);
// schema is a ZodObject
const result = schema.safeParse(object);
// result.success === true -->

```
import { createZod } from "zod-sugar";

const object = { foo: "bar", baz: 1 };
const schema = createZod(object);
// z.object({ foo: z.string(), bar: z.number() });
schema.safeParse(object).success // true

```

### Installing

```
npm install zod-sugar
```

```
yarn add zod-sugar
```

```
pnpm install zod-sugar
```

### Examples

```
createZod(null) // ZodNull

createZod(undefined) // ZodUndefined

createZod(1) // ZodNumber

createZod("foo") // ZodString

createZod(false) // ZodBoolean

createZod(Symbol("foo")) // ZodSymbol

createZod(BigInt(1)) // ZodBigInt

createZod([1, 2, 3]) // ZodArray

createZod({ foo: "bar", baz: 1 }) // ZodObject

createZod({
   string: "bar",
   number: 1,
   array: [1, 2, 3],
   bigint: BigInt(9007199254740991),
   object: {
      number: 0,
      boolean: false,
      object: {
         string: "bar",
         null: null,
         [Symbol("foo")]: "bar",
      },
      array: ["1", "2", "3"],
   },
   undefined: undefined,
}) // ZodObject
```

<!-- Works with Zod v4 💪 -->

### Caveats:

1. While Zod itself attempts to mirror Typescript 1-1, this library only handles common Javascript values:

- null
- undefined
- boolean
- number
- bigint
- string
- symbol
- array
- object

Support for more values coming soon:

- date
- set
- map

2. The schema returned is the most generic possible for obvious reasons - we can't infer beyond the values provided.

### Additional details

Medium article: https://medium.com/@samiezkay/8d70198ffc72

Buy me a coffee ☕ https://buymeacoffee.com/samuelkarani

My Twitter: https://x.com/samuel_karani
