import { strictEqual } from "node:assert";
import { describe, it } from "node:test";
import { createZod } from "./index.js";

function test(value: unknown) {
  const schema = createZod(value);
  const result = schema.safeParse(value);
  strictEqual(result.success, true);
}

describe("createZod", () => {
  it("null", async () => {
    test(null);
  });

  it("undefined", async () => {
    test(undefined);
  });

  it("number", async () => {
    test(1);
  });

  it("string", async () => {
    test("foo");
  });

  it("boolean", async () => {
    test(false);
  });

  it("symbol", async () => {
    test(Symbol("foo"));
  });

  it("bigint", async () => {
    test(BigInt(1));
  });

  it("array", async () => {
    test([1, 2, 3]);
  });

  it("object basic", async () => {
    test({ foo: "bar", baz: 1 });
  });

  it("object nested", async () => {
    test({
      foo: "bar",
      bar: 1,
      baz: [1, 2, 3],
      qux: { foo: "bar" },
    });
  });

  it("object advanced", async () => {
    test({
      foo: "bar",
      bar: 1,
      baz: [1, 2, 3],
      bigint: BigInt(9007199254740991),
      qux: {
        0: 0,
        foo: false,
        bar: {
          foo: "bar",
          null: null,
          [Symbol("foo")]: "bar",
        },
        baz: ["1", "2", "3"],
      },
      undefined: undefined,
    });
  });
});
