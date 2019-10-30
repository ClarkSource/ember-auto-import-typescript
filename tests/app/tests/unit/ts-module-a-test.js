import { module, test } from 'qunit';

import { works, SomeEnum, moduleB } from '@test/ts-module-a';

module('ts-module-a', function() {
  test('it works', function(assert) {
    assert.ok(works());
    assert.ok('foo' in SomeEnum);
    assert.ok('bar' in SomeEnum);
    assert.ok(moduleB.nestedWorks());
  });
});
