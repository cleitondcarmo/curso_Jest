import {add, mult} from '../src/calc'

describe("test calc", () => {
    it("sould return 15 for add(10, 5)", () => {
        expect(add(10, 5)).toBe(15)
    })
    it("sould return 5 for add(10, 5)", () => {
        expect(add(2, 3)).toBe(5)
    })
})

describe("test calc mult", () => {
    it("sould return 50 for mult(10, 5)", () => {
        expect(mult(10, 5)).toBe(50)
    })
    it("sould return 6 for mult(10, 5)", () => {
        expect(mult(2, 3)).toBe(6)
    })
})