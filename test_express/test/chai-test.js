const chai = require('chai');
const expect = chai.expect;

describe('chai test', () => {
    it('should compare some values', () => {
        expect(1).to.equal(1);
    });
    it('should check every property', () => {
        expect({name: 'foo'}).to.deep.equal({name: 'foo'});
    });

    it('should have a property with a value', () => {
        expect({name: 'foo'}).to.have.property('name').to.equal('foo');
    });

    it('should be false', () => {
        result = (5 > 8);
        expect(result).to.be.false;
    });

    it('should be an object', () => {
        expect({}).to.be.a('object');
    });

    it('should be a string', () => {
        expect('string').to.be.a('string');
    });

    it('should be a number', () => {
        expect(3).to.be.a('number');
    });

    it('should be a string with a set length', () => {
        expect('abc').to.be.a('string').with.lengthOf(3);
    });

    it('should be an array with a set length', () => {
        expect([1,2,3].length).to.equal(3);
    });

    it('should be null', () => {
        expect(null).to.be.null;
    });

    it('should be undefined and not exist', () => {
        expect(undefined).to.not.exist;
    });

    it('should exist', () => {
        expect(1).to.exist;
    });
});
