const findSmallestMissingPositiveInteger = require('./index');
const test =require('@jest/globals').test;
const expect = require('@jest/globals').expect;


describe('findSmallestMissingPositiveInteger', () => {
    test('should return the smallest missing positive integer', () => {
        const array = [1, 3, 6, 4, 1, 2];
        expect(findSmallestMissingPositiveInteger(array)).toBe(5);
    });

    test('should return the smallest missing positive integer', () => {
        const array2 = [1, 2, 3];
        expect(findSmallestMissingPositiveInteger(array2)).toBe(4);
    });

    test('should return the smallest missing positive integer', () => {
        const array3 = [-1, -3];
        expect(findSmallestMissingPositiveInteger(array3)).toBe(1);
    });



})