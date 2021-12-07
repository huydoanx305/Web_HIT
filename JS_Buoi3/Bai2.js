const set = (digits) => {
    const newDigits = digits.join("");
    const sumDigits = parseInt(newDigits) + 1;
    return sumDigits.toString().split("").map(ele => +ele);
}
const digits = [1,2,3];
console.log(set(digits));
const digits1 = [0];
console.log(set(digits1));
const digits2 = [9];
console.log(set(digits2));

