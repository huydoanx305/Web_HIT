//case1
const case1 = "tranduong";

// case2
const case2 = "hitclubhiuhiu";

// case3
const case3 = "aabb";

const check = (case1) => {
    let map = {};
    for(const value of case1)
        map[value] = map.hasOwnProperty(value) ? ++map[value] : 1;   

    for(const index in Object.keys(map))
        if(Object.values(map)[index] == 1)   
            return index;
    return -1;
    // for(const index in case1)
    //     if(map[case1[index]] == 1)
    //         return index;
    // return -1;
};
console.log("case1");
console.log("output: " + check(case1));
console.log("case2");
console.log("output: " + check(case2));
console.log("case3");
console.log("output: " + check(case3));