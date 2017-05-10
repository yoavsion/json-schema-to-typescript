export const input = {
  "title": "OneOf",
  "type": "object",
  "properties": {
    "foo": {
      "type": "object",
      "oneOf": [
        {"$ref": "#/definitions/foo"},
        {"$ref": "#/definitions/bar"},
        {"$ref": "#/definitions/baz"}
      ]
    }
  },
  "definitions": {
    "foo": {
      "properties": {
        "a": { "type": "string" },
        "b": { "type": "integer" }
      },
      "additionalProperties": false,
      "required": ["a"]
    },
    "bar": {
      "properties": {
        "a": { "enum": ["a", "b", "c"] }
      }
    },
    "baz": {
      "properties": {
        "baz": { "$ref": "#/definitions/bar" }
      }
    }
  },
  "required": ["foo"],
  "additionalProperties": false
}

export const output = `/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

export interface OneOf {
  foo: (Foo | Bar | Baz);
}
export interface Foo {
  a: string;
  b?: number;
}
export interface Bar {
  a?: ("a" | "b" | "c");
  [k: string]: any;
}
export interface Baz {
  baz?: Bar;
  [k: string]: any;
}
`
