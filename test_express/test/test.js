const assert = require('assert');

describe('file to be tested', () => {
    context('function to be tested', () => {
        before(() => {
            console.log('========before' + "\n");
        });
        after(() => {
            console.log('========after' + "\n");
        });
        beforeEach(() => {
            console.log('======beforeEach called' + "\n");
        });
        afterEach(() => {
            console.log('======afterEach called' + "\n");
        });
        it('should do something', () => {
            assert.strictEqual(1, 1, '1 != 1');
        });
    });
});
