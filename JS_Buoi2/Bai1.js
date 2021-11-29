function countNumber(a){
    let newNums = {};
    for(let value of a){
        if(typeof newNums[value] === 'undefined' || newNums[value] === null)
            newNums[value] = 1;
        else
            newNums[value]++;
    }
    for (let value in newNums){
        console.log("So " + value + " xuất hiện " + newNums[value] + " lần");
    }
}
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
countNumber(nums);

const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
// countNumber(nums1);

const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
// countNumber(nums2); 

//cd JS_Buoi2 
//node Bai1.js 