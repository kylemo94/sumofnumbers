const numList = [1, 1, 2, 4];

function sumFor(nums){
  let total = 0;
  for(const a of nums){
    total+= a;
  }
  return total;
}
console.log(sumFor(numList));

function sumWhile(nums){
  let total = 0;
  let i = 0;
  while(i != nums.length){
    total += nums[i];
    i++;
  }
  return total;
}
console.log(sumWhile(numList));

function sumRecursion(nums){
  if(nums.length === 0){
    return 0;
  }
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
}
console.log(sumRecursion(numList));

function sumTheSimpleWay(nums){
  let n = 0;
  return _.reduce(nums, function(val, n){return val + n},0);
}
console.log(sumTheSimpleWay(numList));
