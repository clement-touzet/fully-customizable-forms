/* eslint-disable @typescript-eslint/no-explicit-any */
export function enumToPgEnum<T extends Record<string, unknown>>(
  myEnum: T
): [T[keyof T], ...T[keyof T][]] {
  return Object.values(myEnum).map((value: unknown) => `${value}`) as any;
}
