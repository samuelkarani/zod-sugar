# zod sugar

Creates a zod schema from a javascript value. Basically zod in reverse or zod backwards.

Built with Typescript for Node.js or the Browser.

### [🎉 Support the project from $5](https://github.com/sponsors/samuelkarani)

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
import createZod from "zod-sugar";

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

## That's it!

Thanks for reading.
I welcome your input, suggestions, feedback. Here is the [medium article](https://medium.com/@samiezkay/zod-sugar-is-just-zod-backwards-or-is-it-zod-in-reverse-39fbba1a2733) I wrote introducing this library.

Check out the following related libraries that I also built with this release.

[ai-sugar](https://github.com/samuelkarani/ai-sugar) AI Sugar is a collection of utility functions for working with AI apis.

```
const sorted = await ai.sort({
  array: ["green", "red", "blue", "yellow"],
  prompt: "rainbow color order",
});
// ["red", "yellow", "green", "blue"]
```

[arrays-sugar](https://github.com/samuelkarani/arrays-sugar) Arrays Sugar is a set of array methods supporting async callbacks: `everyAsync`, `filterAsync`, `findAsync`, `findIndexAsync`, `someAsync`:

```
const array = [1, 2, 3];
array.findIndex(async (number) => number === 2) // 0 ❌
findIndex(array, async (number) => number === 2) // 1 ✅
```

## [🎉 Become a sponsor starting 5$](https://github.com/sponsors/samuelkarani)

Support us if you would like this work to continue! You can contribute on either on [Github Sponsors](https://github.com/sponsors/samuelkarani) or [Patreon](https://patreon.com/samuelkarani) or [BuyMeACoffee](https://coff.ee/samuelkarani) - once or monthly.

<!-- Sponsorship allows development and maintenance of all 3 sugar libraries i.e. [ai-sugar](https://github.com/samuelkarani/ai-sugar), [arrays-sugar](https://github.com/samuelkarani/arays-sugar) and [zod-sugar](https://github.com/samuelkarani/zod-sugar). -->

<!-- You can become a sponsor at whatever amount you are comfortable with.

- For individuals, starting $5 monthly or a one-time payment.
- For companies, starting $100 monthly or a one-time payment.

As a sponsor you can have yours or your organization's name or photo featured in our upcoming sponsors list tiers.
The list tiers will be updated every month to reflect the total contributions for every individual and company. -->

<!-- Additionally each person & company gets 144 characters to promote anything they would want. -->

## Where you can find me

You can reach me via email at samuel.karani@berkeley.edu

I occasionally inhabit Twitter https://x.com/samuel_karani

<!-- I also have an [Instagram](https://www.instagram.com/samiezkay) -->

## What I'm building

[![Similarly logo](similarly.png)](https://chromewebstore.google.com/detail/similarsites+-discover-al/dhahadpjpmphckgebnikgpdhaolcojdg)

Find the best alternatives with one click. Discover similar websites, tools and services instantly while browsing. Never miss out on better options again.
[Check out Similarly](https://chromewebstore.google.com/detail/similarsites+-discover-al/dhahadpjpmphckgebnikgpdhaolcojdg)

<!-- I am also a co-founder at PollGPT and we're currently on the lookout for investors - reach out if you're interested in building the future of research with AI. -->
