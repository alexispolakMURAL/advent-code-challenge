// Day 3 - #2
import { data } from "./data";

const calculateCounter = (array, bitIndex) => { 
    let ones = [];
    let zero = [];
    let counter = 0;

    for (let y = 0; y < array.length; y++) {
      counter += array[y][bitIndex] > 0 ? 1 : -1;
  
      if(array[y][bitIndex] > 0) {
        counter += 1;
        ones.push(array[y]);
      } else {
        counter -= 1;
        zero.push(array[y]);
      }
    }
    
    return { ones, zero, counter };
  };
  
  const calculate = (type, array, bitIndex = 0) => {
      if(array.length === 1)
        return array[0].join(''); 
  
      const counterData = calculateCounter(array, bitIndex);
  
      if(counterData.counter >= 0)
          return calculate(type, type === 'o2' ? counterData.ones : counterData.zero, bitIndex+1);
      else
          return calculate(type, type === 'o2' ? counterData.zero : counterData.ones , bitIndex+1);
  }
  
  const dataArray2 = data.split(/\r?\n/).map(m => m.split(''));
  const oxygen = calculate('o2', dataArray2);
  const co2 = calculate('co2', dataArray2);
  
  console.log(parseInt(oxygen, 2) * parseInt(co2, 2));