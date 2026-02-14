import { a } from "@example/a";
import { b } from "@example/b";

export function ab(): string {
  return a() + b() + a() + b();
}
