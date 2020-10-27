export * from './some';
export const works = () => true;

import * as b from '@test/ts-module-b';
export const moduleB = b;

export enum SomeEnum {
  Foo,
  Bar
}

export class SomeClass {
  someProperty = true;
  private somePrivateProperty = true;
  declare someDeclaredProperty: true;
}

export type { SomeType } from './types-only';
