const sum = (array, index) => {
    return array[index] + array[index-1] + array[index-2]; 
  };
  
  let sumAmount = 0;
  for(let i = 4; i < numbers.length; i++) {
    if(sum(numbers, i) > sum(numbers, i-1))
      sumAmount++;
  }
  console.log('SumAmount: '+sumAmount);