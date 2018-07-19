import time from '../../components/modulo1';

describe('basic feature', () => {
    test('should return a div', () => {
        expect(time.func1(1)).toBe(2)
    })
})