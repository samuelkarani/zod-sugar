import { z } from "zod";

export type Primitive = string | number | boolean | symbol | bigint;

export const isPrimitive = (value: unknown): value is Primitive => {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "symbol" ||
    typeof value === "bigint"
  );
};

export function getPrimitive(value: Primitive): z.ZodSchema {
  if (typeof value === "string") {
    return z.string();
  }
  if (typeof value === "number") {
    return z.number();
  }
  if (typeof value === "boolean") {
    return z.boolean();
  }
  if (typeof value === "symbol") {
    return z.symbol();
  }
  if (typeof value === "bigint") {
    return z.bigint();
  }
  throw new Error("Unknown type " + String(value));
}

export function createZod(unknown: unknown): z.ZodSchema {
  if (unknown === null) {
    return z.null();
  }
  if (unknown === undefined) {
    return z.undefined();
  }
  if (isPrimitive(unknown)) {
    return getPrimitive(unknown);
  }
  if (Array.isArray(unknown)) {
    return z.array(createZod(unknown[0]));
  }
  const object: Record<string, z.ZodSchema> = {};
  for (const [key, value] of Object.entries(unknown)) {
    object[key] = createZod(value);
  }
  // const object = Object.entries(unknown).reduce((obj, [key, value]) => {
  //   obj[key] = createZod(value);
  //   return obj;
  // }, {} as Record<string, z.ZodSchema>);
  const schema = z.object(object);
  return schema;
}
