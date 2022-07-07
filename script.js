function calc(nums) {
    let arr = []
    for(let i = 0; i < nums.length; i++) {
        if(i == 0) {
            arr.push(nums[i])
        }else {
            arr.push(arr[i - 1] + nums[i])
        }
    }
    return arr;
}

console.log(calc([1,2,3,4,5,6])) // argumentni arr formatida yozing !