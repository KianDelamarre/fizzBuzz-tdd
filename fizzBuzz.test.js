// import { convert } from './fizzBuzz.js'

const convert = require('./fizzBuzz')

test("convert 1 to 1", () => {
    expect(convert(1)).toBe("1")
})

test("return 2", () => {
    expect(convert(2)).toBe("2")
})

test("return 3", () => {
    expect(convert(4)).toBe("4")
})

test("return fizz when input 3", () => {
    expect(convert(3)).toBe("FizzFizz")
})

test("return fizz when input 6", () => {
    expect(convert(6)).toBe("Fizz")
})

test("return fizz when input 9", () => {
    expect(convert(9)).toBe("Fizz")
})

test("return buzz when input 5", () => {
    expect(convert(5)).toBe("BuzzBuzz")
})

test("return buzz when input 10", () => {
    expect(convert(10)).toBe("Buzz")
})

test("return buzz when input 15", () => {
    expect(convert(15)).toBe("FizzBuzzBuzz")
})

test("return buzz when input 30", () => {
    expect(convert(30)).toBe("FizzFizzBuzz")
})

test("return fizz when input 33", () => {
    expect(convert(33)).toBe("FizzFizz")
})