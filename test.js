var nums = [10, 20, 30, 40, 50];

for(var i=0; i<nums.length/2; i++){
    var t = nums[i];
    nums[i] = nums[nums.length-1-i];
    nums[nums.length-1-i] = t;
}
console.log(nums);