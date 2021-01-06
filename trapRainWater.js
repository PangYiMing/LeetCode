
var trap = function (height) {
    const reverseIgMap = []
    return trap2(height, reverseIgMap, false) + trap2(height.reverse(), reverseIgMap, true)
}
var trap2 = function (height, map, isReverse) {
    // 相邻两柱子内有凹陷，低于两个柱子
    let left = -1
    let right = -1
    let trap = 0
    height.forEach((_el, index) => {
        if (left === -1) {
            left = index
            // console.log('left', left)
        } else {

            // 判断加上以后是否最大
            if (height[left] <= height[index]) {
                right = index
                trap += compute(height, left, right, map, isReverse)
                // console.log('trap compute ', trap)
                left = right
            }

        }


    });
    isReverse && console.log(map)
    return trap

};
function compute(height, left, right, map, isReverse) {
    let center = []
    if (isReverse && map.includes(left + ',' + right)) {
        return 0
    }
    if (!isReverse) {
        const o = height.length - left - 1
        const o1 = height.length - right - 1
        map.push(o1 + ',' + o)
    }

    if (right > left) {
        center = height.slice(left + 1, right)
    }
    // console.log('compute', left, right, center)

    if (center.length) {
        return ((height[left] > height[right]) ? height[right] : height[left]) * center.length - center.reduce((c, i) => c + i)
    }
    return 0
}
console.log(trap([4, 2, 0, 3, 2, 5]))
console.log(trap([2, 0, 2]))
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
// console.log(compute([4, 2, 0, 3, 2, 5], 0, 5))