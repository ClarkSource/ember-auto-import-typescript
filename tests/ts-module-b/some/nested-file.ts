export class Foo {
  bar = false;
}

const foo = { bar: { baz: undefined } };

export const works = foo.bar?.baz ?? (() => true);
