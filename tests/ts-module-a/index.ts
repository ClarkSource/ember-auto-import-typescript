export * from './some';
export const works = () => true;

import * as b from '@test/ts-module-b';
export const moduleB = b;

export enum SomeEnum {
  foo,
  bar
}
