
const set = (digits) => {
    let index = digits.length - 1;
    let temp = digits[index] + 1;
    digits[index] = temp;
    let newDigits = digits.join("");
    return newDigits.toString().split("").map(ele => +ele);
}

const digits = [1,2,3];
console.log(set(digits));
const digits1 = [0];
console.log(set(digits1));
const digits2 = [9];
console.log(set(digits2));

const digits3 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 16, 12, 19];
console.log(set(digits3));



