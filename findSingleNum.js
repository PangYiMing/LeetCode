// 异或
var singleNumber = function (nums) {
    let num = 0
    nums.forEach(el => {
        num ^= el
    });
    return num
};


// 记次数比较好
// var singleNumber = function (nums) {
//     const obj = {}
//     nums.forEach(el => {
//         obj[el] ? obj[el] = 2 : obj[el] = 1
//     });
//     for (const key in obj) {
//         if (Object.hasOwnProperty.call(obj, key)) {
//             const el = obj[key];
//             if (el === 1) {
//                 return key
//             }
//         }
//     }
// };



// 这个是反面教材 时间 O n^2 空间 O n
// var singleNumber = function (nums) {
//     let newNums = []
//     while (nums.length) {
//         const shift = nums.shift()
//         if (!nums.includes(shift) && !newNums.includes(shift)) {
//             return shift
//         }
//         newNums.push(shift)
//     }
// };
console.log(singleNumber([8,0,4, 8, 3, 3, 1, 1, 4]))