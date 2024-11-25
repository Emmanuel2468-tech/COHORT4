const { add, subtract, multiply, divide, isZero, validNum } = require('./utils/calculate');

const calculate = (a, b, operator) => {
    const op = operator.toLowerCase();
    const validA = validNum(a);
    const validB = validNum(b);

    if (!validA || !validB) {
        return 'Invalid Number';
    }

    switch (op) {
        case 'add':
            return add(a, b);
            case 'subtract':
           return subtract(a, b);
            case 'multiply':
            return multiply(a, b);
            case 'divide':
                if (isZero(b)) {
                    return 'cannot divide by zero';
                } else {
                    return divide(a, b);
                }
                default:
                    return 'Invalid operator';
            
    }
};

console.log(calculate(2, '3', 'add'));
console.log(calculate(2, 3, 'add'));
console.log(calculate(2, '3', 'ashdbe'));
console.log(calculate(8, 3, 'divide'));
console.log(calculate(0, 3, 'divide'));
console.log(calculate(10, 0, 'divide'));


