export const input = {
  type: 'object',
  properties: {
    definitions: {
      $ref: '#/definitions/definitions'
    }
  },
  definitions: {
    definitions: {
      $ref: '#/definitions/schema'
    },
    schema: {
      type: 'object',
      properties: {
        additionalProperties: {
          anyOf: [
            {
              $ref: '#/definitions/schema'
            }
          ]
        }
      }
    }
  }
}

export const output = `/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

export interface ReservedWords {
  definitions?: Definitions;
  [k: string]: any;
}
export interface Definitions {
  additionalProperties?: Definitions;
  [k: string]: any;
}
`
