const square = function(x) {
    return x * x;
}

const squareArrow = (y) => y * y;

console.log(square(8));
console.log(squareArrow(9));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Firstname Lastname'));

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());