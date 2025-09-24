function convert(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        const nums = num.toString().split('')
        if (nums.includes('5')) return 'FizzBuzzBuzz'
        if (nums.includes('3')) return 'FizzFizzBuzz'
        return "FizzBuzz"
    }

    if (num % 3 == 0) {
        const nums = num.toString().split('')
        if (nums.includes('3')) return 'FizzFizz'
        return "Fizz"
    }

    if (num % 5 == 0) {
        const nums = num.toString().split('')
        if (nums.includes('5')) return 'BuzzBuzz'
        return "Buzz"
    }

    return num.toString()

}

module.exports = convert
