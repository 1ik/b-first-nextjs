/* eslint-disable @typescript-eslint/no-explicit-any */
import objectsToArray from "./objectsToArray";

export default function objectsToString(object: any) {
  return objectsToArray(object).join(" ");
}
