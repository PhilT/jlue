'use strict';

describe('Array', function () {
  describe('#indexOf()', function () {
    it('returns -1 when the value is not present', function () {
      expect([1, 2, 3].indexOf(5)).toEqual(-1);
    });

    it('returns positive when the value is present', function () {
      expect([1, 3].indexOf(2)).toEqual(1);
    });
  });
});
