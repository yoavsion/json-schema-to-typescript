export const input = {
  "title": "Cycle (2)",
  "properties": {
    "foo": {
      "$ref": "test/resources/cycle.3.json"
    }
  },
  "required": ["foo"],
  "additionalProperties": true
}

export const output = `/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

export interface Cycle2 {
  foo: Cycle3;
  [k: string]: any;
}
export interface Cycle3 {
  foo?: Cycle4;
}
export interface Cycle4 {
  foo?: number;
  bar?: Cycle3;
  [k: string]: any;
}
`
