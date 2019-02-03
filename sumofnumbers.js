const numList = [1, 1, 2, 4];

function forSum(nums){
  let total = 0;
  for(const a of nums){
    total+= a;
  }
  return total;
}
console.log(forSum(numList));

function whileSum(nums){
  let total = 0;
  let i = 0;
  while(i != nums.length){
    total += nums[i];
    i++;
  }
  return total;
}
console.log(whileSum(numList));

function recursionSum(nums){
  if(nums.length === 0){
    return 0;
  }
    return nums[0] + recursionSum(nums.slice(1, nums.length));
}
console.log(recursionSum(numList));

function underscoreSum(nums){
  let n = 0;
  return _.reduce(nums, function(val, n){return val + n},0);
}
console.log(underscoreSum(numList));
