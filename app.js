let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function twoSum(arr, target) {
    let hash = {};
    let sum = []
    arr.forEach((item) => {
        let diff = target - item;

        if (hash[diff.toString()] !== undefined) {
            sum.push([item, diff]);
        }
        hash[item.toString()] = item;
    });
    return sum;
}

console.log(twoSum(arr,10));