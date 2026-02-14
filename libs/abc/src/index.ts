import { ab } from "@example/ab";
import { c } from "@example/c";

export function abc(): string {
  return ab() + c();
}
