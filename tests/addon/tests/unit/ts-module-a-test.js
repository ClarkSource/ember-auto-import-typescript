import { module, test } from 'qunit';

import { moduleB, SomeEnum, works } from '@test/addon';

module('ts-module-a', function () {
  test('it works', function (assert) {
    assert.ok(works());
    assert.ok('Foo' in SomeEnum);
    assert.ok('Bar' in SomeEnum);
    assert.ok(moduleB.nestedWorks());
  });
});
