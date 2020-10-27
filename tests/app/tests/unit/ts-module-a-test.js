import { module, test } from 'qunit';

import { works, SomeEnum, moduleB, foo } from '@test/ts-module-a';

module('ts-module-a', function () {
  test('it works', function (assert) {
    assert.ok(works());
    assert.ok('Foo' in SomeEnum);
    assert.ok('Bar' in SomeEnum);
    assert.ok(moduleB.nestedWorks());
    assert.ok(foo === 'foo');
  });
});
