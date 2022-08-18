const sum = require('../utils/sum');
const assert = require('assert')

describe("#sum()", function() {
    context('without arguments', function() {
        it('should return 0', function() {
            assert.equal(sum(), 0)
        })
    })

    context('with arguments', function() {
        it('should returns the sum', function() {
            assert.equal(sum(3, 6, 1), 10)
        })
    })
})